import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.APP_API_PREFIX,
  timeout: 60 * 1000
})

instance.interceptors.request.use(
  config => {
    return config
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
