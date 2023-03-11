import service from '@/service'
import { Schedule } from './types'

export function create(data: Schedule) {
  return service.post('schedule', data)
}

export function update(data: Schedule) {
  return service.put('schedule', data)
}

export function createOrUpdate(data: Schedule) {
  return data.id ? update(data) : create(data)
}

export function remove(id: number) {
  return service.delete('schedule', {
    params: {
      id
    }
  })
}

export function list(params?: any) {
  return service.get<any, Schedule[]>('schedule', { params })
}

export function getById(id: number) {
  return service.get<any, Schedule>('schedule/one', { params: { id } })
}
