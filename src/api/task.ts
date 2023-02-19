import service from '@/service'

export function create(data: any) {
  return service({
    url: 'task',
    method: 'post',
    data,
  })
}

export function list() {
  return service({
    url: 'task',
    method: 'get',
  })
}

export function removeById(id: string) {
  return service({
    url: 'task',
    method: 'delete',
    params: {
      id,
    },
  })
}
