# Service DTOne

You want to connect your API to Digital Value Services API DTOne? Now, you can use this API service to handle it.

## Installation

Install `service-dtone`

```bash
npm install service-dtone
```

Import (in Typescript) or Require (in Javascript) the package in your project

```bash
// typescript
import {
    Config,
    BalancesDTOne,
    ProductDTOne,
    TransactionDTOne,
    ProductType,
    ItransactionCreate,
    ISenderandBeneficiary,
    IdebitandCreditPartyIdentifier
    } from "service-dtone";
// javascript
const {
    Config,
    BalancesDTOne,
    ProductDTOne,
    TransactionDTOne,
    ProductType,
    ItransactionCreate,
    ISenderandBeneficiary,
    IdebitandCreditPartyIdentifier,
} = require("service-dtone");
```

## Quick Start

This is example to implement service-dtone in Javascript:

```bash
const {
    Config,
    BalancesDTOne,
    ProductDTOne,
    TransactionDTOne,
    ProductType,
    ItransactionCreate,
    ISenderandBeneficiary,
    IdebitandCreditPartyIdentifier,
} = require("service-dtone");

// config your domain_url, api_key, and api_secret to access DTOne
const config = new Config(
    "domain_url",
    "username or api_key",
    "password or api_secret")

// using endpoint of transaction
const transactionService = new TransactionDTOne(config);

// get all list of transaction
transactionService.getAllListofTransaction();
```
