<!-- Generated from data/services/neon.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Neon

**🟠 Partial cap.** The Free plan never charges you, but on paid plans the dashboard spending setting only sends emails; the only real stop is per-project limits that you set through the API.

[Website](https://neon.com) · Category: Database · Last verified: 2026-11-09

## Free tier

The Free plan is permanent, not a trial, and does not need a credit card. Each project gets a monthly amount of compute time and network transfer, plus a small storage limit. The exact numbers are on the pricing page. Idle computes scale to zero after 5 minutes.

## What happens when you go over

On the Free plan you are not charged. If a project uses up its monthly compute hours or network transfer, its compute is suspended until the next billing period or until you upgrade. If you hit the storage limit, writes that grow storage fail. Neon says none of these limits delete your data. The paid Launch and Scale plans are pay-as-you-go: usage is metered hourly and billed at the end of the month, with no monthly minimum and no price ceiling by default.

## Can you set a hard cap?

Only partly. The organization-level spending setting in the Neon Console (called Spending Notifications in the docs) only sends emails at 80% and 100% of the amount you set. Projects keep running and charges keep adding up. The docs say automatic project suspension is 'coming soon', but as of this check it is not available. The real stop is per-project consumption limits (quotas), which you can only set with the Neon API, not in the Console. When a project reaches a quota, its computes are suspended until the next billing period or until you change the quota. Storage that already exists is still billed.

## How to set a hard cap

1. Use the Neon API to set a quota object on each project when you create or update it. Available quotas include active time, compute time, data written, data transfer, and logical size per branch.
2. When a project reaches a quota, Neon automatically suspends all its active computes. Unlike scale to zero, the next connection does not wake them. They stay suspended until the next billing period or until you change the quota.
3. Also cap autoscaling for each compute. Neon's pricing page says this puts a ceiling on compute size, and so on compute spend.
4. Keep scale to zero turned on so idle computes do not use compute hours.

## How to set alerts

1. Go to the Neon Console at console.neon.tech.
2. Select your organization from the profile menu in the top-right of the console.
3. Select Billing from the menu.
4. On the Spending Notifications card, select Enable.
5. In the Enable Spending Notifications dialog, enter a whole-dollar amount, then select Enable.
6. Neon checks spending every 15 minutes and emails organization admins at 80% and 100%. Only organization admins can change this setting. It is available on the Launch and Scale plans only.

## Charges a cap will not stop

- Storage you already hold keeps being billed, even when computes are suspended
- Everything, if you only use Spending Notifications: they alert but do not stop usage
- Extra branches, snapshots, instant restore history, Object Storage and Functions, unless a project quota happens to stop the related activity

## Watch out for

- Spending Notifications are emails only. They do not stop anything yet.
- Neon's own blog post about the launch calls it a 'spending limit', but the docs now call it Spending Notifications and say it only alerts.
- Project quotas are set through the API only. The guide for them is written for platforms that embed Neon, but the quota fields are part of the normal project API.
- Storage on paid plans has no hard size limit and grows with your data.
- If you turn off scale to zero, a compute runs and bills all the time.
- Each organization needs its own spending threshold.

## Sources

- [Neon Docs: Spending notifications](https://neon.com/docs/introduction/spending-notifications)
- [Neon Docs: Neon plans](https://neon.com/docs/introduction/plans)
- [Neon Docs: Configure consumption limits](https://neon.com/docs/guides/consumption-limits)
- [Neon Pricing](https://neon.com/pricing)
- [Neon Blog: Introducing Organization Spending Limits (April 24, 2026)](https://neon.com/blog/introducing-organization-spending-limits)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Neon) or edit [data/services/neon.json](../data/services/neon.json). [Back to the full list](../README.md)
