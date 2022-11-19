import axios from 'axios'
import { ElNotification } from 'element-plus'
import useApp from '@/store/app'

interface Result {
  code: number,
  msg: string,
  data: any,
}

interface ResultError extends Error {
  result?: Result
}

const instance = axios.create({
  baseURL: import.meta.env.APP_API_PREFIX,
  timeout: 60 * 1000
})

function showErrorMessage(message: string): void{
  ElNotification({
    type: 'error',
    title: '错误',
    message,
    duration: 5000,
  })
}

instance.interceptors.request.use(
  config => {
    // 根据需要，携带一些应用级的公共信息到服务端，避免在URL或请求体中反复携带
    config.headers['_appId'] = useApp().id
    return config
  }
)

instance.interceptors.response.use(
  response => {
    const result: Result = response.data
    if (!result) return result
    if (typeof result !== 'object') return result
    const { code, msg, data } = result
    const err: ResultError = new Error(msg)
    err.result = result
    if (code !== 0) return Promise.reject(err)
    return data
  },
  error => {
    showErrorMessage('网络错误，请稍后重试！')
    return Promise.reject(error)
  }
)

// 捕捉业务错误
instance.interceptors.response.use(
  data => {
    return data
  },
  error => {
    const message = typeof error === 'string' ? error : (error.result ? error.result.msg : error)
    showErrorMessage(message || '未知错误')
    return Promise.reject(error)
  }
)

export default instance
