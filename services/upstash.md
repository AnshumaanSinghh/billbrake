<!-- Generated from data/services/upstash.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Upstash

**🔵 Hard cap available.** The free tier needs no card and cannot charge you, and on pay-as-you-go you can set a monthly budget per Redis database that throttles it instead of billing more.

[Website](https://upstash.com) · Category: Database · Last verified: 2026-11-09

## Free tier

Every account starts with one free Redis database. No credit card is required. It has limits on data size, monthly commands and monthly bandwidth. The exact numbers are on the pricing page.

## What happens when you go over

On the free tier, when a database goes over its monthly command limit, requests fail with the error 'ERR max requests limit exceeded'. You are not charged. When you add a payment method, every free resource on the account (all Redis databases, plus QStash, Vector, Search and Blob) moves to its paid plan automatically. On pay-as-you-go there is no price ceiling by default: you pay per command, plus storage and bandwidth above the included amounts.

## Can you set a hard cap?

Yes, for pay-as-you-go Redis databases. You can set a maximum monthly budget on each database. When the monthly cost reaches the budget, Upstash emails you and throttles (rate limits) the database, and you are not charged beyond the budget. Budgets are set per database. There is no account-wide budget. Budgets are only available on pay-as-you-go, not on Fixed plans. Fixed plans have a flat monthly price instead.

## How to set a hard cap

1. Open your Redis database in the Upstash Console.
2. Go to the Usage tab.
3. Click Change Budget under the cost metric.
4. Enter the maximum amount you want to pay each month for this database and save.
5. Repeat for every pay-as-you-go database. There is no account-wide budget.
6. Optional: for steady, heavy workloads, switch the database to a Fixed plan, which has a flat monthly price.

## How to set alerts

1. Set a budget on the database as described above. Upstash sends email notifications at 70% and 90% of the monthly budget.
2. Upstash also emails you when a database goes over its plan limits.

## Charges a cap will not stop

- The Database Surplus Charge: on pay-as-you-go, databases beyond the first 10 cost extra each month. This is charged on the account, so a database budget does not cap it.
- Fixed plan prices and their read region add-ons (budgets apply only to pay-as-you-go)
- Other Upstash products such as QStash, Vector, Search and Blob. The Redis budget is set on one Redis database, so check each product's own billing settings.

## Watch out for

- Adding a credit card upgrades every free resource on the account at once. You cannot keep free databases on an account that has a payment method.
- A pay-as-you-go database has no budget until you set one.
- Background job tools (Sidekiq, BullMQ, Celery, cron jobs) send commands all the time, even when idle. On pay-as-you-go this can drive up the command count. Upstash suggests a Fixed plan for these.
- Each replicated write to a read region in a Global database counts as an extra command.
- Lua scripts and transactions count more than one command (each redis.call and MULTI/EXEC are billed).
- If you switch from a Fixed plan to pay-as-you-go in the middle of a month, the budget only tracks pay-as-you-go spending.
- Prod Pack is a paid monthly add-on per database. The docs do not say whether a database budget covers it.
- On Fixed plans with auto-upgrade turned on, hitting the bandwidth or storage limit moves the database to the next, more expensive tier.

## Sources

- [Upstash Docs: Redis Pricing & Billing](https://upstash.com/docs/redis/overall/billing)
- [Upstash Docs: Account and Billing FAQ](https://upstash.com/docs/common/account/faq)
- [Upstash Docs: Upgrade Your Database](https://upstash.com/docs/redis/howto/upgrade-database)
- [Upstash Docs: ERR max requests limit exceeded](https://upstash.com/docs/redis/troubleshooting/max_requests_limit)
- [Upstash Docs: Update Database Budget (Developer API)](https://upstash.com/docs/devops/developer-api/redis/update_budget)
- [Upstash Redis Pricing](https://upstash.com/pricing/redis)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Upstash) or edit [data/services/upstash.json](../data/services/upstash.json). [Back to the full list](../README.md)
