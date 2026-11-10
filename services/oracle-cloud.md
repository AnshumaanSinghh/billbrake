<!-- Generated from data/services/oracle-cloud.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Oracle Cloud Infrastructure (OCI)

**🔴 No cap.** A Free Tier Oracle Cloud account is not charged unless you choose to upgrade it. After you upgrade to a paid account, there is no spending cap, only budget alerts.

[Website](https://www.oracle.com/cloud/) · Category: Cloud · Last verified: 2026-11-09

## Free tier

The Free Tier has two parts. The Free Trial gives $300 of cloud credits valid for up to 30 days. Always Free resources, such as small compute instances, Autonomous AI Databases and block storage, never expire. Always Free compute instances and Autonomous AI Databases must be created in your home region. Most people need a phone number and a credit card to sign up.

## What happens when you go over

Oracle says your credit card will not be charged unless you upgrade your account. When the trial ends, the account stays active and your Always Free resources keep working. Paid resources you created with trial credits are reclaimed by Oracle unless you upgrade. If you upgrade to Pay As You Go, Always Free resources stay free, and you pay for usage above the Always Free limits.

## Can you set a hard cap?

Yes, while you stay on the Free Tier: you are not charged and paid resources stop when the trial ends. No, after you upgrade: OCI budgets are soft limits that only send email alerts. Compartment quotas can limit how many resources can be created, but they are not a spending cap.

## How to set a hard cap

1. Do not upgrade your account. On the Free Tier your credit card is not charged.
2. Use only Always Free resources once the 30-day trial ends. Other resources made with trial credits are reclaimed by Oracle.
3. If you do upgrade, there is no spending cap. You can use compartment quotas to limit resource use, and budgets for alerts.

## How to set alerts

1. Open the navigation menu and select Billing & Cost Management.
2. Under Cost Management, select Budgets.
3. Select Create Budget.
4. Choose the Budget Scope (a compartment or a tag), enter a name, the budget amount and whether it is Monthly or a one-time budget.
5. In Budget Alert Rule (optional), choose a Threshold Metric (Actual Spend or Forecast Spend) and a Threshold Type (Percentage of Budget or Absolute Amount), then enter the value and the email recipients.
6. Select Create.

## Charges a cap will not stop

- After upgrading to a paid account, every charge above the Always Free limits. Budgets only send alerts.

## Watch out for

- Upgrading to Pay As You Go removes the protection. From then on you can be charged and nothing stops automatically.
- Budget alerts are checked only every 24 hours, so overspending can go unnoticed for up to a day.
- Idle Always Free compute instances may be reclaimed by Oracle. Oracle counts an instance as idle if, over 7 days, CPU, network (and memory for A1 shapes) usage stay under 20%.
- If you have more Ampere A1 compute than the Always Free limit when your trial ends, all your A1 instances are disabled and then deleted after 30 days unless you upgrade.
- Free Tier and Always Free resources are not available in US Government Cloud regions.

## Sources

- [Oracle Cloud Infrastructure: Oracle Cloud Free Tier](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier.htm)
- [Oracle Cloud Infrastructure: Always Free Resources](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
- [Oracle Cloud Infrastructure: Budgets overview](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/budgetsoverview.htm)
- [Oracle Cloud Infrastructure: Listing Budgets](https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/list-budget.htm)
- [Oracle Cloud Infrastructure: Creating a Budget](https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/create-budget.htm)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Oracle%20Cloud%20Infrastructure%20(OCI)) or edit [data/services/oracle-cloud.json](../data/services/oracle-cloud.json). [Back to the full list](../README.md)
