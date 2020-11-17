import axios from "axios";
import { ItransactionCreate } from "../interfaces/transaction-dtone.interface";
import { Config } from "./Config";

export class TransactionDTOne {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  createTransaction = async (data: ItransactionCreate) => {
    try {
      const response = await axios.post(
        this.cfg.domain_url + "/v1/async/transactions",
        data,
        {
          auth: {
            username: this.cfg.api_key || "",
            password: this.cfg.api_secret || "",
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
        this.cfg.domain_url + `/v1/transactions/${transaction_id}`,
        {
          auth: {
            username: this.cfg.api_key || "",
            password: this.cfg.api_secret || "",
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
      const response = await axios.get(
        this.cfg.domain_url + "/v1/transactions",
        {
          auth: {
            username: this.cfg.api_key || "",
            password: this.cfg.api_secret || "",
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

  confirmTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.cfg.domain_url +
          `/v1/async/transactions/${transaction_id}/confirm`,
        "",
        {
          auth: {
            username: this.cfg.api_key || "",
            password: this.cfg.api_secret || "",
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
        this.cfg.domain_url + `/v1/transactions/${transaction_id}/cancel`,
        "",
        {
          auth: {
            username: this.cfg.api_key || "",
            password: this.cfg.api_secret || "",
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
