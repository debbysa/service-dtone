import axios from "axios";

const confirmTransaction = async (transaction_id: number) => {
  try {
    const response = await axios.post(
      `https://preprod-dvs-api.dtone.com/v1/async/transactions/${transaction_id}/confirm`,
      "",
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

export default confirmTransaction;
