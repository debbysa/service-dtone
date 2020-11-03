import axios from "axios";

const getAllListofTransaction = async () => {
  try {
    const response = await axios.get(
      "https://preprod-dvs-api.dtone.com/v1/transactions",
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

export default getAllListofTransaction;
