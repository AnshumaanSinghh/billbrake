# Service file schema

One JSON file per service in `data/services/<id>.json`.

| Field | Type | Meaning |
|---|---|---|
| id | string | lowercase-kebab id, same as the file name |
| name | string | display name, e.g. "Google Cloud" |
| category | string | one of: Cloud, Hosting, Database, Backend, AI, Messaging, Maps, Developer tools, Media |
| website | string | homepage URL |
| verdict | string | `safe`, `cappable`, `partial` or `alerts-only` (see below) |
| summary | string | one plain sentence a beginner understands |
| free_tier | string | what is free, in plain words |
| over_free_tier | string | what happens when you pass the free tier or your credit |
| hard_cap | string | can you set a real spending cap that stops charges, and how it behaves |
| how_to_cap | string[] | numbered steps, exact menu names from the official docs; empty if no cap exists |
| how_to_alert | string[] | steps to set budget or usage alerts; empty if none |
| never_capped | string[] | charges that keep running even with a cap or alert |
| gotchas | string[] | short warnings people miss |
| story | object or null | `{ "text": "...", "url": "..." }` a real, sourced surprise-bill incident, or null |
| sources | object[] | `{ "title": "...", "url": "..." }`, official docs first |
| last_verified | string | ISO date, e.g. 2026-11-09 |

## Verdicts

The verdict describes what happens **once you are paying**: on a paid or pay-as-you-go plan, or after you add a card. Almost every free plan simply stops, so judging free plans would make nearly everything look safe. Free-plan behaviour goes in `free_tier` and `summary`.

- **safe**: by default you cannot be charged past the free tier or prepaid credit. Usage stops instead.
- **cappable**: you can be charged, but the service offers a real hard cap that stops spending.
- **partial**: a hard cap exists but only for some products, plans or in preview.
- **alerts-only** (shown as "No cap"): no spending cap you can set. At most budgets or alerts, which do not stop charges.
