<!-- Generated from data/services/replicate.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Replicate

**🟢 Stops at the limit.** New Replicate accounts pay with prepaid credit, so new work stops when the credit runs out unless you turn on auto reload.

[Website](https://replicate.com) · Category: AI · Last verified: 2026-11-09

## Free tier

Some selected models can be tried for free, but after a short while Replicate asks you to set up billing. Some features also need billing set up. There is no fixed free monthly allowance listed on the pricing page.

## What happens when you go over

Since July 16, 2025, all new accounts are billed through prepaid credit. You buy credit first, and usage is taken from that balance. When the balance hits zero, Replicate blocks new work from starting and shuts down infrastructure it runs for you. In rare cases a prediction can run over your balance. Replicate then charges your default payment method for the overage at the start of the next month. Accounts created before July 16, 2025 can still be on monthly billing, where usage is charged after the fact with no balance limit.

## Can you set a hard cap?

Yes for prepaid accounts: with auto reload turned off, your credit balance is the limit, apart from rare small overages that are billed the next month. There is no separate spend limit setting. Replicate deprecated its monthly spend limit feature in 2025 and says to contact support if you need it. Older accounts still on monthly invoicing have no documented self-serve cap. Replicate says they can choose to switch to prepaid credit.

## How to set a hard cap

1. Go to your billing settings on Replicate and add a payment method.
2. Click Add credit and buy only the amount you are willing to spend.
3. Leave auto reload turned off. If it is on, disable it in billing settings. Your balance is then your limit.
4. If your account is older and still billed monthly, check your billing settings. Replicate says existing accounts can choose to switch to prepaid credit; ask support if you are unsure which billing type you are on.
5. For deployments, set a maximum number of instances to limit how much hardware can run at once.

## Charges a cap will not stop

- Rare predictions that run past your credit balance. The overage is charged to your payment method at the start of the next month.
- Credit added by auto reload, if you turn it on.
- Usage on older accounts that are still billed monthly in arrears.

## Watch out for

- Auto reload is optional. When on, it tops your balance back up every time it drops below your threshold (minimum threshold $5, minimum reload balance $15). If your balance is already at or below the threshold when you save the setting, it reloads right away.
- Public models only bill while they process your request. Private models and deployments bill for setup, idle and active time, because they run on dedicated hardware.
- For private models and deployments, failed or canceled runs are still billed for the active instance time.
- Keeping minimum instances warm on a deployment avoids cold starts but means hardware is online and billing even with no traffic.
- Purchased credit is valid for 1 year and is non-refundable.
- Replicate does not document spend alerts. Check your usage on the account billing page.

## Sources

- [Replicate docs: Prepaid credit](https://replicate.com/docs/topics/billing/prepaid-credit)
- [Replicate docs: Billing](https://replicate.com/docs/topics/billing)
- [Replicate changelog: All accounts can now purchase prepaid credit](https://replicate.com/changelog/2025-07-29-prepaid-credit)
- [Replicate blog: Purchase prepaid credit](https://replicate.com/blog/prepaid-credit)
- [Replicate changelog: Set a monthly spend limit (deprecated)](https://replicate.com/changelog/2025-07-01-set-a-monthly-spend-limit)
- [Replicate pricing](https://replicate.com/pricing)
- [Replicate docs: Deployments](https://replicate.com/docs/topics/deployments)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Replicate) or edit [data/services/replicate.json](../data/services/replicate.json). [Back to the full list](../README.md)
