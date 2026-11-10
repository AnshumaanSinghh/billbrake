<!-- Generated from data/services/aws.json by scripts/build.mjs. Edit the JSON, not this file. -->
# Amazon Web Services (AWS)

**🔴 No cap.** On a normal Paid plan AWS has no spending cap, so you can be charged without limit. Only the time-limited Free plan guarantees you pay nothing.

[Website](https://aws.amazon.com) · Category: Cloud · Last verified: 2026-11-09

## Free tier

When you sign up, you choose the Free plan or the Paid plan. New customers get USD $100 in credits on either plan and can earn up to $100 more by completing activities. More than 30 services also have monthly free usage limits. The Free plan lasts six months or until your credits run out, whichever comes first. The Free plan only gives access to some services.

## What happens when you go over

On the Free plan you are not charged. When the six months end or your credits run out, AWS closes the account automatically and you lose access to your resources and data. AWS keeps your content for 90 days. You can upgrade to the Paid plan during that time to keep the account. On the Paid plan, AWS charges normal pay-as-you-go prices for any usage beyond your credits, and for services that credits do not cover. Nothing stops automatically.

## Can you set a hard cap?

No, not on the Paid plan. AWS Budgets only send alerts unless you add budget actions. A budget action can apply an IAM policy (for example, one that blocks launching new EC2 instances), apply a service control policy (management accounts only), or stop specific EC2 or RDS instances. None of these stop all charges. Budgets use billing data that is updated at least once per day, so alerts and actions can come late. The only setup where you cannot be charged is the Free plan, and it lasts six months at most.

## How to set a hard cap

1. When you create a new AWS account, choose the Free plan, not the Paid plan. On the Free plan you are not charged.
2. Check your remaining credits and plan end date on the AWS Billing and Cost Management console home page.
3. Do not join AWS Organizations, set up an AWS Control Tower landing zone, or take the other actions AWS lists, unless you want to leave the Free plan. They upgrade the account to the Paid plan automatically.
4. There is no way to set a spending cap after you move to the Paid plan. Use budgets and budget actions as a safety net only.

## How to set alerts

1. Open the Billing and Cost Management console at https://console.aws.amazon.com/cost-management/.
2. In the navigation pane, choose Budgets.
3. Choose Create budget.
4. Under Budget setup, choose Use a template (simplified).
5. Under Templates, choose Zero spend budget (alerts you when spending goes past the AWS Free Tier limits) or Monthly cost budget (alerts you when you go over, or are forecast to go over, an amount you set).
6. Fill in the email recipients and choose Create budget.
7. Optional: to add a budget action, edit the budget. At the Configure alerts step, under Attach actions - Optional, choose Add Action. Pick an IAM role, then choose the action type: apply an IAM policy, attach a service control policy, or target specific EC2 or RDS instances.
8. For Free Tier usage emails: open the Billing console, under Preferences choose Billing preferences, choose Edit next to Alert preferences, select Receive AWS Free Tier alerts, then choose Update.

## Charges a cap will not stop

- Storage for Amazon EBS volumes still costs money when an EC2 instance is stopped.
- Elastic IP addresses linked to a stopped instance are still charged.
- Any resource that a budget action does not target keeps running and keeps charging.
- Usage that happens before billing data updates (at least once per day) is charged even if a budget action fires later.

## Watch out for

- Budgets do not stop spending on their own. They only email you unless you set up budget actions.
- If a budget action stops an EC2 instance that is in an Auto Scaling group, Auto Scaling restarts it or launches a new one. AWS says shutdown actions do not work for those instances.
- Stopping an EC2 instance does not stop storage charges. To stop all charges, delete the resources you no longer need.
- Free plan accounts close automatically at the end. AWS deletes the account and its data 90 days after closing unless you upgrade.
- On the Paid plan, credits do not apply to every service. Usage of services that credits do not cover is billed right away.
- Some actions, like joining AWS Organizations, move a Free plan account to the Paid plan automatically.

## It happened to someone

In 2024 a developer created one private, empty S3 bucket for a test. An open-source tool used the same bucket name by default and sent almost 100 million write requests to it. All were rejected, but AWS charged for them, and he got a bill of over $1,300 in one day. After the story spread, AWS said it would stop charging for unauthorized requests that customers did not start. ([source](https://www.theregister.com/2024/05/01/aws_s3_bucket_abuse/))

## Sources

- [AWS Billing: Choosing an AWS Free Tier plan](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-plans.html)
- [AWS Billing: Tracking your AWS Free Tier usage](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html)
- [AWS Cost Management: Using a budget template (simplified)](https://docs.aws.amazon.com/cost-management/latest/userguide/budget-templates.html)
- [AWS Cost Management: Configuring budget actions](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html)
- [AWS Cost Management: Configuring a budget action](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-action-configure.html)
- [AWS Cost Management: Best practices for AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-best-practices.html)
- [Amazon EC2: How instance stop and start works](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-ec2-instance-stop-start-works.html)
- [The Register: AWS customer faces staggering charges over S3 bucket misfire](https://www.theregister.com/2024/05/01/aws_s3_bucket_abuse/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20Amazon%20Web%20Services%20(AWS)) or edit [data/services/aws.json](../data/services/aws.json). [Back to the full list](../README.md)
