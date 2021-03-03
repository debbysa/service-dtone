import axios from 'axios'
import { ProductType } from '../interfaces/enum'
import { Config } from './Config'

export class ProductDTOne {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getAllProduct = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + '/v1/products', {
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

  getProductByType = async (type: ProductType) => {
    try {
      const response = await axios.get(this.cfg.domain_url + `/v1/products?type=${type}`, {
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

  getProductByService_Id = async (service_id: number) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?service_id=${service_id}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )
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

  getProductByCountryISO = async (isoCode: string) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?country_iso_code=${isoCode}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )
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

  getProductById = async (product_id: number) => {
    try {
      const response = await axios.get(this.cfg.domain_url + `/v1/products/${product_id}`, {
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
        // console.log(error.response)
        const message = error.response.data.errors.map((item: { message: string }) => item.message)
        console.log('product_id: ', `${product_id}, `, message[0])
        // console.log('status error = ', error.response.data)
        return {
          status: error.response.status,
          data: error.response.data,
          productId: product_id,
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

  getProductByOperatorID = async (operator_id: number) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/v1/products?operator_id=${operator_id}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )
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
