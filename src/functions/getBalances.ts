require("dotenv").config();
import axios from "axios";

// URL dijadikan dynamic biar bisa dibuat pre production sama production
const getBalances = async () => {
  try {
    const response = await axios.get(process.env.URL + "/balances", {
      auth: {
        username: process.env.USERNAME || "",
        password: process.env.PASSWORD || "",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getBalances;
