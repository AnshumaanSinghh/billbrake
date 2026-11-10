<!-- Generated from data/services/render.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Render

**🟠 Partial cap.** Render has a spend limit only for build minutes; once you add a payment method, extra bandwidth is billed with no cap.

[Website](https://render.com) · Category: Hosting · Last verified: 2026-11-09

## Free tier

You can run web services, Postgres databases, Key Value instances and static sites on Free instances. Each workspace gets a monthly pool of free instance hours, plus some included outbound bandwidth and build pipeline minutes. The Hobby workspace plan has no monthly fee. Free web services spin down after 15 minutes without traffic. Free Postgres databases expire 30 days after creation.

## What happens when you go over

If you use all free instance hours, Render suspends your Free web services until the next month. If you use all included bandwidth, Render bills you for the extra, or suspends your services for the rest of the month if you have no payment method. If you use all build minutes, Render buys more for you until you hit your spend limit; with no payment method or at the limit, new builds stop for the rest of the month. Paid instances are billed per second at a fixed rate per instance.

## Can you set a hard cap?

Only for build pipeline minutes. You can set a monthly spend limit, and when you reach it Render stops running builds until the next billing period. Running services keep serving. The docs describe no spend limit for bandwidth or instances. The only way to make sure nothing is billed is to not add a payment method, which also means you can only use free resources.

## How to set a hard cap

1. In the Render Dashboard, go to your Workspace Settings page.
2. In the Build Pipeline section, click Set spend limit (or Edit if a limit already exists).
3. Enter your limit in the dialog.
4. Note: this caps build minutes only. Bandwidth and instances are not covered.

## How to set alerts

1. Render emails you when you are approaching a usage limit, and again if you go over it. There is nothing to set up.
2. To check usage, open your workspace in the Render Dashboard and click Billing in the left pane. It shows accrued charges and usage against free instance hours, outbound bandwidth and build pipeline minutes.

## Charges a cap will not stop

- Outbound bandwidth beyond the included amount, once a payment method is on file.
- Paid instances, billed for as long as they run.
- Extra instances added by autoscaling (Pro workspaces and higher), each billed at the full instance rate up to the maximum you set.
- Workspace plan fees, if you are on a paid workspace plan, and extra custom domains beyond those included.

## Watch out for

- Free services can still lead to a bandwidth bill if your workspace has a payment method on file.
- Free Postgres databases expire after 30 days. After a 14-day grace period, Render deletes the database and its data unless you upgrade.
- Files written to a Free web service's local disk are lost when it spins down.
- When you set an autoscaling range, the maximum instance count is effectively your compute ceiling. Set it carefully.
- Render's FAQ says it does not bill for bandwidth usage caused by a DDoS attack. Other bandwidth beyond the included amount, including a normal traffic spike, is billed.

## Sources

- [Render Docs: Deploy for Free](https://render.com/docs/free)
- [Render Docs: FAQ](https://render.com/docs/faq)
- [Render Docs: Build Pipeline](https://render.com/docs/build-pipeline)
- [Render Docs: Outbound Bandwidth](https://render.com/docs/outbound-bandwidth)
- [Render Docs: The Render Dashboard](https://render.com/docs/render-dashboard)
- [Render Docs: Scaling](https://render.com/docs/scaling)
- [Render Docs: Platform Features by Plan](https://render.com/docs/new-workspace-plans)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Render) or edit [data/services/render.json](../data/services/render.json). [Back to the full list](../README.md)
