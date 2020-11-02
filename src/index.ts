require("dotenv").config();
import createTransaction from "./createTransaction";
// import app from "./app";
import getAllProduct from "./getAllProduct";
import getBalances from "./getBalances";
import getProductByCountryISO from "./getProductByCountryISO";
import getProductById from "./getProductById";
import getProductByOperatorID from "./getProductByOperatorId";
import getProductByService_Id from "./getProductByService_Id";
import getProductByType from "./getProductByType";

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
getBalances();

// create transaction
// createTransaction({
//   external_id: "trs01",
//   product_id: "32",
//   auto_confirm: false,
//   sender: {
//     last_name: "luna",
//     first_name: "vika",
//     middle_name: "marissa",
//     nationality_country_iso_code: "BRA",
//     mobile_number: "+62811223344",
//     email: "string",
//   },
//   beneficiary: {
//     last_name: "string",
//     first_name: "string",
//     middle_name: "string",
//     nationality_country_iso_code: "BRA",
//     mobile_number: "+62811227788",
//     email: "string",
//   },
//   debit_party_identifier: {
//     mobile_number: "+6281123456789",
//     account_number: "112",
//   },
//   credit_party_identifier: {
//     mobile_number: "+6281123456779",
//     account_number: "112",
//   },
//   callback_url: "http://example.com",
// });
