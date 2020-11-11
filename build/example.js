"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_dtone_1 = __importDefault(require("./service-dtone"));
require("dotenv").config();
var DTOneService = new service_dtone_1.default(process.env.URL || "", process.env.USERNAME || "", process.env.PASSWORD || "");
// Retrieve list of products DTOne
// DTOneService.getAllProduct();
// Retrieve list of products by type
// DTOneService.getProductByType("FIXED_VALUE_PIN_PURCHASE");
// Retrieve list of products by Service_ID
// DTOneService.getProductByService_Id(6);
// Retrieve list of products by country_iso_code
// DTOneService.getProductByCountryISO("MYS");
// Retrieve list of products by operator_id
// DTOneService.getProductByOperatorID(1671);
// Retrieve product by ID
// DTOneService.getProductById(148);
// Retrieve balances
// DTOneService.getBalances();
// create transaction
// DTOneService.createTransaction({
//   external_id: "trx01",
//   product_id: "147",
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
// DTOneService.getTransactionById(2237503789);
// get list of transaction
DTOneService.getAllListofTransaction();
// confirm transaction
// DTOneService.confirmTransaction(2237503789);
// cancel transaction
// DTOneService.cancelTransaction(2237503420);
