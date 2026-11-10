<!-- Generated from data/services/sendgrid.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Twilio SendGrid

**🔴 No cap.** SendGrid's free trial cannot go over its limits, but paid plans charge overage for every extra email and there is no setting you can use to turn that off.

[Website](https://sendgrid.com) · Category: Messaging · Last verified: 2026-11-09

## Free tier

There is no permanent free plan any more. Twilio retired SendGrid's free plans in 2025. New accounts get a 60-day free trial with no credit card needed. During the trial you can send up to 100 emails per day (and store 100 marketing contacts).

## What happens when you go over

The trial cannot exceed its limits. Sending is blocked instead of billed. When the 60-day trial ends without a paid plan, API and SMTP sending stops and the Marketing section is locked. On paid plans (Essentials, Pro and higher), you pay a monthly price for a set number of emails. If you send more, Twilio charges a small amount for each extra email. Overage charges show up on the next month's invoice.

## Can you set a hard cap?

Not one you can set yourself. The free trial is capped. On Email API Essentials and Pro plans, SendGrid applied a sending limit in 2026 of 10 times the plan's monthly allotment. When you hit it, sending fails with a "Maximum credits exceeded" error. That stops runaway sending, but you can still be billed overage for up to 9 times your plan's volume first. SendGrid's overage article says accounts created through Heroku or Google Cloud do not allow overages, and Azure Marketplace accounts have their own limit. SendGrid's docs do not describe a switch to turn off overages on a normal paid plan.

## Charges a cap will not stop

- Overage on Essentials and Pro plans, up to the 10x sending limit.
- Charges for marketing contacts over your plan's contact limit. Contacts must be deleted before midnight UTC at the end of the month to avoid next month's charge.
- Overage already incurred. Upgrading your plan does not cancel it.

## Watch out for

- Overage is billed after the fact, on the invoice for the following month, so you may not notice it right away.
- SendGrid suggests moving to a bigger plan if you often go over, because that is usually cheaper than paying overage.
- SendGrid's docs do not list built-in spend or budget alerts. Watch your sending numbers in the dashboard yourself.
- A leaked SendGrid API key lets someone else send email on your account and use up your allotment. Keep keys on the server and give each key only the permissions it needs.
- The free trial can only be used once. Upgrading ends the trial right away.
- Sources disagree on the exact 2026 date the 10x sending limit started, so treat the date as uncertain.

## Sources

- [SendGrid Support: Twilio SendGrid Overage Rates](https://support.sendgrid.com/hc/en-us/articles/40779261694875-Twilio-SendGrid-Overage-Rates)
- [SendGrid Support: Understanding the "Maximum Credits Exceeded" error](https://support.sendgrid.com/hc/en-us/articles/35466138799899-Understanding-the-Maximum-Credits-Exceeded-error)
- [SendGrid Support: Overview of 60-Day Free Trial Plans for New SendGrid Accounts](https://support.sendgrid.com/hc/en-us/articles/35270136965403-Overview-of-60-Day-Free-Trial-Plans-for-New-SendGrid-Accounts)
- [Twilio SendGrid Email API pricing](https://www.twilio.com/en-us/products/email-api/pricing)
- [Twilio changelog: Changes coming to SendGrid's Free Plans](https://www.twilio.com/en-us/changelog/changes-coming-to-sendgrid-s-free-plans)
- [SendGrid Support: Manage Azure Marketplace SendGrid Overages and Limits](https://support.sendgrid.com/hc/en-us/articles/49807234526235-Manage-Azure-Marketplace-SendGrid-Overages-and-Limits)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Twilio%20SendGrid) or edit [data/services/sendgrid.json](../data/services/sendgrid.json). [Back to the full list](../README.md)
