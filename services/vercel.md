<!-- Generated from data/services/vercel.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Vercel

**🔵 Hard cap available.** The free Hobby plan stops instead of charging you, and on the paid Pro plan you can turn on Spend Management to pause your sites at a dollar amount you choose.

[Website](https://vercel.com) · Category: Hosting · Last verified: 2026-11-09

## Free tier

The Hobby plan is free and is for personal, non-commercial use only. It includes a monthly amount of bandwidth, function usage, image optimization and other resources. The exact amounts are listed on the Hobby plan page and change from time to time.

## What happens when you go over

On Hobby, you are not billed. Vercel says that in most cases, if you go over a Hobby limit, you have to wait until 30 days have passed before you can use that feature again. On Pro, the plan fee includes a monthly usage credit. After you use the credit, Vercel bills extra usage on demand, with no upper limit unless you set one.

## Can you set a hard cap?

Yes, on Pro (and Enterprise teams on the Flexible Commitment plan). In Spend Management you set an On-Demand Budget. If you turn on Pause Production Deployments, Vercel pauses the production deployment of all projects on the team when spend reaches that amount, and visitors get a 503 DEPLOYMENT_PAUSED error. It is not instant: Vercel checks spend every few minutes, so usage can keep growing for several minutes past your amount. Setting an amount alone does not stop usage. Only the pause action does. Paused projects do not restart on their own. You must resume each one by hand.

## How to set a hard cap

1. You need the Owner or Billing role on the team.
2. From your team's dashboard, open Settings in the sidebar.
3. Select Billing.
4. Under Spend Management, turn the switch on.
5. Set the On-Demand Budget amount in USD.
6. Make sure the Pause Production Deployments switch is Enabled.
7. Confirm by typing the team name and select Continue. Changes save automatically.
8. Set the amount a bit below the most you are willing to pay, because pausing can lag by several minutes.

## How to set alerts

1. Setting an On-Demand Budget turns on web and email alerts at 50%, 75% and 100% of the amount.
2. To change your own alerts: open Settings in the sidebar, select My Notifications, and under Team make sure Spend Management is selected.
3. For a text message at 100%, scroll to SMS on the My Notifications page, turn it on, and verify your phone number.
4. Optional: add a webhook URL in the Spend Management section to get a POST request at each threshold.

## Charges a cap will not stop

- Seats, which are billed per month.
- Marketplace integrations and other separate add-ons.
- AI Gateway API key usage and v0 usage billed to your team. Pausing does not stop these.
- Storage that is kept while paused, such as Deployment Storage, Functions Storage, Vercel Blob storage and Container Registry image storage.
- Usage in the few minutes between crossing your amount and the pause taking effect.

## Watch out for

- The pause only happens if Pause Production Deployments is on. An amount by itself only sends alerts.
- When the pause triggers, it stops production for every project on the team, not just the expensive one.
- Raising the budget does not unpause projects. You have to resume each project yourself.
- The docs say Vercel turns on spend notifications at $200 per billing cycle for new Pro customers by default. They do not clearly say whether the pause is also on for that default, so check the switch yourself.
- Hobby is for non-commercial use only. Commercial projects need Pro.

## It happened to someone

In June 2024, the artist app Cara grew from about 40,000 to 650,000 users in roughly a week. Its backend ran on Vercel Functions, and InfoQ reported a resulting bill of $98,280. Vercel's head of product said the app's mobile client was calling the API deployed on Vercel. ([source](https://www.infoq.com/news/2024/06/vercel-serverless-scale-expenses/))

## Sources

- [Vercel Docs: Spend Management](https://vercel.com/docs/spend-management)
- [Vercel Docs: Hobby Plan](https://vercel.com/docs/plans/hobby)
- [Vercel Docs: Pro Plan](https://vercel.com/docs/plans/pro-plan)
- [Vercel Changelog: Spend Management now pauses production deployments by default](https://vercel.com/changelog/spend-management-now-pauses-production-deployments-by-default)
- [InfoQ: Vercel serverless costs at scale (Cara)](https://www.infoq.com/news/2024/06/vercel-serverless-scale-expenses/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Vercel) or edit [data/services/vercel.json](../data/services/vercel.json). [Back to the full list](../README.md)
