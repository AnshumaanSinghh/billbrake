<!-- Generated from data/services/google-gemini-api.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Google Gemini API

**🔵 Hard cap available.** The Gemini API is free until you link a billing account; after that you can limit spending with prepaid credits, a project spend cap in AI Studio, or a Google Cloud spend cap budget.

[Website](https://aistudio.google.com) · Category: AI · Last verified: 2026-11-09

## Free tier

New accounts start on the Free Tier. You can use the API with lower, free-tier rate limits and without linking a billing account. Google says AI Studio usage stays free unless you link a paid API key. Higher rate limits and some advanced models need a linked billing account.

## What happens when you go over

On the Free Tier, requests over the limits are refused, not billed. Once you link a billing account, you pay for usage. New users default to the Prepay plan: you buy credits first, and when the balance reaches $0, every API key in every project on that billing account stops working (HTTP 402 Payment Required). Some accounts are on Postpay instead, either existing accounts or accounts placed there for a transition period. On Postpay, costs build up on your Cloud Billing account and you are charged at the end of the month, or earlier if you reach a spend cap.

## Can you set a hard cap?

Yes, in several layers. (1) Prepay credits with auto-reload off stop usage at $0, but Google says you can go over during about 10 minutes of billing delay. (2) A per-project Monthly spend cap in AI Studio. Google marks this feature Experimental and says data can be delayed about 10 minutes, so you may be billed for overage. Batch jobs and agent sessions can also go past the cap. (3) Every usage tier has a monthly cap on the whole billing account (Google lists Tier 1 at $250 and Tier 2 at $2,000). When it is reached, service pauses for all linked projects until the 1st of the next month. (4) Google Cloud spend cap budgets support the Gemini API. When enforced, new usage of the service in that project is paused until you lift the cap or the month ends. Enforcement is not instant and overage is billed as normal.

## How to set a hard cap

1. Simplest: stay on Prepay and do not set up auto-reload. Your credit balance is then your limit.
2. AI Studio project cap: open the Spend page in Google AI Studio (aistudio.google.com/spend). You need the project editor, owner or admin role.
3. Under Monthly spend cap, select Edit spend cap and enter your monthly amount. Set it a little below your real limit because of the roughly 10 minute delay.
4. Google Cloud spend cap (optional extra layer): in the Google Cloud console, open Billing, then Budgets & alerts, and click Create new budget.
5. In the Define section, choose Spend cap enforcement (not Alerts only), enter a name and click Next.
6. In the Scope section (time range is Monthly), select one Project and the Gemini API service. Click Next.
7. In the Amount section, enter the Target amount. Click Next, then Finish.

## How to set alerts

1. Check the cost dashboard and usage dashboard in Google AI Studio to watch daily spend per project.
2. For email alerts: in the Google Cloud console, open Billing, then Budgets & alerts, and click Create budget.
3. In the Define section, select Alerts only. Set the scope (projects and services), the amount, and the threshold rules, then click Finish. Alerts only budgets do not stop spending.

## Charges a cap will not stop

- Usage during the billing delay (about 10 minutes) before a prepaid balance or project cap is enforced.
- Batch jobs and agent sessions that run past the AI Studio project cap.
- Other Google Cloud services on the same billing account. A Gemini cap does not limit them.
- Credits bought by auto-reload, up to the monthly auto-charge limit you set.

## Watch out for

- Google API keys from the same project are shared. Researchers found that when the Gemini API is enabled in a project, older keys in that project (for example Maps or Firebase keys that were placed in public web pages) could be used to call Gemini and bill you.
- Auto-reload on Prepay buys more credit automatically when your balance is low. It is optional. If you use it, set the monthly auto-charge limit.
- A Prepay balance of $0 stops every API key in every project on that billing account at the same time, not just one app.
- The tier cap is a shared ceiling for the whole billing account. Reaching it pauses all linked projects, including your production app, until the 1st of the next month.
- Prepaid credits expire after 12 months, according to Google's billing page.
- Budget alerts alone never stop charges.
- Restricting an API key to certain websites or apps helps security but does not cap spending.

## It happened to someone

In February 2026 a three-person startup in Mexico said a stolen Google Cloud API key ran up $82,314.44 in Gemini charges in about 48 hours. The company normally spent about $180 a month. The Register reported that Google support pointed to its shared responsibility model, and Google did not say whether it would waive the charges. This happened before the March 2026 spend caps launched. ([source](https://www.theregister.com/2026/03/03/gemini_api_key_82314_dollar_charge/))

## Sources

- [Google AI Studio docs: Billing](https://aistudio.google.com/docs/billing)
- [Google Cloud: Manage spend cap budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)
- [Google Cloud: Create, edit, or delete budgets and budget alerts](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [Google blog: Giving you more transparency and control over your Gemini API costs](https://blog.google/innovation-and-ai/technology/developers-tools/more-control-over-gemini-api-costs/)
- [Google AI Developers Forum: How do I restrict the Gemini API to prevent extra spending](https://discuss.ai.google.dev/t/how-do-i-restrict-the-gemini-api-to-prevent-extra-spending/191970)
- [The Register: Dev stunned by $82K Gemini bill after unknown API key thief goes to town](https://www.theregister.com/2026/03/03/gemini_api_key_82314_dollar_charge/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Google%20Gemini%20API) or edit [data/services/google-gemini-api.json](../data/services/google-gemini-api.json). [Back to the full list](../README.md)
