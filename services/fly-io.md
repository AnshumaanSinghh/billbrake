<!-- Generated from data/services/fly-io.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Fly.io

**🔴 No cap.** Fly.io has no spending cap and, by its own docs, no billing alerts yet, so once a card is on file you pay for whatever you run.

[Website](https://fly.io) · Category: Hosting · Last verified: 2026-11-09

## Free tier

New organizations do not get a free tier or a monthly free allowance. New accounts get a small one-time trial credit that lasts 7 days or until it is used up, and no credit card is needed to start. A few things are always free, such as inbound data transfer, shared IPv4, IPv6, some SSL certificates and a small amount of volume snapshot storage. Organizations on plans that were discontinued in October 2024 keep the free allowances from those plans.

## What happens when you go over

On the trial, when the credit runs out your Machines stay stopped and you cannot start them or create new resources until you add a credit card. Once a card is added, all usage is billed monthly. Fly.io's docs say: "there's no soft ceiling. If you go over, we'll bill you."

## Can you set a hard cap?

No. Fly.io has no spending cap. Prepaid credits do not work as a cap either: a Fly.io staff member wrote in June 2026 that "Credits are not a way to control spend." Credits are used first, and any unpaid balance is charged to the payment method on file.

## Charges a cap will not stop

- Everything. There is no cap.
- Stopped Machines still cost money for their root file system.
- Volumes are billed whether attached, detached, or attached to a stopped Machine.
- Dedicated IPv4 addresses and static egress IPs, if you add them.

## Watch out for

- Fly.io's cost management page says: "We don't support billing alerts (yet), so budget accordingly." Check the "current month to date bill" in your dashboard yourself.
- Buying prepaid credits does not stop charges. When credits run out, the rest is charged to your card.
- Stopping a Machine does not make it free. Delete Machines and volumes you no longer need.
- Fly.io's own advice is that auto-stop savings are not guaranteed, so budget for the cost of keeping your Machines always on.
- Fly.io says it is willing to discuss refunds if resources were created by mistake or an attack caused an unexpectedly large bill. Email billing@fly.io. This is not guaranteed.

## Sources

- [Fly.io Docs: Cost Management](https://docs.fly.io/about/cost-management)
- [Fly.io Docs: Pricing](https://docs.fly.io/about/pricing)
- [Fly.io Docs: Billing](https://docs.fly.io/about/billing)
- [Fly.io Docs: Free Trial](https://docs.fly.io/about/free-trial)
- [Fly.io Community: Prepaid budget used up, rolled directly into billing (staff reply)](https://community.fly.io/t/prepaid-budget-used-up-rolled-directly-into-billing/28103)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Fly.io) or edit [data/services/fly-io.json](../data/services/fly-io.json). [Back to the full list](../README.md)
