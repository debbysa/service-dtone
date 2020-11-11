require("dotenv").config();
import axios from "axios";

const getProductByCountryISO = async (isoCode: string) => {
  try {
    const response = await axios.get(
      process.env.URL + `/products?country_iso_code=${isoCode}`,
      {
        headers: {
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
};

export default getProductByCountryISO;
