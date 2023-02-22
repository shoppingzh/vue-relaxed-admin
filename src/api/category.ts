import service from '@/service'
import { Category } from './types'

export function create(data: any) {
  return service({
    url: 'category',
    method: 'post',
    data
  })
}

export function list() {
  return service.get<any, Category[]>('category')
}

export function removeById(id: string) {
  return service({
    url: 'category',
    method: 'delete',
    params: {
      id
    }
  })
}
