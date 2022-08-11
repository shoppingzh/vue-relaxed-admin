import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.APP_API_PREFIX,
  timeout: 60 * 1000
})

export default instance
