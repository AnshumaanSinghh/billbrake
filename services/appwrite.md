<!-- Generated from data/services/appwrite.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Appwrite

**🔵 Hard cap available.** Appwrite Cloud's Free plan freezes your project at its limits, and on Pro you can set a budget cap that stops extra usage charges.

[Website](https://appwrite.io) · Category: Backend · Last verified: 2026-11-09

## Free tier

Appwrite Cloud has a Free plan with fixed resource limits that are shared across your projects. You can have one organization and 2 projects on the Free plan, and you cannot buy extra resources. The exact limits are on the pricing page.

## What happens when you go over

On the Free plan, your project freezes when it hits a limit and the Appwrite Console goes read-only. For example, API access is blocked when bandwidth runs out, function executions are turned off, and new user sign-ups are disabled. Service comes back if you upgrade, remove resources over the limit, or wait for the next billing cycle. On Pro, your project keeps running past the plan's limits, Appwrite buys extra resources automatically, and you pay for them.

## Can you set a hard cap?

Yes, on Pro. You can set a budget cap on your organization. Appwrite says budget caps limit the amount of automatic scaling and prevent unexpected bills. Appwrite stops buying extra resources when the cap is reached. For bandwidth, the docs say API access is then denied until you upgrade your plan or raise the cap. Other limits, once reached, turn off things like function executions, new user sign-ups, realtime subscriptions and file uploads until the billing period ends. The cap covers add-ons (the extra resources) only, not the plan's recurring fee. The docs do not say whether a budget cap is on by default.

## How to set a hard cap

1. Open your organization's overview through the profile menu at the top right of the Appwrite Console.
2. Open the Billing tab.
3. Under Budget cap, turn the toggle on.
4. Set your budget cap amount in USD.

## How to set alerts

1. Appwrite emails you when you reach 75% and 100% of your resource limits.
2. After you enable a budget cap, an email alert is sent at 75% of the cap by default.
3. To add more, go to the Billing tab and use Budget alerts. You can add up to three checkpoints.

## Charges a cap will not stop

- The recurring fee of your paid plan.
- The docs do not say whether fixed-price items, such as dedicated database compute tiers, count toward the budget cap.

## Watch out for

- Free plan projects with no development activity for 7 days in a row are paused automatically. Appwrite only says Console development activity keeps a project active. It does not say your app's own traffic counts, so do not rely on it.
- Since June 29, 2026, Free projects that stay paused for 90 days are deleted with all their resources. Appwrite emails you first. Open the project in the Console to resume it.
- Pro and Enterprise projects are not paused or deleted for inactivity.
- When you hit a storage limit, uploads stay disabled across billing periods until your usage drops below the limit.
- Without a budget cap, a Pro project keeps buying extra resources as long as usage grows.

## Sources

- [Appwrite Docs: Manage billing](https://appwrite.io/docs/advanced/platform/billing)
- [Appwrite Docs: Pro plan](https://appwrite.io/docs/advanced/platform/pro)
- [Appwrite Docs: Free plan](https://appwrite.io/docs/advanced/platform/free)
- [Appwrite Pricing](https://appwrite.io/pricing)
- [Appwrite Changelog: Automatic pausing of inactive projects (February 20, 2026)](https://appwrite.io/changelog/entry/2026-02-20-1)
- [Appwrite Changelog: Paused free projects are deleted after 90 days (June 29, 2026)](https://appwrite.io/changelog/entry/2026-06-29)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Appwrite) or edit [data/services/appwrite.json](../data/services/appwrite.json). [Back to the full list](../README.md)
