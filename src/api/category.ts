import service from '@/service';

export function create(data: any) {
  return service({
    url: 'category',
    method: 'post',
    data
  });
}

export function list() {
  return service({
    url: 'category',
    method: 'get'
  });
}

export function removeById(id: string) {
  return service({
    url: 'category',
    method: 'delete',
    params: {
      id
    }
  });
}
