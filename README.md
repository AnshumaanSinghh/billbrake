<div align="center">

# 🧾 BillBrake

### Hit the brakes before the bill hits you.

**Which developer services can surprise you with a bill, and how to put a hard spending cap on each one.**

[**Search the list →**](https://anshumaansinghh.github.io/billbrake/)

[![Validate](https://github.com/AnshumaanSinghh/billbrake/actions/workflows/validate.yml/badge.svg)](https://github.com/AnshumaanSinghh/billbrake/actions/workflows/validate.yml)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](CONTRIBUTING.md)
[![Content: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-blue)](LICENSE)

</div>

You try a cloud service on the free tier. You leave a test running, a bot finds your API key, or a post goes viral. A month later the bill is four figures.

Most services do not stop when you pass the free tier. They keep serving and keep billing. Many have no way to stop the bill at all, only an email that tells you after the fact.

For each service, this list answers four questions:

1. **What happens when you pass the free tier:** does it stop, or start charging?
2. **Can you set a hard cap** that actually stops spending?
3. **How exactly** do you turn it on? Step by step, with the real menu names.
4. **What keeps charging** even with a cap?

Every fact links to the provider's own documentation, and every entry shows the date it was last checked.

## How to read the verdicts

Almost every free plan simply stops when you hit its limit. The real risk starts **once you add a card**, so each verdict describes that moment.

| | Verdict | Meaning |
|---|---|---|
| 🟢 | **Stops at the limit** | Safe by default, even on paid plans. Usage stops at your prepaid credit or plan limit instead of billing more. |
| 🔵 | **Hard cap available** | You can be charged, but a real hard cap exists. **You have to turn it on.** |
| 🟠 | **Partial cap** | A hard cap exists only for some products or plans, or is still in preview. |
| 🔴 | **No cap** | No spending cap you can set. At most an alert, which tells you but does not protect you. |

## The list

<!-- services:start -->
**32 services** · 🟢 6 stops at the limit · 🔵 10 hard cap available · 🟠 6 partial cap · 🔴 10 no cap

### Cloud

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Amazon Web Services (AWS)](https://aws.amazon.com) | 🔴 No cap | On a normal Paid plan AWS has no spending cap, so you can be charged without limit. Only the time-limited Free plan guarantees you pay nothing. | [Full guide](services/aws.md) |
| [Cloudflare (Workers, R2 and developer platform)](https://www.cloudflare.com) | 🔴 No cap | On the Workers Free plan, usage stops at the daily limits instead of costing money. Paid usage (Workers Paid, R2, D1 and others) has no spending cap, only budget alerts. | [Full guide](services/cloudflare.md) |
| [DigitalOcean](https://www.digitalocean.com) | 🟠 Partial cap | DigitalOcean has no spending cap for Droplets and most products. The only hard stop is a preview feature that can pause Serverless Inference model access keys. | [Full guide](services/digitalocean.md) |
| [Google Cloud](https://cloud.google.com) | 🟠 Partial cap | Google Cloud now has real spend caps, but only for four services (Gemini API, Vertex AI, Cloud Run and Cloud Run functions). Everything else only gets alerts. | [Full guide](services/google-cloud.md) |
| [Microsoft Azure](https://azure.microsoft.com) | 🟠 Partial cap | Azure free accounts and some credit-based subscriptions have a spending limit that turns services off when the credit is used up. Normal pay-as-you-go subscriptions cannot have one and only get alerts. | [Full guide](services/azure.md) |
| [Oracle Cloud Infrastructure (OCI)](https://www.oracle.com/cloud/) | 🔴 No cap | A Free Tier Oracle Cloud account is not charged unless you choose to upgrade it. After you upgrade to a paid account, there is no spending cap, only budget alerts. | [Full guide](services/oracle-cloud.md) |

### Hosting

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Fly.io](https://fly.io) | 🔴 No cap | Fly.io has no spending cap and, by its own docs, no billing alerts yet, so once a card is on file you pay for whatever you run. | [Full guide](services/fly-io.md) |
| [Heroku](https://www.heroku.com) | 🔴 No cap | Heroku has no free tier and no spending cap, but most charges are fixed per dyno or add-on, so your bill mostly depends on what you leave running. | [Full guide](services/heroku.md) |
| [Netlify](https://www.netlify.com) | 🟢 Stops at the limit | On Netlify's current credit-based plans, your sites pause when your monthly credits run out, unless you turn on auto recharge yourself. | [Full guide](services/netlify.md) |
| [Railway](https://railway.com) | 🔵 Hard cap available | Railway bills paid plans for usage above the included amount, but you can set a hard limit that takes your services offline when it is reached. | [Full guide](services/railway.md) |
| [Render](https://render.com) | 🟠 Partial cap | Render has a spend limit only for build minutes; once you add a payment method, extra bandwidth is billed with no cap. | [Full guide](services/render.md) |
| [Vercel](https://vercel.com) | 🔵 Hard cap available | The free Hobby plan stops instead of charging you, and on the paid Pro plan you can turn on Spend Management to pause your sites at a dollar amount you choose. | [Full guide](services/vercel.md) |

### Database

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [MongoDB Atlas](https://www.mongodb.com/atlas) | 🔴 No cap | The Free cluster is free and slows down instead of charging you, but paid clusters have no spending cap, only billing alerts. | [Full guide](services/mongodb-atlas.md) |
| [Neon](https://neon.com) | 🟠 Partial cap | The Free plan never charges you, but on paid plans the dashboard spending setting only sends emails; the only real stop is per-project limits that you set through the API. | [Full guide](services/neon.md) |
| [PlanetScale](https://planetscale.com) | 🔴 No cap | PlanetScale has no free plan and no spending cap; you can only turn on email spend alerts. | [Full guide](services/planetscale.md) |
| [Upstash](https://upstash.com) | 🔵 Hard cap available | The free tier needs no card and cannot charge you, and on pay-as-you-go you can set a monthly budget per Redis database that throttles it instead of billing more. | [Full guide](services/upstash.md) |

### Backend

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Appwrite](https://appwrite.io) | 🔵 Hard cap available | Appwrite Cloud's Free plan freezes your project at its limits, and on Pro you can set a budget cap that stops extra usage charges. | [Full guide](services/appwrite.md) |
| [Firebase](https://firebase.google.com) | 🟠 Partial cap | The free Spark plan just stops when you hit a limit, but on the pay-as-you-go Blaze plan you can only cap a few services, and the cap is in Preview. | [Full guide](services/firebase.md) |
| [Supabase](https://supabase.com) | 🔵 Hard cap available | The Free plan never charges you, and the Pro plan has a Spend Cap that is on by default, but the cap does not cover compute and some add-ons. | [Full guide](services/supabase.md) |

### AI

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Anthropic Claude API](https://platform.claude.com) | 🟢 Stops at the limit | The Claude API uses prepaid credits, and when they run out your API calls stop unless you have turned on auto-reload. | [Full guide](services/anthropic.md) |
| [Google Gemini API](https://aistudio.google.com) | 🔵 Hard cap available | The Gemini API is free until you link a billing account; after that you can limit spending with prepaid credits, a project spend cap in AI Studio, or a Google Cloud spend cap budget. | [Full guide](services/google-gemini-api.md) |
| [OpenAI API](https://platform.openai.com) | 🔵 Hard cap available | The OpenAI API runs on prepaid credits, and you can set a monthly spend limit with "Enforce a hard limit" turned on so requests fail once you reach it. | [Full guide](services/openai.md) |
| [Replicate](https://replicate.com) | 🟢 Stops at the limit | New Replicate accounts pay with prepaid credit, so new work stops when the credit runs out unless you turn on auto reload. | [Full guide](services/replicate.md) |

### Messaging

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Resend](https://resend.com) | 🟢 Stops at the limit | Resend stops sending when you reach your plan's quota, unless a team admin turns on paid overages, and even those have a limit you choose. | [Full guide](services/resend.md) |
| [Twilio](https://www.twilio.com) | 🔵 Hard cap available | Twilio takes charges from a prepaid balance and suspends your project when the balance runs out, so with auto-recharge off your balance works as a rough cap. | [Full guide](services/twilio.md) |
| [Twilio SendGrid](https://sendgrid.com) | 🔴 No cap | SendGrid's free trial cannot go over its limits, but paid plans charge overage for every extra email and there is no setting you can use to turn that off. | [Full guide](services/sendgrid.md) |

### Maps

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Google Maps Platform](https://mapsplatform.google.com) | 🔵 Hard cap available | Google Maps Platform bills your Google Cloud billing account past a monthly free amount per product, but you can put a hard cap on each API by lowering its daily quota. | [Full guide](services/google-maps-platform.md) |
| [Mapbox](https://www.mapbox.com) | 🔴 No cap | Mapbox has a monthly free tier for each service, but once you add a payment method there is no spending cap, only email alerts. | [Full guide](services/mapbox.md) |

### Developer tools

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Algolia](https://www.algolia.com) | 🔴 No cap | The free plan is blocked or suspended when you reach its limits, but the pay-as-you-go Grow plans have no spending cap, only a budget notification. | [Full guide](services/algolia.md) |
| [GitHub (Actions, Codespaces, Packages, Copilot)](https://github.com) | 🔵 Hard cap available | Without a payment method, GitHub blocks paid usage when your included amount runs out. With a payment method, you can set budgets that hard-stop metered products like Actions, Codespaces, Packages and Copilot AI credits. | [Full guide](services/github.md) |
| [Sentry](https://sentry.io) | 🟢 Stops at the limit | Sentry drops extra data instead of billing you, and on paid plans you only pay for overage up to a pay-as-you-go budget that you choose. | [Full guide](services/sentry.md) |

### Media

| Service | Verdict | In short | Guide |
|---|---|---|---|
| [Cloudinary](https://cloudinary.com) | 🟢 Stops at the limit | On the Free plan and the fixed paid plans, going over your credits leads to warnings and then a disabled account, not an extra bill; only the Pro PAYG plan charges for overage. | [Full guide](services/cloudinary.md) |

<!-- services:end -->

## Five habits that prevent most surprise bills

1. **Turn on every cap that exists today.** A 🔵 service is only safe after you flip the switch.
2. **Set alerts at 50%, 80% and 100%** of what you expect to spend, on every 🔴 service.
3. **Never commit API keys.** Most of the worst stories start with a key pushed to a public repository. Use secret scanning and rotate a leaked key immediately.
4. **Prefer prepaid credit with auto-recharge turned off** where a service offers it. It is the simplest cap there is.
5. **Delete what you are not using.** Storage, IP addresses and idle databases keep charging even when nothing runs.

## Contributing

Corrections matter most. Billing pages change all the time, and one wrong "you are safe" can cost someone real money.

- **Something is out of date?** [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml). A link to the official page is all we need.
- **Want to add a service?** Read [CONTRIBUTING.md](CONTRIBUTING.md). It takes one JSON file.

## Disclaimer

This guide is checked against official documentation, but providers change billing often and the details depend on your plan and region. Always confirm in the provider's own docs before relying on a cap. This is not financial advice.

## License

The guide content is licensed [CC BY 4.0](LICENSE): share and adapt it, with credit. The build scripts are MIT.
