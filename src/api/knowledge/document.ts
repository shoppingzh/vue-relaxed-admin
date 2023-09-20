import service from '@/service'

export function list(params?: any) {
  return service.get<any, any>('knowledge/documents', { params })
}
