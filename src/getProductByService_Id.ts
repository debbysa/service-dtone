require("dotenv").config();
import axios from "axios";

const getProductByService_Id = async (service_id: number) => {
  try {
    const response = await axios.get(
      process.env.URL + `/products?service_id=${service_id}`,
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

export default getProductByService_Id;
