require("dotenv").config();
import axios from "axios";

const getProductById = async (product_id: number) => {
  try {
    const response = await axios.get(
      process.env.URL + `/products/${product_id}`,
      {
        headers: {
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getProductById;
