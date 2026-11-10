<!-- Generated from data/services/openai.json by scripts/build.mjs. Edit the JSON, not this file. -->
# OpenAI API

**🔵 Hard cap available.** The OpenAI API runs on prepaid credits, and you can set a monthly spend limit with "Enforce a hard limit" turned on so requests fail once you reach it.

[Website](https://platform.openai.com) · Category: AI · Last verified: 2026-11-09

## Free tier

OpenAI does not clearly promise free API usage. Its rate-limit docs list a "Free" usage tier for users in allowed regions, but they do not say it comes with free credits. In practice, plan to buy prepaid credits before you build. The ChatGPT app and the API are billed separately.

## What happens when you go over

API usage is paid from a prepaid credit balance. You buy credits first (OpenAI's help center lists a $5 minimum). When the balance is used up, requests fail with a credit_balance_exhausted error, unless auto recharge buys more credits for you. OpenAI's help center warns that access may not stop the instant credits run out. Usage processed during that delay can show up as a negative balance, which is taken from your next purchase.

## Can you set a hard cap?

Yes. You can set a monthly spend limit for the whole organization or for one project. It only blocks requests if you turn on "Enforce a hard limit". Then requests over the limit return a 429 error (organization_spend_limit_exceeded or project_spend_limit_exceeded) until the next monthly cycle or until you raise the limit. OpenAI says enforcement is not instantaneous, so recorded spend can go slightly over. A limit without the hard-limit toggle, and spend alerts, only notify you. Separately, prepaid credits with auto recharge turned off also act like a cap, with the small negative-balance delay described above.

## How to set a hard cap

1. Organization-wide: open the Organization limits page (platform.openai.com/settings/organization/limits).
2. Under Spend, select Edit spend limit.
3. Enter the Monthly spend limit.
4. Turn on Enforce a hard limit. Without this toggle, the limit does not stop requests.
5. Select Save.
6. For one project only: go to Project settings, select Limits, then follow the same steps under Spend (Edit spend limit, Monthly spend limit, Enforce a hard limit, Save).
7. Also check auto recharge on your organization's billing settings page. Turn it off if you do not want new credits bought automatically. If you keep it on, set its optional monthly recharge limit.

## How to set alerts

1. OpenAI supports spend alerts that send a notification at a threshold you choose. They do not stop API traffic.
2. Set alerts on the same spend limit settings (Organization limits, or Project settings then Limits). OpenAI recommends thresholds that leave you time to react before a hard limit is reached. The docs do not list click-by-click steps for alerts.

## Charges a cap will not stop

- Usage processed in the short delay after credits run out. It can become a negative balance that is taken from your next purchase.
- Small overage past a hard spend limit, because enforcement is not instantaneous.
- Credits bought by auto recharge. A spend limit blocks requests, but auto recharge is a separate setting that buys credits.

## Watch out for

- Auto recharge is turned on by default during billing setup, according to OpenAI's help center. Turn it off if you want your prepaid balance to be your limit.
- A monthly spend limit only stops requests if Enforce a hard limit is turned on. Otherwise it behaves like an alert.
- The optional monthly recharge limit only limits automatic credit purchases. It is not a cap on usage, and manual purchases do not count toward it.
- An OpenAI support reply on the community forum says that with auto recharge on, expired credits are treated like running out of balance, which can trigger a recharge.
- Purchased credits expire after 1 year and are non-refundable, according to OpenAI's help center.
- OpenAI also sets its own approved monthly usage limit for each organization based on usage tier. That is separate from the spend limit you set.
- A leaked API key can spend your balance and trigger auto recharge. Keep keys on the server, never in front-end code or public repos, and use one project per app so one leak hits one project limit.

## It happened to someone

In October 2026 the AI tool OpenCode said an intruder reached a legacy system where some users had saved their OpenAI, Anthropic and Google API keys. The Hacker News reported that one user said his OpenAI key was used for $281 (and his Anthropic key for $168). These are users' own claims, and OpenCode said the keys "may have been exposed". ([source](https://thehackernews.com/2026/10/opencode-console-breach-may-have.html))

## Sources

- [OpenAI API docs: Spend limits](https://developers.openai.com/api/docs/guides/spend-limits)
- [OpenAI API docs: Rate limits and usage tiers](https://developers.openai.com/api/docs/guides/rate-limits)
- [OpenAI Help Center: Setting up and managing prepaid API billing](https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing)
- [OpenAI Help Center: Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-projects-in-the-api-platform)
- [OpenAI Developer Community: Expired credits and auto-recharge (OpenAI Support reply)](https://community.openai.com/t/expired-credits-and-auto-recharge/1332368/6)
- [The Hacker News: OpenCode Console breach may have exposed OpenAI, Anthropic, and Google API keys](https://thehackernews.com/2026/10/opencode-console-breach-may-have.html)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20OpenAI%20API) or edit [data/services/openai.json](../data/services/openai.json). [Back to the full list](../README.md)
