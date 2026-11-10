<!-- Generated from data/services/twilio.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Twilio

**🔵 Hard cap available.** Twilio takes charges from a prepaid balance and suspends your project when the balance runs out, so with auto-recharge off your balance works as a rough cap.

[Website](https://www.twilio.com) · Category: Messaging · Last verified: 2026-11-09

## Free tier

New users get a free 30-day trial with no credit card needed. Instead of a dollar balance, the trial gives a set of free units for each product (for example some SMS messages and voice minutes). Trials have limits, such as SMS and voice only to your sign-up country. When the trial expires, you can no longer use trial resources. After you upgrade, you get a fresh set of post-upgrade free units, which are used before any charges.

## What happens when you go over

To keep going you upgrade, load a starting balance and add a payment method. Twilio's standard billing is pay-as-you-go: costs are taken from your account balance as you use services, and you top it up by hand or with auto-recharge. If the balance reaches zero or goes negative, the project is suspended and you cannot make calls or send messages until you add funds. Calls already in progress are allowed to finish, which can leave a negative balance.

## Can you set a hard cap?

Mostly yes, if auto-recharge is off. Your balance then limits spending, because Twilio suspends the project at a zero or negative balance. It is not exact: Twilio says it does not often suspend right at zero and instead watches for negative balance and delayed billing, and calls in progress can push the balance below zero. Recurring charges such as phone numbers keep building up while suspended. There is no separate monthly spend limit setting. Usage Triggers and alarms only notify you or call your webhook.

## How to set a hard cap

1. In the Twilio Console, open the Billing Overview page.
2. Find the auto-recharge settings and turn auto-recharge off (or never turn it on). Then your balance is the most Twilio can draw.
3. Add funds by hand, only as much as you are willing to spend.
4. Optional: create a Usage Trigger that calls your own webhook at a cost threshold. Your code can then react, for example by disabling the feature that sends messages. Twilio does not stop usage for you.

## How to set alerts

1. Every Twilio project has a default notification when your balance reaches $5.
2. In the Twilio Console, open Usage Triggers (console.twilio.com/us1/billing/usage/triggers). Set a usage or cost threshold and choose how to be notified (email or webhook).
3. Usage Triggers are checked about once a minute and fire at most once per interval (daily, monthly or yearly).
4. Console Alarms (console.twilio.com/us1/monitor/alarms/create) can also notify you by webhook, email or console notification.
5. To see spend, open Billing & Usage in the Console and select Account usage.

## Charges a cap will not stop

- Recurring charges such as phone number rental. They keep billing while the account is suspended, until you release the numbers.
- Calls already in progress when the balance hits zero. They finish and can make your balance negative.
- Delayed usage that is billed after the fact. Payments on a suspended account go first to this delayed usage and recurring charges.
- Money added by auto-recharge, if you turn it on.

## Watch out for

- Twilio help pages disagree about whether auto-recharge is on by default for upgraded accounts. Check the Billing Overview page yourself after upgrading.
- SMS pumping (toll fraud) is a common cause of surprise bills. Bots enter phone numbers in your sign-up or one-time-code forms to make you send SMS to expensive numbers. Turn on SMS Pumping Protection and limit Geo Permissions to the countries you actually serve.
- Usage Triggers and alarms only notify. They do not suspend your account.
- After you add funds to a suspended project, reactivation can take 5 to 10 minutes.
- A negative balance must be paid before a suspended account is reactivated.
- Keep your Account SID and Auth Token secret. Anyone with them can send messages and make calls on your balance.

## It happened to someone

On May 26-27, 2026, an attacker mass-created free accounts on the monitoring service Healthchecks.io and used its SMS notifications to send about 8,000 texts to random Moroccan numbers. That added about $1,800 to the Twilio bill in roughly 12 hours. The owner found out when Twilio emailed that the account was suspended. After he fixed the hole and turned on SMS pumping protection, Twilio refunded the full amount as credit. ([source](https://blog.healthchecks.io/2026/06/about-the-sms-pumping-attack-on-may-26-27/))

## Sources

- [Twilio docs: Twilio trial account](https://www.twilio.com/docs/usage/trials)
- [Twilio docs: Get started with your Twilio free trial account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account)
- [Twilio docs: Error 10003 (inactive account, balance zero or negative)](https://www.twilio.com/docs/api/errors/10003)
- [Twilio docs: Fraud response guide, Engage](https://www.twilio.com/docs/usage/fraud-response-guide/engage)
- [Twilio docs: REST API UsageTrigger](https://www.twilio.com/docs/usage/api/usage-trigger)
- [Twilio docs: Navigate common workflows in the new Twilio Console](https://www.twilio.com/docs/usage/how-do-i)
- [Twilio Help Center: Understanding how billing works for different Twilio products](https://help.twilio.com/articles/223135487-How-Twilio-billing-works)
- [Twilio Help Center: How to configure and remove auto-recharge triggers](https://help.twilio.com/articles/223135607-How-do-I-set-a-recharge-trigger-)
- [Twilio Help Center: What happens if my Twilio balance reaches zero?](https://help.twilio.com/articles/223183248-What-happens-if-my-Twilio-balance-reaches-zero)
- [Twilio Help Center: Do I still get charged for phone numbers when my account is suspended?](https://support.twilio.com/hc/en-us/articles/223183088-Do-I-still-get-charged-for-phone-numbers-when-my-account-is-suspended)
- [Twilio docs: SMS Pumping Protection for Programmable Messaging](https://www.twilio.com/docs/messaging/features/sms-pumping-protection-programmable-messaging)
- [Twilio blog: Monitor and alert on suspicious activities in your Twilio account](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/monitor-alert-suspicious-activities-twilio-account)
- [Healthchecks.io blog: About the SMS pumping attack on May 26-27](https://blog.healthchecks.io/2026/06/about-the-sms-pumping-attack-on-may-26-27/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Twilio) or edit [data/services/twilio.json](../data/services/twilio.json). [Back to the full list](../README.md)
