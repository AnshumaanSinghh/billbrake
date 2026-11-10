<!-- Generated from data/services/cloudinary.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Cloudinary

**🟢 Stops at the limit.** On the Free plan and the fixed paid plans, going over your credits leads to warnings and then a disabled account, not an extra bill; only the Pro PAYG plan charges for overage.

[Website](https://cloudinary.com) · Category: Media · Last verified: 2026-11-09

## Free tier

The Free plan costs nothing and needs no credit card. It gives you a monthly number of credits. One credit covers a set amount of transformations, storage or bandwidth, and you can mix them. The exact numbers are on the pricing page.

## What happens when you go over

The docs describe three steps when you go over your plan's credits: you get warning emails as you get close, then repeated emails asking you to upgrade, and if you do nothing, your account is eventually disabled automatically. The docs do not describe automatic overage charges for the Free, Plus, Advanced or Advanced Extra plans. The Pro PAYG plan is different: it has a fixed monthly price with an included credit quota, and usage above that quota is charged on top.

## Can you set a hard cap?

There is no spending cap setting, but on the Free plan and the fixed paid plans you are not billed for overage. Instead, your account is disabled if you stay over your limits. Add-ons with a usage quota hit a hard limit and stop until they renew. On Pro PAYG, overage is charged and the docs do not describe a cap.

## How to set a hard cap

1. Stay on the Free plan or a fixed paid plan (Plus, Advanced or Advanced Extra) if you want no overage charges.
2. Avoid Pro PAYG unless you accept that usage above its included quota is billed.
3. If your account is disabled for going over, go to Console Settings > Billing > Plans Details and pick a plan that fits your usage. The account is re-enabled once you switch.

## How to set alerts

1. Cloudinary sends warning emails automatically as you approach your plan limits. The docs do not describe a custom budget alert.
2. Check Usage Reports from Console Home to see if transformations, bandwidth or storage are trending toward your limits.
3. On Pro PAYG, use the Quota Usage pages in Console Settings > Billing to see how much of your included quota you have used this cycle.

## Charges a cap will not stop

- Usage above the included quota on the Pro PAYG plan
- Add-on subscriptions, additional user subscriptions and additional product environment subscriptions, which are billed on top of your plan

## Watch out for

- If your account stays disabled for more than 30 days, your product environments and their assets may be permanently removed. Download anything important.
- A disabled account can stop uploading and delivering your images and videos, so your site may show broken media.
- A bug that creates many slightly different transformation URLs can use up transformation credits fast. Each new derived version counts.
- On the Free plan and the fixed paid plans, transformations and bandwidth are counted over a rolling 30-day window, so a spike counts against you for up to 30 days.
- Storage counts your current total. Deleting unused assets lowers it right away.
- Unpaid invoices also lead to a disabled account.

## Sources

- [Cloudinary Docs: Billing and plans](https://cloudinary.com/documentation/billing_and_plans)
- [Cloudinary Docs: Why is my account disabled and how can I recover my disabled account?](https://cloudinary.com/documentation/ts_why_is_my_account_disabled_and_how_can_i_recover_my_disabled_account)
- [Cloudinary Docs: Why did my usage spike?](https://cloudinary.com/documentation/ts_usage_spike)
- [Cloudinary Pricing](https://cloudinary.com/pricing)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Cloudinary) or edit [data/services/cloudinary.json](../data/services/cloudinary.json). [Back to the full list](../README.md)
