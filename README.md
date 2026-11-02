# Self-Service Reseller Portal — Interactive Demo

> **Public demonstration with fictional specifications, prices and product names.** Not the proprietary partner site from a previous employer.

A static web app for helping channel partners find product information, build quotations and export example data without waiting for sales to answer routine questions.

## Features
- Searchable synthetic product catalogue and specifications
- Quantity-based quotation builder
- 10% demonstration bulk discount for quantities of 10+
- Draft CSV export
- Pricing rules separated into `pricing.js` for unit testing
- Four Node.js tests, automatically checked by GitHub Actions

## Try it
Open `index.html` in a browser, or deploy it with **Settings → Pages → Deploy from a branch → main → /(root)**.

Run the tests (Node.js 20+):

```bash
node --test test-pricing.js
```

## Business context
In professional work, a private reseller self-service portal helped reduce turnaround from approximately seven days to two. This portfolio demonstration illustrates comparable *concepts*, but the business metric was **not measured on this public demo**.

## What's not included
No login, production ERP, confidential documents, real customer information or real transaction processing. These would require secure backend services, role-based permissions and approved data access.
