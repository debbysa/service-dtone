import axios from "axios";
import { ProductType } from "../interfaces/enum";
import { Config } from "./Config";

export class ProductDTOne {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  getAllProduct = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + "/v1/products", {
        auth: {
          username: this.cfg.api_key || "",
          password: this.cfg.api_secret || "",
        },
      });
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

  getProductByType = async (type: ProductType) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?type=${type}`,
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

  getProductByService_Id = async (service_id: number) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?service_id=${service_id}`,
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

  getProductByCountryISO = async (isoCode: string) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?country_iso_code=${isoCode}`,
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

  getProductById = async (product_id: number) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products/${product_id}`,
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

  getProductByOperatorID = async (operator_id: number) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?operator_id=${operator_id}`,
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
}
