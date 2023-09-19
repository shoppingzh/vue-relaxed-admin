import service from '@/service'
import { KnowledgeCategory } from './types'

export function list(params?: any) {
  return service.get<any, KnowledgeCategory[]>('knowledge/categories', { params })
}

export function getById(id: any) {
  return service.get<any, KnowledgeCategory>('knowledge/category', { params: { id } })
}

export function add(data: KnowledgeCategory) {
  return service.post('knowledge/category', data)
}

export function update(data: KnowledgeCategory) {
  return service.put('knowledge/category', data)
}

export function addOrUpdate(data: KnowledgeCategory) {
  return data && data.id ? update(data) : add(data)
}

export function removeById(id: number) {
  return service.delete('knowledge/category', { params: { id } })
}
