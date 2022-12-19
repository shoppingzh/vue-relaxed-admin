import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export function addRoutes(routes: RouteRecordRaw[], parentName?: string) {
  routes.forEach(route => {
    if (parentName) {
      router.addRoute(parentName, route);
    } else {
      router.addRoute(route);
    }
  });
}

export default router;
