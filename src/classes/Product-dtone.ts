import axios from "axios";
import { ProductType } from "../interfaces/enum";

export class ProductDTOne {
  domain_url: string;
  api_key: string;
  api_secret: string;

  constructor(domain_url: string, api_key: string, api_secret: string) {
    this.domain_url = domain_url;
    this.api_key = api_key;
    this.api_secret = api_secret;
  }

  getAllProduct = async () => {
    try {
      const response = await axios.get(this.domain_url + "/v1/products", {
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

  getProductByType = async (type: ProductType) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/products?type=${type}`,
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

  getProductByService_Id = async (service_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/products?service_id=${service_id}`,
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

  getProductByCountryISO = async (isoCode: string) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/products?country_iso_code=${isoCode}`,
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

  getProductById = async (product_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/products/${product_id}`,
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

  getProductByOperatorID = async (operator_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/v1/products?operator_id=${operator_id}`,
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
