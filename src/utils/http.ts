import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthReponse } from 'src/types/auth.type'
import { clearAccessTokenFromls, getAccessTokenFromLs, saveAccessTokenLS, setProfiletols } from './auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  //private refreshToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLs()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 60 * 60 * 24, // 1 ngày
        'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
      }
    })
    this.instance.interceptors.response.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        console.log('response', response)
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          const data = response.data as AuthReponse
          this.accessToken = data.data.access_token
          saveAccessTokenLS(this.accessToken)
          setProfiletols(data.data.user)
        } else if (url === '/logout') {
          this.accessToken = ''

          clearAccessTokenFromls()
        }

        return response
      },

      // eslint-disable-next-line prettier/prettier
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
