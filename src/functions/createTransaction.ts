require("dotenv").config();
import axios from "axios";

const createTransaction = async (data: object) => {
  try {
    const response = await axios.post(
      process.env.URL + "/async/transactions",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default createTransaction;
