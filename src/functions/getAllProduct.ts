require("dotenv").config();
import axios, { AxiosResponse } from "axios";

const getAllProduct = async () => {
  try {
    const response = await axios.get(process.env.URL + "/products", {
      auth: {
        username: process.env.USERNAME || "",
        password: process.env.PASSWORD || "",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllProduct;
