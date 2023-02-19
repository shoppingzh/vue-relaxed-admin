import service from '@/service'

export function list() {
  return service({
    url: 'users',
    method: 'get',
  })
}
