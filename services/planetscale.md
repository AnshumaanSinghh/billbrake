<!-- Generated from data/services/planetscale.json by scripts/build.mjs. Edit the JSON, not this file. -->
# PlanetScale

**🔴 No cap.** PlanetScale has no free plan and no spending cap; you can only turn on email spend alerts.

[Website](https://planetscale.com) · Category: Database · Last verified: 2026-11-09

## Free tier

There is no free tier. PlanetScale removed its free Hobby plan in 2024: new Hobby databases could not be created after March 6, 2024, and existing ones had to upgrade by April 8, 2024 or be put to sleep. Every database now needs a paid plan and a valid payment method. The cheapest option is a single-node Postgres database, which starts at $5 per month.

## What happens when you go over

There is no free tier to go past. You pay for each database's cluster size every month, plus extra usage such as storage above the included amount, development branches, extra production branches, user-scheduled backups and egress. Charges go to your card on file. Nothing stops automatically when costs rise.

## Can you set a hard cap?

No. PlanetScale only offers spend alerts. They email organization administrators when monthly spend reaches 75% and 100% of the maximum you enter. The docs do not say that anything stops when you reach it.

## How to set alerts

1. Go to your PlanetScale dashboard and select your organization.
2. Click Settings in the top nav.
3. Click Billing in the side nav.
4. Click the checkbox next to Enable spend alerts.
5. Type in the max budget and click Save. Organization administrators get an email at 75% and 100% of that monthly amount.

## Charges a cap will not stop

- Everything. Spend alerts only send emails.
- Storage on network-attached storage databases grows automatically and is billed above the included amount
- Development branches and extra production branches
- User-scheduled backups
- Egress

## Watch out for

- Old tutorials that say PlanetScale is free are out of date. The free Hobby plan ended in 2024.
- Each extra production branch is billed at the price of its cluster size.
- Postgres development branches are billed while they run. Delete ones you do not need.
- Network-attached storage autoscales, so a growing database raises your bill without warning.
- If you use a coupon, usage beyond the coupon's terms is charged to your card.
- Prepaid cards are not accepted.

## Sources

- [PlanetScale Docs: Billing (Spend management)](https://planetscale.com/docs/billing)
- [PlanetScale Docs: PlanetScale plans](https://planetscale.com/docs/planetscale-plans)
- [PlanetScale Docs: Hobby plan deprecation FAQ](https://planetscale.com/docs/plans/hobby-plan-deprecation-faq)
- [PlanetScale Pricing](https://planetscale.com/pricing)
- [PlanetScale Changelog: Monthly spend alerts](https://planetscale.com/changelog/monthly-spend-alerts)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20PlanetScale) or edit [data/services/planetscale.json](../data/services/planetscale.json). [Back to the full list](../README.md)
