import { BalancesDTOne } from "./classes/Balances-dtone";
import { ProductDTOne } from "./classes/Product-dtone";
import { TransactionDTOne } from "./classes/Transaction-dtone";
import { ProductType } from "./interfaces/enum";

require("dotenv").config();

let productService = new ProductDTOne(
  process.env.URL || "",
  process.env.USERNAME || "",
  process.env.PASSWORD || ""
);

let balancesService = new BalancesDTOne(
  process.env.URL || "",
  process.env.USERNAME || "",
  process.env.PASSWORD || ""
);

let transactionService = new TransactionDTOne(
  process.env.URL || "",
  process.env.USERNAME || "",
  process.env.PASSWORD || ""
);

// Retrieve list of products DTOne
// productService.getAllProduct();

// Retrieve list of products by type
// productService.getProductByType(ProductType.FIXED_VALUE_PAYMENT);

// Retrieve list of products by Service_ID
// productService.getProductByService_Id(6);

// Retrieve list of products by country_iso_code
// productService.getProductByCountryISO("MYS");

// Retrieve list of products by operator_id
productService.getProductByOperatorID(1671);

// Retrieve product by ID
// productService.getProductById(148);

// Retrieve balances
// balancesService.getBalances();

// create transaction
// transactionService.createTransaction({
//   external_id: "trx01",
//   product_id: 147,
//   auto_confirm: false,
//   sender: {
//     last_name: "winda",
//     first_name: "ersa",
//     middle_name: "rolina",
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
