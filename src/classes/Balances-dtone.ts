import axios from 'axios'
import { Config } from './Config'

export class BalancesDTOne {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getBalances = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + '/v1/balances', {
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })
      // console.log("data = ",response.data)
      // console.log('status = ', response.status)
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('response data = ', error.response.data)
        console.log('status error = ', error.response.status)
        return {
          status: error.response.status,
          data: error.response.data,
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
        return {
          message: error.request,
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}
