require("dotenv").config();
import axios from "axios";

const getProductByType = async (type: string) => {
  const response = await axios.get(process.env.URL + "/products", {
    headers: {
      Authorization: process.env.AUTHORIZATION,
    },
  });
  console.log(response.data);
  return response.data;
};

export default getProductByType;
