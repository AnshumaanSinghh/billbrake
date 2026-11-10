// Validates data/services/*.json and generates README.md (table), services/*.md and site/index.html.
// Usage:
//   node scripts/build.mjs           build everything
//   node scripts/build.mjs --check   fail if data is invalid or generated files are out of date (used in CI)
//   node scripts/build.mjs --stale 120   list entries not verified in the last 120 days
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'data', 'services');
const REPO = 'AnshumaanSinghh/billbrake';
const SITE_URL = 'https://anshumaansinghh.github.io/billbrake/';

export const VERDICTS = {
  safe: { emoji: '🟢', label: 'Stops at the limit', long: 'Safe by default, even on paid plans: usage stops instead of billing you' },
  cappable: { emoji: '🔵', label: 'Hard cap available', long: 'You can be charged, but you can turn on a real hard cap' },
  partial: { emoji: '🟠', label: 'Partial cap', long: 'A hard cap exists only for some products, plans or in preview' },
  'alerts-only': { emoji: '🔴', label: 'No cap', long: 'No spending cap you can set: at most an alert after the fact' },
};
export const CATEGORIES = ['Cloud', 'Hosting', 'Database', 'Backend', 'AI', 'Messaging', 'Maps', 'Developer tools', 'Media'];

const STRING_FIELDS = ['id', 'name', 'category', 'website', 'verdict', 'summary', 'free_tier', 'over_free_tier', 'hard_cap', 'last_verified'];
const LIST_FIELDS = ['how_to_cap', 'how_to_alert', 'never_capped', 'gotchas'];

export function validate(entry, fileId) {
  const errors = [];
  for (const f of STRING_FIELDS) {
    if (typeof entry[f] !== 'string' || entry[f].trim() === '') errors.push(`"${f}" must be a non-empty string`);
  }
  for (const f of LIST_FIELDS) {
    if (!Array.isArray(entry[f]) || entry[f].some((x) => typeof x !== 'string' || !x.trim())) errors.push(`"${f}" must be a list of non-empty strings`);
  }
  if (entry.id !== fileId) errors.push(`"id" is "${entry.id}" but the file is ${fileId}.json`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fileId)) errors.push('file name must be lowercase-kebab-case');
  if (!VERDICTS[entry.verdict]) errors.push(`"verdict" must be one of: ${Object.keys(VERDICTS).join(', ')}`);
  if (!CATEGORIES.includes(entry.category)) errors.push(`"category" must be one of: ${CATEGORIES.join(', ')}`);
  if (['cappable', 'partial'].includes(entry.verdict) && !entry.how_to_cap?.length) errors.push('"how_to_cap" needs steps when a cap exists');
  if (!/^https:\/\//.test(entry.website ?? '')) errors.push('"website" must be an https URL');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.last_verified ?? '') || Number.isNaN(Date.parse(entry.last_verified))) errors.push('"last_verified" must be a date like 2026-11-09');
  if (!Array.isArray(entry.sources) || entry.sources.length === 0) errors.push('"sources" needs at least one source');
  else for (const s of entry.sources) {
    if (typeof s?.title !== 'string' || !s.title.trim() || !/^https:\/\//.test(s?.url ?? '')) errors.push(`bad source: ${JSON.stringify(s)}`);
  }
  if (entry.story !== null && entry.story !== undefined) {
    if (typeof entry.story?.text !== 'string' || !/^https:\/\//.test(entry.story?.url ?? '')) errors.push('"story" must be null or { "text", "url" }');
  }
  return errors;
}

export function loadAll() {
  const entries = [];
  const problems = [];
  for (const file of readdirSync(DATA).filter((f) => f.endsWith('.json')).sort()) {
    const id = file.replace(/\.json$/, '');
    let entry;
    try { entry = JSON.parse(readFileSync(join(DATA, file), 'utf8')); } catch (err) { problems.push(`${file}: invalid JSON (${err.message})`); continue; }
    const errors = validate(entry, id);
    if (errors.length) problems.push(...errors.map((e) => `${file}: ${e}`));
    else entries.push({ ...entry, story: entry.story ?? null });
  }
  entries.sort((a, b) => CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) || a.name.localeCompare(b.name));
  return { entries, problems };
}

// ---------- Markdown ----------
const mdCell = (s) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');
const issueLink = (e) => `https://github.com/${REPO}/issues/new?template=correction.yml&title=${encodeURIComponent(`Correction: ${e.name}`)}`;

export function serviceMarkdown(e) {
  const v = VERDICTS[e.verdict];
  const list = (items) => items.map((x) => `- ${x}`).join('\n');
  const steps = (items) => items.map((x, i) => `${i + 1}. ${x}`).join('\n');
  const out = [
    `<!-- Generated from data/services/${e.id}.json by scripts/build.mjs. Edit the JSON, not this file. -->`,
    `# ${e.name}`,
    '',
    `**${v.emoji} ${v.label}.** ${e.summary}`,
    '',
    `[Website](${e.website}) · Category: ${e.category} · Last verified: ${e.last_verified}`,
    '',
    '## Free tier', '', e.free_tier, '',
    '## What happens when you go over', '', e.over_free_tier, '',
    '## Can you set a hard cap?', '', e.hard_cap, '',
  ];
  if (e.how_to_cap.length) out.push('## How to set a hard cap', '', steps(e.how_to_cap), '');
  if (e.how_to_alert.length) out.push('## How to set alerts', '', steps(e.how_to_alert), '');
  if (e.never_capped.length) out.push('## Charges a cap will not stop', '', list(e.never_capped), '');
  if (e.gotchas.length) out.push('## Watch out for', '', list(e.gotchas), '');
  if (e.story) out.push('## It happened to someone', '', `${e.story.text} ([source](${e.story.url}))`, '');
  out.push('## Sources', '', list(e.sources.map((s) => `[${s.title}](${s.url})`)), '');
  out.push('---', '', `Something out of date? [Report a correction](${issueLink(e)}) or edit [data/services/${e.id}.json](../data/services/${e.id}.json). [Back to the full list](../README.md)`, '');
  return out.join('\n');
}

export function readmeTable(entries) {
  const counts = Object.fromEntries(Object.keys(VERDICTS).map((k) => [k, entries.filter((e) => e.verdict === k).length]));
  const lines = [
    `**${entries.length} services** · ${Object.entries(VERDICTS).map(([k, v]) => `${v.emoji} ${counts[k]} ${v.label.toLowerCase()}`).join(' · ')}`,
    '',
  ];
  for (const cat of CATEGORIES) {
    const rows = entries.filter((e) => e.category === cat);
    if (!rows.length) continue;
    lines.push(`### ${cat}`, '', '| Service | Verdict | In short | Guide |', '|---|---|---|---|');
    for (const e of rows) {
      const v = VERDICTS[e.verdict];
      lines.push(`| [${mdCell(e.name)}](${e.website}) | ${v.emoji} ${v.label} | ${mdCell(e.summary)} | [Full guide](services/${e.id}.md) |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

const START = '<!-- services:start -->';
const END = '<!-- services:end -->';

function injectReadme(readme, table) {
  const a = readme.indexOf(START);
  const b = readme.indexOf(END);
  if (a === -1 || b === -1) throw new Error(`README.md must contain ${START} and ${END}`);
  return `${readme.slice(0, a + START.length)}\n${table}\n${readme.slice(b)}`;
}

// ---------- Website ----------
export function siteHtml(entries) {
  const template = readFileSync(join(ROOT, 'scripts', 'site-template.html'), 'utf8');
  const payload = JSON.stringify({ entries, verdicts: VERDICTS, categories: CATEGORIES, repo: REPO })
    .replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  const updated = entries.map((e) => e.last_verified).sort().at(-1) ?? '';
  return template
    .replace('__DATA__', () => payload)
    .replaceAll('__COUNT__', String(entries.length))
    .replaceAll('__UPDATED__', updated)
    .replaceAll('__REPO__', REPO)
    .replaceAll('__SITE_URL__', SITE_URL);
}

// ---------- Main ----------
function main(args) {
  const { entries, problems } = loadAll();
  if (args.includes('--stale')) {
    const days = Number(args[args.indexOf('--stale') + 1] ?? 120);
    const cutoff = Date.now() - days * 86400000;
    const stale = entries.filter((e) => Date.parse(e.last_verified) < cutoff);
    for (const e of stale) console.log(`- [ ] **${e.name}**: last verified ${e.last_verified} ([data](data/services/${e.id}.json))`);
    return 0;
  }
  if (problems.length) {
    console.error(`Invalid data:\n${problems.map((p) => `  - ${p}`).join('\n')}`);
    return 1;
  }

  const files = new Map();
  files.set('README.md', injectReadme(readFileSync(join(ROOT, 'README.md'), 'utf8'), readmeTable(entries)));
  for (const e of entries) files.set(`services/${e.id}.md`, serviceMarkdown(e));
  files.set('site/index.html', siteHtml(entries));

  const expected = new Set([...files.keys()].filter((f) => f.startsWith('services/')));
  const orphans = existsSync(join(ROOT, 'services'))
    ? readdirSync(join(ROOT, 'services')).map((f) => `services/${f}`).filter((f) => !expected.has(f))
    : [];

  if (args.includes('--check')) {
    const outdated = [...files].filter(([f, content]) => !existsSync(join(ROOT, f)) || readFileSync(join(ROOT, f), 'utf8') !== content).map(([f]) => f);
    if (outdated.length || orphans.length) {
      console.error(`Generated files are out of date: ${[...outdated, ...orphans].join(', ')}\nRun: node scripts/build.mjs`);
      return 1;
    }
    console.log(`OK: ${entries.length} services valid, generated files up to date.`);
    return 0;
  }

  for (const [f, content] of files) {
    mkdirSync(dirname(join(ROOT, f)), { recursive: true });
    writeFileSync(join(ROOT, f), content);
  }
  for (const f of orphans) rmSync(join(ROOT, f));
  console.log(`Built ${entries.length} services: README.md, services/*.md, site/index.html`);
  return 0;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) process.exitCode = main(process.argv.slice(2));
