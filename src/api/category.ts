import service from '@/service'
import { Category } from './types'

export function create(data: Category) {
  return service.post<any, any>('category', data)
}

export function update(data: Category) {
  return service.put<any, any>('category', data)
}

export function createOrUpdate(data: Category) {
  return data.id ? update(data) : create(data)
}

export function list() {
  return service.get<any, Category[]>('category')
}

export function getById(id: number) {
  return service.get<any, Category>('category/one', { params: { id } })
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
