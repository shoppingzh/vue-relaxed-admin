import service from '@/service'
import Cookies from 'js-cookie'

export function list() {
  return service.get<any, unknown[]>('users')
}

interface LoginData {
  username: string
  password: string
}
export async function login(data: LoginData) {
  return service.post<any, any>('login', data)
}

/**
 * 获取当前登录用户
 * @returns 
 */
export function getCurrent() {
  const user = Cookies.get('session-user')
  return user ? JSON.parse(user) : null
}
