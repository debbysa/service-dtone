import axios from 'axios'
import { ItransactionCreate } from '../interfaces/transaction-dtone.interface'
import { Config } from './Config'

export class TransactionDTOne {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  createTransaction = async (data: ItransactionCreate) => {
    try {
      const response = await axios.post(this.cfg.domain_url + '/v1/async/transactions', data, {
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })
      // console.log('data = ', response.data)
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

  getTransactionById = async (transaction_id: number) => {
    try {
      const response = await axios.get(this.cfg.domain_url + `/v1/transactions/${transaction_id}`, {
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })
      // console.log('data = ', response.data)
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

  getAllListofTransaction = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + '/v1/transactions', {
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

  confirmTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.cfg.domain_url + `/v1/async/transactions/${transaction_id}/confirm`,
        '',
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )
      // console.log('data = ', response.data)
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

  cancelTransaction = async (transaction_id: number) => {
    try {
      const response = await axios.post(
        this.cfg.domain_url + `/v1/transactions/${transaction_id}/cancel`,
        '',
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )
      // console.log('data = ', response.data)
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
