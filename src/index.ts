require("dotenv").config();
import cancelTransaction from "./cancelTransaction";
import confirmTransaction from "./confirmTransaction";
import createTransaction from "./createTransaction";
import getAllListofTransaction from "./getAllListofTransaction";
// import app from "./app";
import getAllProduct from "./getAllProduct";
import getBalances from "./getBalances";
import getProductByCountryISO from "./getProductByCountryISO";
import getProductById from "./getProductById";
import getProductByOperatorID from "./getProductByOperatorId";
import getProductByService_Id from "./getProductByService_Id";
import getProductByType from "./getProductByType";
import getTransactionById from "./getTransactionById";

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`server listening on = localhost ${port}`);
// });

// Retrieve list of products DTOne
// getAllProduct();

// Retrieve list of products by type
// getProductByType("FIXED_VALUE_PIN_PURCHASE");

// Retrieve list of products by Service_ID
// getProductByService_Id(6);

// Retrieve list of products by country_iso_code
// getProductByCountryISO("MYS");

// Retrieve list of products by operator_id
// getProductByOperatorID(1671);

// Retrieve product by ID
// getProductById(32);

// Retrieve balances
// getBalances();

// create transaction
// createTransaction({
//   external_id: "trs04",
//   product_id: "147",
//   auto_confirm: false,
//   sender: {
//     last_name: "lili",
//     first_name: "vivi",
//     middle_name: "marry",
//     nationality_country_iso_code: "IDN",
//     mobile_number: "+62811223344100",
//     email: "string",
//   },
//   beneficiary: {
//     last_name: "dini",
//     first_name: "marchella",
//     middle_name: "luna",
//     nationality_country_iso_code: "IDN",
//     mobile_number: "+62811227100",
//     email: "string",
//   },
//   debit_party_identifier: {
//     mobile_number: "+6281123456100",
//     account_number: "112",
//   },
//   credit_party_identifier: {
//     mobile_number: "+6281123456100",
//     account_number: "112",
//   },
//   callback_url: "http://example.com",
// });

// get transaction by ID
// getTransactionById(2237503397);

// get list of transaction
getAllListofTransaction();

// confirm transaction
// confirmTransaction(2237503400);

// cancel transaction
// cancelTransaction(2237503401);
