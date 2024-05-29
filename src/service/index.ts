import axios from 'axios'
import { addResponseBaseInterceptor, } from './interceptors'

interface Result {
  code: number
  msg: string
  data: any
}

const instance = axios.create({
  baseURL: import.meta.env.APP_API_PREFIX,
  timeout: 60 * 1000,
})

function showErrorMessage(message: string): void {
  console.error(message)
}

instance.interceptors.request.use((config) => {
  // 根据需要，携带一些应用级的公共信息到服务端，避免在URL或请求体中反复携带
  if (config.headers) {
  }
  return config
})


addResponseBaseInterceptor(instance, {
  toGeneralResult: async(data: Result) => {
    return {
      success: data.code === 0,
      data: data,
      message: data.msg || '网络错误，请稍后重试！',
    }
  },
  onError: error => showErrorMessage(error.message),
})

export default instance
