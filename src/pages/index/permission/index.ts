import '@/permission';
import router from '../router';
import useSession from '@p-index/store/session';
import whiteList from './whiteList';

router.beforeEach(async(to, from, next) => {

  // 白名单通行
  if (whiteList.indexOf(to.path) >= 0) {
    return next();
  }

  try {
    useSession().init();
  } catch {
    next('/404');
  }

  next();
});
