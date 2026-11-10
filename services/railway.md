<!-- Generated from data/services/railway.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Railway

**🔵 Hard cap available.** Railway bills paid plans for usage above the included amount, but you can set a hard limit that takes your services offline when it is reached.

[Website](https://railway.com) · Category: Hosting · Last verified: 2026-11-09

## Free tier

New users get a one-time trial credit that lasts up to 30 days. After the trial, the account moves to the Free plan, which adds a small amount of free credit each month. Unused credit does not roll over. The Free plan has low per-service resource limits.

## What happens when you go over

The official docs do not clearly say what happens on the Free plan when the monthly credit is used up. Railway's Terms of Service say that once all usage credits are used up, you must upgrade to a paid plan to keep using the service. So expect your services to stop, not to be billed. On the paid Hobby and Pro plans, the plan fee includes some usage. If usage goes over that, you are charged the difference, with no limit unless you set one.

## Can you set a hard cap?

Yes, on all subscription plans. Under Usage Limits you can set a Hard limit for Compute Usage. When usage reaches it, Railway takes all your workloads offline to stop further usage. The minimum hard limit is $10. Railway calls this a possibly destructive action. Services come back when you raise or remove the limit, and Railway tries to restart them at the next billing cycle. There is no compute hard limit by default; you must set it. Agent Usage (Railway's AI agent) has its own hard limit, on by default.

## How to set a hard cap

1. Open the Workspace Usage page. For a personal account this is railway.com/workspace/usage. For a team workspace, use the account switcher in the top-left corner (you must be a workspace admin).
2. Click the Set Usage Limits button.
3. Under Compute Usage, enter a Hard limit in dollars (at least $10).
4. Optionally set a Custom email alert at a lower amount.
5. Save. From the CLI you can also run: railway usage limit set --target workspace --soft 75 --hard 125

## How to set alerts

1. Open the Workspace Usage page and click Set Usage Limits.
2. Enter a Custom email alert amount. You get an email when usage reaches it, and your services keep running.
3. You can leave the Hard limit blank if you only want the alert.
4. If you set a Hard limit, Railway also emails you at 75%, 90% and 100% of it.

## Charges a cap will not stop

- Your monthly Hobby or Pro plan fee.
- The docs do not say whether volume storage keeps billing after workloads are taken offline. Assume stored data may still cost money.

## Watch out for

- Hitting the hard limit takes every workload in the workspace offline, including databases.
- Volumes created by trial accounts are deleted 30 days after the trial credits expire. Upgrade before then if you want to keep the data.
- The Usage page shows both "Current Usage" (raw usage this cycle) and "Estimated Bill" (after your plan's included usage). In one forum case, Railway staff explained that services were paused because Compute usage crossed the hard limit. Check your hard limit against usage, not only against the Estimated Bill.
- You cannot set a hard limit lower than what you have already used this cycle.
- The Railway agent can run automatically, for example after a failed build, and its usage is billed separately from compute.

## Sources

- [Railway Docs: Cost Control (Usage Limits)](https://docs.railway.com/pricing/cost-control)
- [Railway Docs: Pricing Plans](https://docs.railway.com/pricing/plans)
- [Railway Docs: Free Trial](https://docs.railway.com/pricing/free-trial)
- [Railway Terms of Service](https://railway.com/legal/terms)
- [Railway Blog: Bring Back the Free Plan](https://blog.railway.com/p/free-plan)
- [Railway Central Station: Usage going past limits (staff answer)](https://station.railway.com/questions/usage-going-past-limits-ef502543)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Railway) or edit [data/services/railway.json](../data/services/railway.json). [Back to the full list](../README.md)
