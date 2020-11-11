require("dotenv").config();
import axios from "axios";

const getProductByOperatorID = async (operator_id: number) => {
  try {
    const response = await axios.get(
      process.env.URL + `/products?operator_id=${operator_id}`,
      {
        headers: {
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default getProductByOperatorID;
