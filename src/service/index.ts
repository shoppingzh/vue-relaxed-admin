import axios from 'axios'
import { ElNotification } from 'element-plus'
import useApp from '@/store/app'

const instance = axios.create({
  baseURL: import.meta.env.APP_API_PREFIX,
  timeout: 60 * 1000
})

instance.interceptors.request.use(
  config => {
    // 根据需要，携带一些应用级的公共信息到服务端，避免在URL或请求体中反复携带
    config.headers['_appId'] = useApp().id
    return config
  }
)

instance.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  error => {
    ElNotification({
      type: 'error',
      title: '错误',
      message: '网络异常，请稍后重试！',
      duration: 5000,
    })
    return Promise.reject(error)
  }
)

export default instance
