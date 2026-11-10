<!-- Generated from data/services/google-cloud.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Google Cloud

**🟠 Partial cap.** Google Cloud now has real spend caps, but only for four services (Gemini API, Vertex AI, Cloud Run and Cloud Run functions). Everything else only gets alerts.

[Website](https://cloud.google.com) · Category: Cloud · Last verified: 2026-11-09

## Free tier

New users get a Free Trial with $300 in credit that is valid for 90 days. There is also a Free Tier: some products are free up to monthly usage limits, with no end date. Free Tier limits are per billing account and do not roll over. Google can change the Free Tier with 30 days' notice.

## What happens when you go over

During the Free Trial you are not charged automatically. If you do not upgrade, the trial billing account closes when the credit runs out or the 90 days end, and its projects and resources are stopped. After a 30-day grace period, trial resources are deleted for good. Once you upgrade to a Paid billing account (by clicking Activate), your payment method is charged for any usage beyond your remaining credit and the Free Tier limits.

## Can you set a hard cap?

Partly. Spend cap budgets became generally available on October 13, 2026, after a preview in July 2026. They only work for four services: Gemini API, Gemini Enterprise Agent Platform (formerly Vertex AI), Cloud Run and Cloud Run functions. Each cap covers one project and one service, and runs monthly. When estimated spend passes the cap, new requests to that service in that project are paused until the next month or until you lift the cap. Enforcement is not instant. Google says you pay for any overage caused by reporting delays. Normal budgets (Alerts only) never cap spending.

## How to set a hard cap

1. In the Google Cloud console, open the Navigation menu and select Billing. In the Cost management section, select Budgets & alerts.
2. Click Create new budget. (You cannot turn an existing Alerts only budget into a spend cap. Delete it and make a new one.)
3. In the Define section, select Spend cap enforcement (instead of Alerts only). Enter a Name and click Next.
4. In the Scope section, the Time range is set to Monthly. Select one Project and one eligible Service. Click Next.
5. In the Amount section, enter the Target amount. Set it a little below your real limit, because enforcement is not instant. Click Next.
6. In the Actions section, notifications are set for you (50%, 80% and 100%). Click Finish.
7. Repeat for each project and each eligible service you want to cap.

## How to set alerts

1. In the Google Cloud console, open the Navigation menu and select Billing. In the Cost management section, select Budgets & alerts.
2. Click Create budget.
3. In the Define section, select Alerts only. Enter a Name and click Next.
4. In the Scope section, choose the time range, projects and services. Click Next.
5. In the Amount section, set the budget amount. Click Next.
6. In the Actions section, set the alert thresholds and who gets emails. Click Finish.
7. Optional, advanced: connect a Pub/Sub topic to the budget and use code to disable billing on a project when the budget is reached. Google warns this shuts down all resources in the project and some may be deleted for good.

## Charges a cap will not stop

- Every service that is not Gemini API, Gemini Enterprise Agent Platform (Vertex AI), Cloud Run or Cloud Run functions.
- Ongoing fixed costs of persistent resources, such as compute and storage, even when a spend cap is enforced.
- Requests already running when the cap triggers. They finish and are billed.
- Overage caused by delays in usage and cost reporting.
- Subscription-based costs, such as Gemini Enterprise subscriptions.

## Watch out for

- A normal budget does not cap anything. Google's docs say an Alerts only budget does not automatically cap usage or spending.
- Spend caps mostly use gross, estimated list-price costs and leave out savings and credits, so a cap can trigger before your net bill reaches the amount. The setup steps say some services use actual costs instead, so the docs are not fully consistent on this point.
- Actual costs can take more than 24 hours to show in reports.
- If you move a project to another billing account, its spend caps on the old account are deleted. You must create them again.
- Leaving the Free Trial by upgrading means you can be charged. The trial itself never charges you.
- Disabling billing with Pub/Sub automation stops every resource in the project, not just the expensive one.

## It happened to someone

In 2020 the startup Milkie Way ran an overnight test on Cloud Run with a Firebase database. A bug caused endless recursion, and the bill reached almost $72,000. The founder had set a $7 budget, but budgets do not cap spending, and billing data took about a day to update. Google waived the bill as a one-time gesture. ([source](https://www.theregister.com/2020/12/10/google_cloud_over_run/))

## Sources

- [Google Cloud: Manage spend cap budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps)
- [Google Cloud: Cloud Billing release notes](https://docs.cloud.google.com/billing/docs/release-notes)
- [Google Cloud: Create, edit, or delete budgets and budget alerts](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [Google Cloud: Disable billing usage with notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- [Google Cloud: Free Trial and Free Tier](https://docs.cloud.google.com/free/docs/free-cloud-features)
- [Google Cloud blog: New early anomalies and spend caps on Google Cloud budgets](https://cloud.google.com/blog/topics/cost-management/new-early-anomalies-and-spend-caps-on-google-cloud-budgets)
- [The Register: Startup hit with $72,000 Google Cloud bill](https://www.theregister.com/2020/12/10/google_cloud_over_run/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Google%20Cloud) or edit [data/services/google-cloud.json](../data/services/google-cloud.json). [Back to the full list](../README.md)
