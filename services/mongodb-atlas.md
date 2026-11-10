<!-- Generated from data/services/mongodb-atlas.json by scripts/build.mjs. Edit the JSON, not this file. -->
# MongoDB Atlas

**🔴 No cap.** The Free cluster is free and slows down instead of charging you, but paid clusters have no spending cap, only billing alerts.

[Website](https://www.mongodb.com/atlas) · Category: Database · Last verified: 2026-11-09

## Free tier

Atlas has a Free cluster (formerly called M0) that costs nothing. It has a small storage limit, shared resources, and limits on operations per second and data transfer. You can have one Free cluster per project. Atlas automatically pauses Free clusters after 30 days with no connections.

## What happens when you go over

A Free cluster is not billed for overage. If it goes over its operations-per-second or data-transfer limits, Atlas throttles it (slows it down) instead. It also has a fixed storage limit. Charges start only when you create a paid cluster. Flex clusters are billed by the hour based on usage and are capped at $30 per month each. Dedicated clusters are billed by the hour with no maximum, plus extras such as storage, backup and data transfer.

## Can you set a hard cap?

No account-wide spending cap exists. The official docs offer billing alerts only, and alerts do not stop charges. The one built-in ceiling is on Flex clusters: each Flex cluster is capped at $30 per month, and above its top usage tier Atlas limits throughput instead of charging more. Dedicated clusters have no price ceiling.

## How to set alerts

1. In Atlas, select your organization from the Organizations menu in the navigation bar.
2. In the top-right corner of the Atlas UI, click the Alerts icon.
3. Click Alerts under the Organization header to open the Organization Alerts page.
4. Add an alert with a billing condition, for example when the organization's monthly total goes over an amount you choose, or when the last daily amount billed goes over an amount.
5. For a single project, open the Project Alerts page instead (Alerts icon, then Alerts under the Project header). Project-level billing alerts include a daily amount billed threshold and percentage increases in billing.
6. By default, billing alerts go to Organization Owners and Billing Admins. You can set a Billing Email Address on the Billing Overview page (Edit in the Payment Method card).

## Charges a cap will not stop

- Dedicated clusters (M10 and up), billed hourly while they exist
- Storage, backup and data transfer charges on dedicated clusters
- Other Atlas services such as Data Federation, Charts and App Services

## Watch out for

- Billing alerts only send notifications. Nothing stops automatically.
- When you configure a cluster, the cost shown before you apply does not include data transfer.
- A dedicated cluster keeps charging while it exists, even when nobody uses it. Pause or terminate test clusters you are not using.
- The $30 per month Flex ceiling applies to each Flex cluster. Several Flex clusters cost several times that.
- Atlas charges $1.00 when you first add a card to check it, then refunds it.
- If an invoice is unpaid for over 30 days, Atlas suspends the organization. After 60 days it can terminate backups and deployments.
- M2 and M5 clusters and Serverless instances were retired. As of January 22, 2026, existing ones were migrated to Flex, Free or Dedicated clusters, so old guides about them are out of date.

## Sources

- [MongoDB Atlas Docs: Manage Billing](https://www.mongodb.com/docs/atlas/billing/)
- [MongoDB Atlas Docs: Review Alert Conditions (Billing Alerts)](https://www.mongodb.com/docs/atlas/reference/alert-conditions/)
- [MongoDB Atlas Docs: Atlas Free Cluster Limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/)
- [MongoDB Atlas Docs: Estimate Atlas Flex Cluster Costs and Usage](https://www.mongodb.com/docs/atlas/billing/atlas-flex-costs/)
- [MongoDB Pricing](https://www.mongodb.com/pricing)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20MongoDB%20Atlas) or edit [data/services/mongodb-atlas.json](../data/services/mongodb-atlas.json). [Back to the full list](../README.md)
