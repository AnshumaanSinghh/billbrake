# Contributing

Thank you. This list is only useful if it is correct, so every change needs a source.

## Report a correction

The fastest way: [open a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml) with a link to the official page that shows the current behaviour.

## Edit or add a service

Each service is one file: `data/services/<id>.json`. Everything else is generated from it, so never edit `services/*.md`, the table in `README.md` or `site/index.html` by hand.

1. Copy an existing file, for example `data/services/vercel.json`, and rename it, for example `data/services/my-service.json`.
2. Fill in every field. [data/SCHEMA.md](data/SCHEMA.md) explains each one and the four verdicts.
3. Run the build. It needs Node.js 20 or newer and has no dependencies.

   ```bash
   node scripts/build.mjs
   ```

4. Commit the JSON together with the generated files, and open a pull request.

## Rules for every entry

- **Official sources first.** Every claim must be backed by a link in `sources`. Prefer the provider's docs and pricing pages over blog posts.
- **Plain English.** Write for someone who has never seen a billing console. Short sentences.
- **Exact menu names.** Copy them from the official docs, for example "Billing > Budgets > Create budget".
- **No guessing.** If the docs are unclear or contradict each other, say so in the text.
- **Leave out numbers that change often,** such as free-tier quotas, unless the official page states them clearly.
- **Stories must be real.** `story` needs a public source, or it stays `null`.
- **Update `last_verified`** whenever you check an entry, even if nothing changed.

## Keeping the list fresh

A scheduled workflow opens an issue each month listing entries that have not been verified in 120 days. Picking one of those, checking it against the docs, and updating `last_verified` is a great first contribution.
