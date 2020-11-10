import axios from "axios";

export default class ProvideDTone {
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
      const response = await axios.get(this.domain_url + "/products", {
        auth: {
          username: this.api_key || "",
          password: this.api_secret || "",
        },
      });
      console.log(response.data);
      //   return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  getProductByType = async (type: string) => {
    const response = await axios.get(this.domain_url + "/products", {
      auth: {
        username: this.api_key || "",
        password: this.api_secret || "",
      },
    });
    console.log(response.data);
    return response.data;
  };

  getProductByService_Id = async (service_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/products?service_id=${service_id}`,
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
    }
  };

  getProductByCountryISO = async (isoCode: string) => {
    try {
      const response = await axios.get(
        this.domain_url + `/products?country_iso_code=${isoCode}`,
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
    }
  };

  getProductById = async (product_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/products/${product_id}`,
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
    }
  };

  getProductByOperatorID = async (operator_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/products?operator_id=${operator_id}`,
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // balance
  getBalances = async () => {
    try {
      const response = await axios.get(this.domain_url + "/balances", {
        auth: {
          username: this.api_key || "",
          password: this.api_secret || "",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // transactions
  createTransaction = async (data: object) => {
    try {
      const response = await axios.post(
        this.domain_url + "/async/transactions",
        data,
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  getTransactionById = async (transaction_id: number) => {
    try {
      const response = await axios.get(
        this.domain_url + `/transactions/${transaction_id}`,
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  getAllListofTransaction = async () => {
    try {
      const response = await axios.get(this.domain_url + "/transactions", {
        auth: {
          username: this.api_key || "",
          password: this.api_secret || "",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  confirmTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.domain_url + `/async/transactions/${transaction_id}/confirm`,
        "",
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  cancelTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.domain_url + `/transactions/${transaction_id}/cancel`,
        "",
        {
          auth: {
            username: this.api_key || "",
            password: this.api_secret || "",
          },
        }
      );
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };
}
