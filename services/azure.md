<!-- Generated from data/services/azure.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Microsoft Azure

**🟠 Partial cap.** Azure free accounts and some credit-based subscriptions have a spending limit that turns services off when the credit is used up. Normal pay-as-you-go subscriptions cannot have one and only get alerts.

[Website](https://azure.microsoft.com) · Category: Cloud · Last verified: 2026-11-09

## Free tier

Eligible new users of the Azure free account get $200 of Azure credit for the first 30 days and a limited amount of free services for 12 months. Free service amounts reset each month and unused amounts do not roll over.

## What happens when you go over

On a free account, your subscription and services are disabled when the credit runs out or the 30 days end. You are not charged unless you upgrade. After you upgrade to pay-as-you-go, you are charged for usage beyond the free amounts, for services that are not free, and for everything once the 12 months of free services end.

## Can you set a hard cap?

Only on some subscription types. The Azure spending limit is on by default for the Azure free account and for subscriptions that include credit over several months (for example Visual Studio subscriptions). The limit always equals your credit amount. You cannot pick your own amount. When you hit it, deployed services are disabled for the rest of the billing period and virtual machines are stopped and deallocated. The spending limit is not available on pay-as-you-go or commitment subscriptions. On those, budgets only send alerts.

## How to set a hard cap

1. Use a subscription type that has the spending limit, such as the Azure free account or a credit-based subscription like Visual Studio Enterprise or Visual Studio Professional.
2. Leave the spending limit on. Upgrading an Azure free account to pay-as-you-go removes the spending limit.
3. On a credit-based subscription, if you must remove the limit, choose Remove spending limit for the current billing period. It then turns back on at the start of the next billing period.
4. To turn the limit back on after removing it indefinitely: sign in to the Azure portal as the Account Administrator, search for Cost Management + Billing, select your subscription in the My subscriptions list, then select the banner at the top of the Subscription overview. When asked Are you sure you want to turn the spending limit on, select Yes.

## How to set alerts

1. In the Azure portal, go to Subscriptions and select your subscription.
2. Select Budgets in the menu.
3. Select Add.
4. In the Create budget window, check that the scope is correct and add any filters.
5. Enter a budget name, choose a monthly, quarterly or annual reset period, and enter the budget amount. Select Next.
6. Set alert conditions: choose Actual or Forecasted, enter a percentage threshold, and add email addresses. You can add up to five thresholds and five email addresses.
7. Optional: select Manage action group to run automation (such as an Azure Function or webhook) when a threshold is met.
8. Save the budget. Add azure-noreply@microsoft.com to your approved senders so alerts do not go to junk mail.

## Charges a cap will not stop

- All charges on pay-as-you-go and commitment subscriptions, which cannot have a spending limit.
- Some Azure Marketplace services that cannot use subscription credit, such as Visual Studio licenses, Microsoft Entra ID P1 or P2, support plans and most third-party branded services. These are billed separately even with the spending limit on.

## Watch out for

- Budgets do not stop anything. Microsoft's docs say resources are not affected and consumption is not stopped when a budget threshold is passed.
- Cost data usually appears within 8 to 24 hours, and budgets are checked every 24 hours, so alerts can arrive a day late.
- A new subscription can take up to 48 hours before you can create budgets.
- When the spending limit is hit, virtual machines are stopped and deallocated. Settings like virtual IP addresses can be lost.
- Deploying third-party images (Microsoft gives Oracle as an example) can use up the spending limit almost at once and disable the subscription.
- Your free services end after 12 months. After that, upgraded accounts pay pay-as-you-go prices for anything still running.

## Sources

- [Microsoft Learn: Azure spending limit](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit)
- [Microsoft Learn: Avoid charges with your Azure free account](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/avoid-charges-free-account)
- [Microsoft Learn: Tutorial: Create and manage budgets](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Microsoft%20Azure) or edit [data/services/azure.json](../data/services/azure.json). [Back to the full list](../README.md)
