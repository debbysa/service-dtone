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
      console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
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
      console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
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
      // console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
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
      console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
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
      console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
    }
  };
}
