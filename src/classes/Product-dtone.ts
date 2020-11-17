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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };
}
