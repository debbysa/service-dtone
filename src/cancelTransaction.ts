import axios from "axios";

const cancelTransaction = async (transaction_id: number) => {
  try {
    const response = await axios.post(
      `https://preprod-dvs-api.dtone.com/v1/transactions/${transaction_id}/cancel`,
      "",
      {
        headers: {
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

export default cancelTransaction;
