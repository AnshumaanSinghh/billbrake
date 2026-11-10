<!-- Generated from data/services/algolia.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Algolia

**🔴 No cap.** The free plan is blocked or suspended when you reach its limits, but the pay-as-you-go Grow plans have no spending cap, only a budget notification.

[Website](https://www.algolia.com) · Category: Developer tools · Last verified: 2026-11-09

## Free tier

Algolia has a free plan (called Build in its terms, and Free on the pricing page). It needs no credit card and includes a monthly number of search requests and a number of records. The numbers differ between sources: the pricing page lists 50K records, while the Build plan terms (updated September 23, 2024) say up to one million records. Check the pricing page for the current limits.

## What happens when you go over

On the free plan, the Build plan terms say Algolia may suspend the service or add an Algolia attribution to your search results until you choose a plan that fits your usage. Algolia's support articles say a free app is blocked until the next billing cycle when it has no linked billing details. On the Grow and Grow Plus plans, you pay monthly for usage above each product's included amount, with no ceiling. For records over the included amount, you are charged based on the maximum number of records you reached.

## Can you set a hard cap?

No. On paid pay-as-you-go plans there is no setting that stops charges. Algolia's support article describes a Cost Management feature where you set a budget and are notified if your invoice goes over it. It only notifies you.

## How to set alerts

1. In the Algolia dashboard, go to Billing > Cost Management.
2. Set a budget. Algolia notifies you if your invoice exceeds it.
3. Check your usage under API Monitoring > Usage in the dashboard. It shows records and search and indexing operations for the current billing cycle.
4. Note: the alerts under Settings > Infrastructure > Alerts are for server status and capacity on dedicated-server plans, not for spending.

## Charges a cap will not stop

- Everything on the Grow and Grow Plus plans: search requests, records, recommendations and crawls above the included amounts

## Watch out for

- With search-as-you-type, every keystroke counts as one search request. By default there is one request for each keystroke and each index. Algolia suggests debouncing searches to send fewer requests.
- Records are billed on the maximum number you reached during the period, not the number you have at the end.
- The free plan limits differ between the pricing page and the Build plan terms. Do not rely on an old number.
- Cost Management only notifies you. It does not stop search or indexing.
- Several of Algolia's support pages block automated access, so double-check these steps in your dashboard.

## Sources

- [Algolia: Build Plan Specific Terms](https://www.algolia.com/policies/build-plan-specific-terms)
- [Algolia Pricing](https://www.algolia.com/pricing)
- [Algolia Docs: Track usage](https://www.algolia.com/doc/guides/going-to-production/track-usage)
- [Algolia Docs: Optimize search request usage (JavaScript)](https://www.algolia.com/doc/guides/building-search-ui/going-further/optimize-search-request-usage/js)
- [Algolia Support: How can I monitor my application's monthly costs?](https://support.algolia.com/hc/en-us/articles/11892882592529-How-can-I-monitor-my-application-s-monthly-costs)
- [Algolia Support: How does Algolia count search requests, operations and records?](https://support.algolia.com/hc/en-us/articles/17245378392977-How-does-Algolia-count-search-requests-operations-and-records)
- [Algolia Support: Why is my app blocked?](https://support.algolia.com/hc/en-us/articles/4406981959441-Why-is-my-app-blocked)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Algolia) or edit [data/services/algolia.json](../data/services/algolia.json). [Back to the full list](../README.md)
