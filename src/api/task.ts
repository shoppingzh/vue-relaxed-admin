import service from '@/service'

export interface Task {
  id: number;
}

export function create(data: any) {
  return service({
    url: 'task',
    method: 'post',
    data,
  })
}

export function list() {
  return service.get<any, Task[]>('task')
}

export function removeById(id: number) {
  return service.delete<any, boolean>('task', {
    method: 'delete',
    params: {
      id,
    },
  })
}
