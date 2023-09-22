import service from '@/service'
import { File as MyFile } from './types'

export function upload(file: File) {
  const fd = new FormData()
  fd.append('file', file, file.name)
  return service.post<any, MyFile>('file/upload', fd, {})
}
