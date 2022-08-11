import service from '@/service'

export function hello() {
  return service({
    url: '/hello.json',
    method: 'get'
  })
}