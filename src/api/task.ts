import service from '@/service'
import { Task } from './types'

export function create(data: Task) {
  return service.post('task', data)
}

export function update(data: Task) {
  return service.put('task', data)
}

export function createOrUpdate(data: Task) {
  return data.id ? update(data) : create(data)
}

export function list(params?: any) {
  return service.get<any, Task[]>('task', {
    params
  })
}

export function removeById(id: number) {
  return service.delete<any, boolean>('task', {
    method: 'delete',
    params: {
      id,
    },
  })
}
