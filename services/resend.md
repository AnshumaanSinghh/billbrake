<!-- Generated from data/services/resend.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Resend

**🟢 Stops at the limit.** Resend stops sending when you reach your plan's quota, unless a team admin turns on paid overages, and even those have a limit you choose.

[Website](https://resend.com) · Category: Messaging · Last verified: 2026-11-09

## Free tier

The Free plan includes a small monthly email quota with a daily limit of 100 emails per day, plus marketing emails to a limited number of contacts. The Free plan has no overage option.

## What happens when you go over

On the Free plan, sending stops when you reach the daily or monthly quota. The daily quota resets at midnight UTC. Paid transactional plans (Pro, Scale) are a fixed monthly price for a set number of emails, with no daily limit. By default, sending stops at your monthly quota until the next billing cycle. You are only charged for extra emails if a team admin turns on pay-as-you-go overages.

## Can you set a hard cap?

Yes, by default. Overages are off unless a team admin turns them on, so sending simply stops at your quota. If you turn overages on, there is an overage limit set as a percentage of your monthly quota. The default is 400% (up to 5 times your quota in a billing cycle), and an admin can set it from 100% to 1,000% in steps of 100%. When the limit is reached, sending pauses until the next billing cycle.

## How to set a hard cap

1. Do nothing: overages are off by default, so sending stops at your plan's monthly quota.
2. If overages are on and you want to stop them, a team admin can open the Usage page (resend.com/settings/usage) and turn off Transactional pay-as-you-go.
3. If you keep overages on, set the overage limit on the same Usage page to the lowest value you are comfortable with (100% is the lowest).

## How to set alerts

1. Resend says it sends alerts as you approach your quota (for example at 80% and 100%).
2. Track usage and billing history on the Usage page (resend.com/settings/usage).

## Charges a cap will not stop

- Overage emails up to your overage limit, if a team admin has turned overages on. They are charged automatically to your default card in buckets of 1,000 emails.
- Add-ons you choose, such as extra domains, extra inboxes or a dedicated IP, which are billed monthly.

## Watch out for

- Resend's docs name the overage setting in two ways: Transactional pay-as-you-go on the Usage page (in the quotas doc), and Transactional Overages under Settings (in the changelog and pricing page). Look for either name.
- If you turn overages on, the default limit lets you send up to 5 times your monthly quota. Lower it if that is more than you want to pay for.
- Overages are billed in full buckets of 1,000 emails. Sending just 3 extra emails is billed as a full bucket.
- Resend notes that overage emails can cost more per email than upgrading to a bigger plan.
- Marketing plans are priced by the number of contacts, not emails sent. The docs we checked do not clearly say what happens when you go over your contact limit.
- A leaked Resend API key lets someone send email from your domain and use up your quota. Keep keys on the server and out of front-end code.

## Sources

- [Resend docs: What are Resend account quotas and limits?](https://resend.com/docs/knowledge-base/account-quotas-and-limits)
- [Resend pricing](https://resend.com/pricing)
- [Resend changelog: Pay-as-you-go Pricing](https://resend.com/changelog/pay-as-you-go-pricing)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Resend) or edit [data/services/resend.json](../data/services/resend.json). [Back to the full list](../README.md)
