import axios from "axios";

const getTransactionById = async (transaction_id: number) => {
  try {
    const response = await axios.get(
      `https://preprod-dvs-api.dtone.com/v1/transactions/${transaction_id}`,
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

export default getTransactionById;
