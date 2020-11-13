import axios from "axios";
import { ItransactionCreate } from "../interfaces/transaction-dtone.interface";

export class TransactionDTOne {
  domain_url: string;
  api_key: string;
  api_secret: string;

  constructor(domain_url: string, api_key: string, api_secret: string) {
    this.domain_url = domain_url;
    this.api_key = api_key;
    this.api_secret = api_secret;
  }

  createTransaction = async (data: ItransactionCreate) => {
    try {
      const response = await axios.post(
        this.domain_url + "/v1/async/transactions",
        data,
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  getTransactionById = async (transaction_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/transactions/${transaction_id}`,
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  getAllListofTransaction = async () => {
    try {
      const response = await axios.get(this.domain_url + "/v1/transactions", {
        auth: {
          username: this.api_key || "",
          password: this.api_secret || "",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  confirmTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.domain_url + `/v1/async/transactions/${transaction_id}/confirm`,
        "",
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  cancelTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.domain_url + `/v1/transactions/${transaction_id}/cancel`,
        "",
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };
}
