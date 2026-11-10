<!-- Generated from data/services/mapbox.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Mapbox

**🔴 No cap.** Mapbox has a monthly free tier for each service, but once you add a payment method there is no spending cap, only email alerts.

[Website](https://www.mapbox.com) · Category: Maps · Last verified: 2026-11-09

## Free tier

You can sign up without a credit card and use Mapbox with trial usage limits. If you add a payment method, you get pay-as-you-go access with a monthly free tier for each service (for example a number of free map loads). The free tier resets on the first day of each monthly billing period. Exact amounts differ by service and are listed on Mapbox's pricing page.

## What happens when you go over

Without a payment method, reaching a trial limit (or the end of the trial) gives you a Console alert and an email, and you add a payment method to continue. With a payment method, usage above the free tier is added to your monthly invoice. On automatic payments, your card is charged when the invoice is finalized on the last day of the month. Nothing pauses automatically.

## Can you set a hard cap?

No. Mapbox's docs say plainly that Mapbox does not provide the ability to cap your monthly billing and that accounts do not support a spending cap. Usage notifications never pause your service. The only way to stop charges is to stop the traffic yourself, by deleting or rotating your access tokens, which turns off any maps that use them.

## How to set alerts

1. Log in and open the Usage notifications page in your account settings.
2. Choose a service and set a monthly threshold in that service's usage units.
3. Add more thresholds per service if you want several warnings. Alerts are sent by email only.
4. Mapbox also emails you automatically the first time your account goes past a service's free tier in a billing period.
5. If an alert shows usage you do not expect, delete or rotate the access token to stop the traffic.

## Charges a cap will not stop

- All usage above the free tier once a payment method is on file. Alerts never pause service.
- Usage from apps that still use your trial token after you add a payment method. Mapbox warns that this can generate billable usage.

## Watch out for

- When you add a payment method, Mapbox offers to Rotate token or Keep token. Rotating (recommended by Mapbox) replaces your trial token so old copies stop working.
- Public tokens (pk) sit in your web pages, and anyone can copy them. Add URL restrictions so the token only works from your sites. Mapbox calls this a best-effort protection, not a guarantee.
- Never put a secret token (sk) in front-end code or a public repo. Use it only from a server.
- Deleting a token stops new requests right away, but cached responses can keep working for a while depending on the service.
- Mapbox suggests a workaround instead of a cap: add a fixed amount of prepaid credit and rotate your tokens when spending reaches your target. This still needs you to act; nothing stops on its own.
- Each Mapbox service has its own free tier. Going over on one service is billed even if others are unused.

## Sources

- [Mapbox FAQ: Am I able to set a cap for monthly spending?](https://docs.mapbox.com/accounts/faq/can-i-set-up-a-cap-for-monthly-spending/)
- [Mapbox docs: Invoices and billing](https://docs.mapbox.com/accounts/guides/invoices/)
- [Mapbox docs: Sign up with Mapbox](https://docs.mapbox.com/accounts/guides/signup/)
- [Mapbox docs: Access tokens](https://docs.mapbox.com/accounts/guides/tokens/)
- [Mapbox pricing](https://www.mapbox.com/pricing)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Mapbox) or edit [data/services/mapbox.json](../data/services/mapbox.json). [Back to the full list](../README.md)
