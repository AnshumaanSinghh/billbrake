<!-- Generated from data/services/netlify.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Netlify

**🟢 Stops at the limit.** On Netlify's current credit-based plans, your sites pause when your monthly credits run out, unless you turn on auto recharge yourself.

[Website](https://www.netlify.com) · Category: Hosting · Last verified: 2026-11-09

## Free tier

Since September 4, 2025, new accounts use credit-based plans. The Free plan gives a monthly allowance of credits with a hard limit. Netlify says you will never be charged for the Free plan. Deploys, bandwidth, web requests, compute and AI use all spend credits. Deploy Previews, branch deploys, failed deploys and form submissions do not.

## What happens when you go over

When your credits are used up, all web projects on the team are paused. Visitors see a "Site not available" page, new deploys are blocked, and sites stop taking web requests and form submissions. This is true on Free and also on the paid Personal and Pro plans when auto recharge is off. Projects stay paused until the next billing cycle, unless you upgrade, buy a credit pack (paid plans) or turn on auto recharge.

## Can you set a hard cap?

Yes, by default. Credit-based plans stop instead of billing extra usage. On Free you cannot buy more credits at all. On Personal and Pro, auto recharge is off by default. If you turn it on, Netlify buys more credits in small amounts whenever you run out, and the docs describe no maximum for auto recharge. Accounts created before September 4, 2025 are on Legacy plans, which work differently (see gotchas).

## How to set a hard cap

1. Stay on a credit-based plan. Your monthly credits are the cap.
2. On Personal or Pro, keep auto recharge off. A Team Owner can check it: from your Netlify team dashboard, go to Usage & billing.
3. Under Current services and Credit balance, choose Configure auto recharge.
4. Choose Disabled and confirm the changes.
5. If you use AI features, you can also set an AI Credit Usage Limit for agent runs.

## How to set alerts

1. Netlify sends in-app notifications and emails at 50%, 75%, 90% and 100% of your usage by default.
2. To watch your balance, go to Usage & billing and open Credit balance.
3. On Pro, you can also send notifications to Slack with the Netlify App for Slack.

## Charges a cap will not stop

- Your monthly plan subscription on Personal or Pro.
- Add-ons billed outside your credits, such as extra concurrent builds.
- Domain registrations and renewals.
- Credits bought through auto recharge or credit packs, if you turn these on.

## Watch out for

- If one project uses up the credits, all projects on the team are paused, not just that one.
- Auto recharge has no maximum in the docs. Once it is on, the credits are no longer a cap.
- Legacy Starter and Pro plans (accounts made before September 4, 2025) automatically buy extra usage packages when you pass a limit. Netlify's legacy docs say there is no direct way to set limits on metered usage on those plans.
- On the Legacy Free tier you are not charged, but at 100% of a limit all sites on the account are paused, and you must add a payment method and upgrade to restore them.
- Switching a team from Legacy to credit-based is permanent. You cannot switch back.
- Paid credit-based plans need a valid payment method on file to keep projects active.

## It happened to someone

In February 2024, a developer posted that Netlify had billed them about $104,000 for a simple static site after a huge traffic spike to one file. After the post spread on Hacker News, Netlify's CEO commented that support had told the user they would not be charged. This happened on the older pricing, before the credit-based plans. ([source](https://news.ycombinator.com/item?id=39520776))

## Sources

- [Netlify Docs: How credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/)
- [Netlify Docs: Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/)
- [Netlify Docs: Billing FAQ for Credit-based pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/)
- [Netlify Docs: Configure credit auto recharge](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/configure-auto-recharge/)
- [Netlify Docs: Billing FAQ for Legacy pricing plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/billing-faq-for-legacy-plans/)
- [Hacker News: Netlify just sent me a $104k bill for a simple static site](https://news.ycombinator.com/item?id=39520776)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Netlify) or edit [data/services/netlify.json](../data/services/netlify.json). [Back to the full list](../README.md)
