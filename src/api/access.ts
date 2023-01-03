import service from '@/service';

export function listLatest() {
  return service({
    url: 'access/latest',
    method: 'get',
  });
}

export function listUsers() {
  return service({
    url: 'access/users',
    method: 'get'
  });
}
