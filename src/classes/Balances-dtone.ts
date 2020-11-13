import axios from "axios";

export class BalancesDTOne {
  domain_url: string;
  api_key: string;
  api_secret: string;

  constructor(domain_url: string, api_key: string, api_secret: string) {
    this.domain_url = domain_url;
    this.api_key = api_key;
    this.api_secret = api_secret;
  }

  getBalances = async () => {
    try {
      const response = await axios.get(this.domain_url + "/v1/balances", {
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
}
