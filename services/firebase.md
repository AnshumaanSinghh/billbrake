<!-- Generated from data/services/firebase.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Firebase

**🟠 Partial cap.** The free Spark plan just stops when you hit a limit, but on the pay-as-you-go Blaze plan you can only cap a few services, and the cap is in Preview.

[Website](https://firebase.google.com) · Category: Backend · Last verified: 2026-11-09

## Free tier

The Spark plan needs no payment method. It includes no-cost usage quotas for Firebase products, applied per project. Some products and paid Google Cloud features are not available on Spark. The Blaze plan includes the same no-cost usage, and eligible users may get free Google Cloud credit when they upgrade.

## What happens when you go over

On Spark, when a project goes over a product's quota, that product is shut off for the rest of the month. On Blaze, you pay for usage above the no-cost quotas, billed to your Cloud Billing account. There is no overall limit.

## Can you set a hard cap?

Only for some services. Spend cap budgets, in Preview, pause one service for the rest of the month when it reaches 100% of its budget. They are only available for Firebase AI Logic, Firebase App Hosting, Cloud Functions for Firebase and Firebase Extensions. Firebase says they are not hard caps: enforcement can lag by several minutes, and spend in that time is billed. Other products, such as Cloud Firestore, Realtime Database, Cloud Storage and Hosting, have no cap. Normal budgets only send emails. The only other way to stop everything is to write code that disables billing on the project when a budget alert fires.

## How to set a hard cap

1. You need the Billing Account Administrator role, the Project Owner role, or both Billing Account Costs Manager and Project Editor.
2. In the Firebase console, open your project and go to Settings > Usage and billing > Details & settings.
3. Find the Service-level spend caps card.
4. Find the service, enter a monthly budget amount, and click Configure.
5. Repeat for each eligible service you use. Each cap covers one service in one project.
6. Set each amount slightly below your real limit, because enforcement can lag.
7. For services without spend caps, Firebase suggests using budget notifications to disable Cloud Billing on the project with your own code. See the Google Cloud guide linked in sources.

## How to set alerts

1. You need the Billing Account Administrator role on the linked Cloud Billing account.
2. In the Firebase console, go to Settings > Usage and billing > Details & settings.
3. In the Budgets alerts section, click Create first budget. This opens the Budgets & alerts page in the Google Cloud console.
4. Name the budget and set the scope (for example, All services).
5. Under Amount, choose a Budget type, such as a set amount of money.
6. Under Percent of budget, add alert thresholds, for example 50% and 100% of Actual.
7. Save. Alerts go to billing account admins and users by default. They do not pause anything.

## Charges a cap will not stop

- Cloud Firestore, Realtime Database, Cloud Storage, Firebase Hosting and any other product not on the spend cap list.
- Spend during the delay before a spend cap is enforced.
- Anything else in the same Google Cloud project, such as other Google Cloud services.

## Watch out for

- Budget alerts do not cap your usage or charges. They only send emails.
- Alert emails can be slow. Firebase says a 1% alert email may take a couple of hours or a couple of days.
- Linking a billing account, including one with Google Cloud trial credits, automatically moves the project to Blaze.
- Spend caps are in Preview and may change.
- If you lift a spend cap and change nothing else, there is no limit for the rest of that month.
- Unbounded queries and Cloud Functions that trigger themselves in a loop are a common cause of runaway bills. Test with the Firebase Local Emulator Suite first.
- Disabling billing with code shuts down all resources in the project, including free-tier services. Google warns that resources might be irretrievably deleted, recovery is not guaranteed, and because notifications are delayed it does not guarantee you stay under budget.

## It happened to someone

In December 2020, the startup Milkie Way reported a Google Cloud bill of just under $72,000 after a test. A scraper on Cloud Run looped on itself and made about 116 billion Firestore reads, and the charges kept climbing for about two hours. Their Firebase project had been upgraded to a paid plan because of activity in Google Cloud. Google waived the bill as a one-time gesture. ([source](https://www.theregister.com/2020/12/10/google_cloud_over_run/))

## Sources

- [Firebase Docs: Avoid surprise bills](https://firebase.google.com/docs/projects/billing/avoid-surprise-bills)
- [Firebase Docs: Spend caps](https://firebase.google.com/docs/projects/billing/spend-caps)
- [Firebase Docs: Set up budget alerts](https://firebase.google.com/docs/projects/billing/budget-alerts)
- [Firebase Docs: Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Google Cloud Docs: Disable billing usage with notifications](https://docs.cloud.google.com/billing/docs/how-to/disable-billing-with-notifications)
- [The Register: How a free trial experiment ended with a $72,000 bill overnight](https://www.theregister.com/2020/12/10/google_cloud_over_run/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Firebase) or edit [data/services/firebase.json](../data/services/firebase.json). [Back to the full list](../README.md)
