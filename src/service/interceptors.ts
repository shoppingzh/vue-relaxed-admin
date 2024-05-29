import { AxiosInstance, } from 'axios'

type MaybePromise<T> = T | Promise<T>
interface GeneralResult<T> {
  success: boolean
  message: string
  data: T
}

interface ResponeDataOptions<T> {
  toGeneralResult: (data: any) => MaybePromise<GeneralResult<T>>
  onError?: (error: Error) => MaybePromise<void>
}

/**
 * 添加响应基础拦截器：
 * 解开响应体内容，返回真正的内容数据；并在错误时，进入错误处理分支
 * 
 * @param instance 
 * @param options 
 */
export function addResponseBaseInterceptor<T>(instance: AxiosInstance, options: ResponeDataOptions<T>) {
  if (!instance) throw new Error()
  const { toGeneralResult, onError, } = options ?? {}

  instance.interceptors.response.use(
    async(response) => {
      const result = await toGeneralResult(response.data)
      const { success, data, message, } = result
      if (success) return data
      const error = new Error(message, { cause: response.data, })
      return Promise.reject(error)
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    data => data,
    async(error) => {
      if (onError) {
        await onError(error)
      }
      return Promise.reject(error)
    }
  )
}
