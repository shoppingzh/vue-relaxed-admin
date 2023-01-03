import service from '@/service';

export function listLatest() {
  return service({
    url: 'access/latest',
    method: 'get',
  });
}
