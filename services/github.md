<!-- Generated from data/services/github.json by scripts/build.mjs. Edit the JSON, not this file. -->
# GitHub (Actions, Codespaces, Packages, Copilot)

**🔵 Hard cap available.** Without a payment method, GitHub blocks paid usage when your included amount runs out. With a payment method, you can set budgets that hard-stop metered products like Actions, Codespaces, Packages and Copilot AI credits.

[Website](https://github.com) · Category: Developer tools · Last verified: 2026-11-09

## Free tier

Your plan includes a monthly amount of metered usage. For GitHub Actions, it is shown as a dollar amount of compute (GitHub Free includes $12 USD per month) plus artifact storage that is shared with GitHub Packages. Standard GitHub-hosted runners are free in public repositories. Personal accounts also get a monthly Codespaces quota of compute and storage. Organization plans do not include free Codespaces. Copilot plans, including Copilot Free, include a monthly allowance of GitHub AI Credits (1 AI credit = $0.01 USD).

## What happens when you go over

If your account has no valid payment method, usage is blocked once you use up your included amount. If you have a payment method, extra usage is billed to it, and only your budgets can limit it. For Copilot, when your included AI credits run out you can upgrade, wait for the monthly reset, or pay for more usage by setting a budget. Code completions and next edit suggestions stay unlimited on paid Copilot plans and do not use AI credits.

## Can you set a hard cap?

Yes, for metered products. When you create a budget, select Stop usage when budget limit is reached. Usage is then blocked once the budget is used up. Without that option you only get emails and usage keeps going. Copilot user-level budgets always hard-stop. Budgets do not stop license-based products such as Copilot seats, GitHub Team or GitHub Enterprise; for those they only alert.

## How to set a hard cap

1. For a personal account, open https://github.com/settings/billing. For an organization, open the organization's Billing & Licensing page (under Access in the settings sidebar).
2. Click Budgets and alerts.
3. Click New budget.
4. Under Budget Type, select Product-level budget (for example Actions, Codespaces or Packages), SKU-level budget, or Bundled AI credits budget (all AI-credit products, including Copilot).
5. Under Budget scope, choose where the budget applies.
6. Under Budget, enter an amount and select Stop usage when budget limit is reached. If you leave it unselected, usage will not be stopped.
7. Under Alerts, select Receive budget threshold alerts.
8. Click Create budget. Repeat for each product you use. For organization, enterprise and cost center budgets, the stop option is off unless you select it.

## How to set alerts

1. Open https://github.com/settings/billing (or your organization's Billing & Licensing page) and click Budgets and alerts.
2. Click New budget, set the type, scope and amount, and select Receive budget threshold alerts. You get emails and a banner at 75%, 90% and 100% of the budget.
3. Click Create budget.
4. For warnings about your free allowance: on the same page, under Included usage alerts, select Receive alerts when my included usage reaches 90% and 100%.

## Charges a cap will not stop

- License-based products such as Copilot seats, GitHub Team and GitHub Enterprise. Budgets only alert for these.
- Metered usage covered by a budget that does not have Stop usage when budget limit is reached selected.
- Usage in the first billing cycle that happened before you created the budget. GitHub warns you may go over the budget in that first cycle.

## Watch out for

- Adding a payment method removes the automatic block. After that, only budgets with the stop option limit your spending.
- One usage can count toward several budgets. If any of them has the stop option and runs out, usage is blocked, even if other budgets still have room.
- Copilot code review uses GitHub Actions compute as well as AI credits. In private repositories this draws from your Actions allowance and is billed at normal Actions rates after that.
- Codespaces storage is billed for as long as a codespace exists, even when it is not running. Delete codespaces you no longer need.
- Larger runners always need a valid payment method and are billed even in public repositories.
- You cannot change a budget's scope after you create it. Deleting a budget can remove a limit you were relying on.
- Older guides talk about a per-product spending limit setting. Current GitHub docs use budgets on the Budgets and alerts page instead.
- GitHub's docs do not clearly state what budgets a new personal account has by default. Check your Budgets and alerts page before you add a payment method.

## Sources

- [GitHub Docs: Budgets and alerts](https://docs.github.com/en/billing/concepts/budgets-and-alerts)
- [GitHub Docs: Setting up budgets to control spending on metered products](https://docs.github.com/en/billing/how-tos/set-up-budgets)
- [GitHub Docs: GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
- [GitHub Docs: GitHub Codespaces billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces)
- [GitHub Docs: GitHub Packages billing](https://docs.github.com/en/billing/concepts/product-billing/github-packages)
- [GitHub Docs: GitHub Copilot billing](https://docs.github.com/en/billing/concepts/product-billing/github-copilot-billing)
- [GitHub Docs: Usage-based billing for individuals (Copilot)](https://docs.github.com/en/copilot/concepts/billing/usage-based-billing-for-individuals)
- [GitHub Docs: Budgets for usage-based billing (Copilot)](https://docs.github.com/en/copilot/concepts/billing/budgets-for-usage-based-billing)
- [GitHub Changelog: GitHub Copilot is moving to usage-based billing](https://github.blog/changelog/2026/04/27/github-copilot-is-moving-to-usage-based-billing/)

---

Something out of date? [Report a correction](https://github.com/AnshumaanSinghh/billbrake/issues/new?template=correction.yml&title=Correction%3A%20GitHub%20(Actions%2C%20Codespaces%2C%20Packages%2C%20Copilot)) or edit [data/services/github.json](../data/services/github.json). [Back to the full list](../README.md)
