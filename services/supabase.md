<!-- Generated from data/services/supabase.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Supabase

**🔵 Hard cap available.** The Free plan never charges you, and the Pro plan has a Spend Cap that is on by default, but the cap does not cover compute and some add-ons.

[Website](https://supabase.com) · Category: Backend · Last verified: 2026-11-09

## Free tier

The Free plan costs nothing and does not charge for overage. It includes up to 2 active projects with a small database, file storage, egress and monthly active users. The exact limits are listed on the pricing page. Free projects are paused after 1 week of inactivity.

## What happens when you go over

On the Free plan you are not charged. Supabase notifies you when you go over the Free plan quota. You get one grace period. After that, your services can be restricted under the Fair Use Policy, for example by pausing projects, making them read-only, or returning 402 errors to API requests. Restrictions lift when your quota refills at the start of the next billing cycle, or when you upgrade. On the Pro plan with the Spend Cap off, extra usage is billed at the per-unit prices on the pricing page.

## Can you set a hard cap?

Yes, on the Pro plan. The Spend Cap is on by default. When it is on and you go over the quota for a covered item (such as egress, disk size, storage, function invocations, monthly active users or realtime messages), further use of that item is blocked until the next billing cycle and you are not charged for the overage. It is not a dollar budget: you cannot set an amount, and it does not send cost notifications. It does not cover compute or other opt-in add-ons, so those still charge. Organizations billed through AWS Marketplace cannot use the Spend Cap. The Spend Cap is only available on the Pro plan.

## How to set a hard cap

1. When you create a Pro plan organization, leave the Spend Cap turned on.
2. To check or change it later, open your organization's billing page in the Supabase dashboard.
3. Go to the Cost Control section and make sure the Spend Cap is enabled.
4. Remember that each extra project adds its own compute cost, which the Spend Cap does not limit.

## How to set alerts

1. Supabase has no custom budget alerts. The docs say the Spend Cap does not send notifications when certain costs are reached.
2. Watch the organization's usage page in the dashboard.
3. Check the Upcoming Invoice section of the organization's billing page. It shows current spending and an estimate for the billing cycle.
4. Supabase emails you when you exceed your plan's quota.

## Charges a cap will not stop

- Compute for each project (the Pro plan includes compute credits that cover one small project; each extra project adds its own compute cost)
- Branching compute
- Read replica compute
- Custom domain
- Additionally provisioned disk IOPS and disk throughput
- IPv4 address
- Log drain hours and log drain events
- Multi-Factor Authentication Phone
- Point-in-Time Recovery

## Watch out for

- If you turn the Spend Cap off, overage on egress, storage and other usage items is billed with no limit.
- Every new project on a paid organization adds compute cost, billed hourly. Pause or delete projects you are not using. Paused projects are not charged.
- The Spend Cap is not a dollar limit. You cannot say 'stop at $50'.
- With the Spend Cap on, hitting a quota blocks that feature for your users until the next billing cycle. If you keep going over quotas, services can be restricted under the Fair Use Policy.
- On the Free plan you get only one grace period for going over limits. If you go over again later, restrictions can apply right away.
- Organizations billed through AWS Marketplace cannot use the Spend Cap.

## Sources

- [Supabase Docs: Control your costs (Spend Cap)](https://supabase.com/docs/guides/platform/cost-control)
- [Supabase Docs: Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq)
- [Supabase Docs: About billing on Supabase](https://supabase.com/docs/guides/platform/billing-on-supabase)
- [Supabase Pricing](https://supabase.com/pricing)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Supabase) or edit [data/services/supabase.json](../data/services/supabase.json). [Back to the full list](../README.md)
