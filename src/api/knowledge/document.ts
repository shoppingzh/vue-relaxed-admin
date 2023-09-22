import service from '@/service'
import { KnowledgeDocument } from '../types'

export function list(params?: any) {
  return service.get<any, any>('knowledge/documents', { params })
}

export function add(data: KnowledgeDocument) {
  return service.post<any, any>('knowledge/document', data, {})
}

export function update(data: KnowledgeDocument) {
  return service.put<any, any>('knowledge/document', data, {})
}

export function addOrUpdate(data: KnowledgeDocument) {
  return data && data.id ? update(data) : add(data)
}
