<!-- Generated from data/services/anthropic.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Anthropic Claude API

**🟢 Stops at the limit.** The Claude API uses prepaid credits, and when they run out your API calls stop unless you have turned on auto-reload.

[Website](https://platform.claude.com) · Category: AI · Last verified: 2026-11-09

## Free tier

There is no general free tier for the API. You buy prepaid credits in the Claude Console. Some paid Claude plans (Max, Ultra and Team) include monthly API credits that you can link to a Console organization. Those credits expire at the end of each billing cycle and do not roll over.

## What happens when you go over

Usage is paid from your prepaid credit balance. When credits run out, you can no longer call the API or use the playground until you add more. Nothing is charged to your card unless you buy credits yourself or turn on auto-reload. Organizations that have an invoicing deal with Anthropic Sales are billed monthly instead, and this does not apply to them.

## Can you set a hard cap?

Yes, in two ways. First, prepaid credits with auto-reload turned off act as a cap: requests stop when the balance is empty. Second, you can set your own monthly spend limit on the Billing page, below your usage tier's cap. When you reach it, requests fail with an HTTP 400 error until the next month, or until you raise or remove the limit. Every usage tier (Start, Build, Scale) also has a fixed monthly spend cap set by Anthropic; when you reach it, usage pauses until 00:00 UTC on the first day of the next month. You can also set spend limits on individual workspaces, but not on the Default Workspace. The docs do not say exactly how fast limits take effect.

## How to set a hard cap

1. Easiest cap: do not turn on auto-reload. Your prepaid balance is then the most you can spend.
2. To set an organization spend limit: in the Claude Console, go to the Billing page (platform.claude.com/settings/billing).
3. In the Spend limits section, click Adjust limit (or Set limit if no limit is set yet).
4. Enter a new value. It cannot be higher than your current tier's cap.
5. To cap one project: create a separate workspace for it. Go to the Workspaces page (platform.claude.com/settings/workspaces) and select the workspace.
6. In the panel that opens, click Spend limits, then select Change limit under Monthly limit. (You cannot set a spend limit on the Default Workspace.)

## How to set alerts

1. Go to the Workspaces page (platform.claude.com/settings/workspaces) and select a workspace (not the Default Workspace).
2. In the panel that opens, click Spend limits.
3. Click + Add notification and choose the spend amount that should trigger an email.
4. Track spending on the Cost and Usage pages in the Claude Console.

## Charges a cap will not stop

- Credits bought by auto-reload, if you turn it on. Auto-reload charges your card whenever your balance drops to the level you chose.
- Requests still count and are charged if they were on track to succeed but your client disconnected or timed out.

## Watch out for

- Auto-reload charges your card every time your purchased balance falls to the trigger amount. If your balance is already at or below the trigger when you turn it on, you are charged right away.
- If you get monthly API credits from a Max, Ultra or Team plan, auto-reload looks only at your purchased balance. It can reload even while included credits remain.
- Purchased credits expire one year after purchase and are non-refundable.
- You cannot set a spend limit on the Default Workspace. Put each app in its own workspace if you want per-app limits.
- Your usage tier can move up automatically over time, which raises the tier's spend cap. Your own spend limit still applies.
- Every API key in the organization draws from the same balance, so a leaked key can use up all of your credits. Keep keys on the server and out of public repos.

## It happened to someone

In October 2026 the AI tool OpenCode said an intruder reached a legacy system where some users had saved their AI provider keys. The Hacker News reported users' own claims of unauthorized charges, including $168 on one user's Anthropic key and, citing Notebookcheck, a Reddit user who said they saw $400 of unauthorized Anthropic usage. OpenCode said the keys "may have been exposed". ([source](https://thehackernews.com/2026/10/opencode-console-breach-may-have.html))

## Sources

- [Claude Docs: Rate limits (spend limits and tiers)](https://platform.claude.com/docs/en/api/rate-limits)
- [Claude Help Center: How do I pay for my API usage?](https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-api-usage)
- [Claude Docs: Workspaces](https://platform.claude.com/docs/en/manage-claude/workspaces)
- [Claude Help Center: Create and manage Workspaces in the Claude Console](https://support.claude.com/en/articles/9796807-create-and-manage-workspaces-in-the-claude-console)
- [Claude Docs: API credits for Max, Ultra, and Team plans](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers)
- [The Hacker News: OpenCode Console breach may have exposed OpenAI, Anthropic, and Google API keys](https://thehackernews.com/2026/10/opencode-console-breach-may-have.html)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Anthropic%20Claude%20API) or edit [data/services/anthropic.json](../data/services/anthropic.json). [Back to the full list](../README.md)
