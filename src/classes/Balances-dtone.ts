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
      // console.log("data = ",response.data)
      console.log("status = ", response.status)
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.log("status error", error.response.status)
      console.log("pesan error", error.message)
      // console.log("data = ", error.response.data)
      return {
        status: error.response.status,
        message: error.message,
        data: error.response.data
      }
    }
  };
}
