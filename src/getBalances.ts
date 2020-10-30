require("dotenv").config();
import axios from "axios";

const getBalances = async () => {
  try {
    const response = await axios.get(process.env.URL + "/balances", {
      headers: {
        Authorization: process.env.AUTHORIZATION,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getBalances;
