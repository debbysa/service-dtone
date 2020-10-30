require("dotenv").config();
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
