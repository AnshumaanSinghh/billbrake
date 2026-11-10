<!-- Generated from data/services/digitalocean.json by scripts/build.mjs. Edit the JSON, not this file. -->
# DigitalOcean

**🟠 Partial cap.** DigitalOcean has no spending cap for Droplets and most products. The only hard stop is a preview feature that can pause Serverless Inference model access keys.

[Website](https://www.digitalocean.com) · Category: Cloud · Last verified: 2026-11-09

## Free tier

The Droplet pricing page lists no free Droplet plan. Billing starts when you create a Droplet. When you create your first team, DigitalOcean adds a $5 signup credit that expires 90 days after signup. You must add a valid payment method before you can create Droplets or other resources. Each Droplet plan includes some free outbound data transfer, pooled across the team.

## What happens when you go over

Droplets are billed from the moment you create them until you destroy them. When your credit is used up, charges go to your payment method. Outbound data transfer beyond your pooled allowance is billed at $0.01 per GiB. DigitalOcean also tries to charge your payment method when your usage reaches your account tier's auto-charge amount. If that charge fails, you cannot create new resources until the payment is resolved.

## Can you set a hard cap?

Mostly no. DigitalOcean's docs say a spend alert budget is not a spending cap and does not limit how much you can use. The one exception is Serverless Inference: a spend alert on model access keys can pause those keys at 100% of their monthly budget. This feature is in public preview.

## How to set a hard cap

1. This only works for Serverless Inference model access keys (public preview). It does not cap Droplets or other products.
2. Go to the Billing page and open the Spend alerts tab (for organizations: profile icon > View Organizations > select your organization > Billing tab > Spend alerts).
3. Click Create alert.
4. Enter an Alert name and a Monthly budget amount.
5. Under What do you want to track?, choose Managed Access Keys (Serverless Inference) and select up to 10 model access keys.
6. Turn on Pause Serverless Inference at threshold, then select the checkbox to confirm.
7. Click Create alert. Each selected key pauses on its own when its spend reaches the budget.

## How to set alerts

1. Go to the Billing page and open the Spend alerts tab (for organizations: profile icon > View Organizations > select your organization > Billing tab > Spend alerts).
2. Click Create alert.
3. Enter an Alert name and a Monthly budget amount.
4. Choose one or more Alert thresholds (percentages of the budget). Click Add custom threshold for other percentages.
5. Under What do you want to track?, choose whether to track all usage in the alert's scope or only Specific products, such as Droplets or Kubernetes.
6. Click Create alert. Team owners and billers get the emails.

## Charges a cap will not stop

- Droplets, including Droplets that are powered off. They are billed until you destroy them.
- Outbound data transfer beyond your pooled allowance.
- Every product other than Serverless Inference model access keys. Spend alerts on them only send emails.

## Watch out for

- Powering off a Droplet does not stop billing. You must destroy it.
- Spend alerts are based on actual usage and are sent within an hour of crossing a threshold, so some spending always happens before you hear about it.
- Projected Droplet transfer overage does not trigger an alert until it is applied to the invoice.
- The signup credit expires after 90 days even if you have not used it.
- If you had an old billing alert, it was moved to Spend alerts as Account Spend Alert with one threshold at 100%. Add lower thresholds to get earlier warnings.

## Sources

- [DigitalOcean Docs: Spend Alerts](https://docs.digitalocean.com/platform/billing/spend-alerts/)
- [DigitalOcean Docs: Signup Credit](https://docs.digitalocean.com/platform/billing/signup-credit/)
- [DigitalOcean Docs: Droplet Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
- [DigitalOcean Docs: Billing](https://docs.digitalocean.com/platform/billing/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20DigitalOcean) or edit [data/services/digitalocean.json](../data/services/digitalocean.json). [Back to the full list](../README.md)
