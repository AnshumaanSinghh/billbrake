<!-- Generated from data/services/sentry.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Sentry

**🟢 Stops at the limit.** Sentry drops extra data instead of billing you, and on paid plans you only pay for overage up to a pay-as-you-go budget that you choose.

[Website](https://sentry.io) · Category: Developer tools · Last verified: 2026-11-09

## Free tier

Sentry has a free Developer plan with a monthly amount of errors and other event data. The exact amounts are on the pricing page. New accounts start with a 14-day free trial of the Business plan. If you do not upgrade, you move to the Developer plan when the trial ends.

## What happens when you go over

When you go over your quota, Sentry stops accepting the extra data. The server answers with an HTTP 429 status code and the data is dropped, so you lose monitoring until the quota resets. You are not charged for it. On the Developer plan you cannot buy more volume; you must upgrade to Team or Business. On paid plans, usage above your reserved volume is paid from your pay-as-you-go (PAYG) budget. Sentry's docs say users are not charged beyond their base plan unless they set a PAYG budget. Data sent after the reserved volume and PAYG budget run out is dropped and not charged.

## Can you set a hard cap?

Yes. The PAYG budget is a monthly maximum. It is shared across all data types, first come, first served, and you only pay for what you use up to the budget. When it runs out, new data is dropped and you are not charged. If you lower the budget below what you already used this cycle, new data is rejected. Some charges are separate from the PAYG budget, such as the Seer add-on.

## How to set a hard cap

1. You need Billing or Owner permissions in your Sentry organization.
2. Go to Settings > Subscription.
3. Click Manage Subscription to open your subscription options, and set a monthly maximum shared pay-as-you-go budget. This is the most you will pay for overage each month.
4. New budgets usually take effect within minutes, and at most within 24 hours.
5. Also go to Settings > Spike Protection and turn it on for your projects (or click Enable All). It drops events during sudden spikes so one spike does not use up your quota.

## How to set alerts

1. Sentry emails members with the Owner permission when usage is getting close to, or has gone over, the quota. This happens automatically.
2. To get Spike Protection notifications, go to Settings > Spike Protection, expand a project, click Add Action, and choose Sentry Notification, Slack, PagerDuty or Opsgenie.
3. If you chose Sentry Notification, also turn it on under User Settings > Notifications > Spike Protection.
4. Use the Stats page (Usage tab) to see which projects use your quota.

## Charges a cap will not stop

- Your base plan price and any reserved volume you prepay
- Seer, the AI add-on, which is billed as its own monthly charge per active contributor and does not count against the PAYG budget
- Sales tax or VAT, which is not included in the prices shown

## Watch out for

- When your quota or budget runs out, Sentry drops your data. You may miss errors for the rest of the billing cycle.
- If you upgrade from Team to Business in the middle of a cycle, your PAYG budget is recalculated at Business prices and can run out faster.
- Lowering the PAYG budget only fully takes effect on your next billing date.
- Plan downgrades and reductions in reserved volume happen at the end of the billing period and are not refunded.
- Spike Protection does not work during trials, because quotas are unlimited during a trial.
- After a product trial ends, continued use of that product is billed from reserved volume or your PAYG budget.

## Sources

- [Sentry Docs: Pricing & Billing](https://docs.sentry.io/pricing/)
- [Sentry Docs: Billing Quota Management](https://docs.sentry.io/pricing/quotas/)
- [Sentry Docs: Manage Your Error Quota](https://docs.sentry.io/pricing/quotas/manage-event-stream-guide/)
- [Sentry Docs: Manage Your Logs Quota](https://docs.sentry.io/pricing/quotas/manage-logs-quota/)
- [Sentry Docs: Spike Protection](https://docs.sentry.io/pricing/quotas/spike-protection/)
- [Sentry Docs: llms.txt (pricing note on PAYG budget)](https://docs.sentry.io/llms.txt)
- [Sentry Pricing](https://sentry.io/pricing/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Sentry) or edit [data/services/sentry.json](../data/services/sentry.json). [Back to the full list](../README.md)
