import service from '@/service';

export function list() {
  return service({
    url: 'category',
    method: 'get'
  });
}
