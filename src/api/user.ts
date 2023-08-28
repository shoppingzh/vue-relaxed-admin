import service from '@/service'

export function list() {
  return service.get<any, unknown[]>('users')
}
