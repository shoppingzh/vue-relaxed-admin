import service from '@/service'
import { Schedule } from './types'

export function create(data: Schedule) {
  return service.post('schedule', data)
}

export function list(params?: any) {
  return service.get<any, Schedule[]>('schedule', { params })
}
