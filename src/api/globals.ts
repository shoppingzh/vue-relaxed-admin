import service from '@/service'
import { Globals } from './types'

export function get() {
  return service.get<any, Globals>('globals')
}

export function update(data: Globals) {
  return service.put<any, any>('globals', data)
}
