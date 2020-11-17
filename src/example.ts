import { BalancesDTOne } from "./classes/Balances-dtone";
import { Config } from "./classes/Config";
import { ProductDTOne } from "./classes/Product-dtone";
import { TransactionDTOne } from "./classes/Transaction-dtone";
import { CalculationMode, ProductType } from "./interfaces/enum";

require("dotenv").config();

let config = new Config(
  process.env.URL || "",
  process.env.USERNAME || "",
  process.env.PASSWORD || ""
);

// let productService = new ProductDTOne(
//   process.env.URL || "",
//   process.env.USERNAME || "",
//   process.env.PASSWORD || ""
// );

// let balancesService = new BalancesDTOne(
//   process.env.URL || "",
//   process.env.USERNAME || "",
//   process.env.PASSWORD || ""
// );

let transactionService = new TransactionDTOne(config);

// Retrieve list of products DTOne
// productService.getAllProduct();

// Retrieve list of products by type
// productService.getProductByType(ProductType.RANGED_VALUE_PIN_PURCHASE);

// Retrieve list of products by Service_ID
// productService.getProductByService_Id(6);

// Retrieve list of products by country_iso_code
// productService.getProductByCountryISO("MYS");

// Retrieve list of products by operator_id
// productService.getProductByOperatorID(1671);

// Retrieve product by ID
// productService.getProductById(7935);

// Retrieve balances
// balancesService.getBalances();

// create transaction
// transactionService.createTransaction({
//   external_id: "trx01",
//   product_id: 147,
//   calculation_mode: CalculationMode.SOURCE_AMOUNT,
//   source: {
//     unit: "kilogram",
//     amount: 20,
//   },
//   auto_confirm: false,
//   sender: {
//     last_name: "dwi",
//     first_name: "antini",
//     middle_name: "syayekti",
//     nationality_country_iso_code: "IDN",
//     mobile_number: "+6281122114100",
//     email: "string",
//   },
//   beneficiary: {
//     last_name: "deby",
//     first_name: "silvia",
//     middle_name: "agnes",
//     nationality_country_iso_code: "IDN",
//     mobile_number: "+62811227100",
//     email: "string",
//   },
//   debit_party_identifier: {
//     mobile_number: "+6281133356100",
//     account_number: "112",
//   },
//   credit_party_identifier: {
//     mobile_number: "+6281123776100",
//     account_number: "112",
//   },
//   callback_url: "http://example.com",
// });

// get transaction by ID
// transactionService.getTransactionById(2237503789);

// get list of transaction
// transactionService.getAllListofTransaction();

// confirm transaction
// transactionService.confirmTransaction(2237503789);

// cancel transaction
// transactionService.cancelTransaction(2237503420);
