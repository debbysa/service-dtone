import axios from "axios";
import { Config } from "./Config";

export class BalancesDTOne {
  private cfg: Config;

  constructor(config: Config) {
    this.cfg = config;
  }

  getBalances = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + "/v1/balances", {
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
      throw error;
    }
  };
}
