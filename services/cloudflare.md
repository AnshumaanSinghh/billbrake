<!-- Generated from data/services/cloudflare.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Cloudflare (Workers, R2 and developer platform)

**🔴 No cap.** On the Workers Free plan, usage stops at the daily limits instead of costing money. Paid usage (Workers Paid, R2, D1 and others) has no spending cap, only budget alerts.

[Website](https://www.cloudflare.com) · Category: Cloud · Last verified: 2026-11-09

## Free tier

The Workers Free plan includes limited use of Workers, Pages Functions, Workers KV, Hyperdrive and SQLite-backed Durable Objects. For example, Workers Free allows 100,000 requests per day, resetting at midnight UTC. R2 storage has a monthly free amount of storage and operations, and R2 does not charge for egress (data sent out to the internet).

## What happens when you go over

On Workers Free, going over a daily limit makes requests or operations fail with an error (for Workers requests, Error 1027) until the limit resets. You are not charged. The Workers Paid plan costs a minimum of $5 USD per month and charges for usage beyond its included amounts. R2 and other usage-based products charge for usage beyond their free amounts.

## Can you set a hard cap?

No cap for paid usage. Budget alerts only send an email. Cloudflare's docs say they do not pause or cap usage. The only hard stop is the Workers Free plan, where its daily limits block usage instead of billing you.

## How to set a hard cap

1. Stay on the Workers Free plan if you need a guarantee. Its limits stop usage instead of charging you.
2. Do not upgrade to Workers Paid or rely on usage-billed products like R2 or D1 if you cannot afford an open-ended bill. Cloudflare offers no spending cap for them.

## How to set alerts

1. Log in to the Cloudflare dashboard and select your account.
2. Go to Manage Account > Billing.
3. Select Billable Usage.
4. Select Create budget alert.
5. Enter an Alert name, an optional Description, a dollar threshold, and one or more email recipients.
6. Select Save.
7. Since July 2026 Cloudflare is adding a default $10 account-level budget alert to eligible Pay-as-you-go accounts that do not have one. You can change or remove it on the same page.

## Charges a cap will not stop

- All usage-based charges on Workers Paid, R2, D1, Durable Objects, KV and other metered products. Budget alerts never stop them.
- Recurring subscription fees, such as the Workers Paid plan fee. These are also left out of budget alert totals.

## Watch out for

- Budget alerts are not real time. Usage is processed daily, so an alert fires the day after you cross the threshold.
- Budget alerts are only for Pay-as-you-go accounts. Enterprise contract accounts are not supported.
- A bug such as a loop that keeps writing to D1 can run up a large bill before any alert arrives (see the story below).
- Some products round billable usage up to the next billing unit. On R2, for example, one million and one billable operations are billed as two million.
- The default $10 alert only turns on at the start of your next billing cycle, so it does not cover the current one.

## It happened to someone

A solo developer whose Cloudflare bill was usually about $5 a month had two bugs that wrote about 4.8 billion rows to D1 in January 2026. The invoice came to about $4,600. He wrote that D1 had no billing cap. Cloudflare waived the invoice after 18 days, but some services were disabled while the bill was unpaid. ([source](https://littlebearapps.com/blog/d1-billing-disaster-circuit-breakers/))

## Sources

- [Cloudflare Billing docs: Budget alerts](https://developers.cloudflare.com/billing/manage/budget-alerts/)
- [Cloudflare changelog: Billing (budget alerts on by default, July 2026)](https://developers.cloudflare.com/changelog/product/billing/)
- [Cloudflare changelog: Introducing Billable Usage dashboard and Budget alerts](https://developers.cloudflare.com/changelog/post/2026-04-13-billable-usage-dashboard-and-budget-alerts/)
- [Cloudflare Workers: Pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- [Cloudflare Workers: Limits](https://developers.cloudflare.com/workers/platform/limits/)
- [Cloudflare R2: Pricing](https://developers.cloudflare.com/r2/pricing/)
- [Little Bear Apps: My $5/month Cloudflare bill hit $4,868 because of an infinite loop](https://littlebearapps.com/blog/d1-billing-disaster-circuit-breakers/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Cloudflare%20(Workers%2C%20R2%20and%20developer%20platform)) or edit [data/services/cloudflare.json](../data/services/cloudflare.json). [Back to the full list](../README.md)
