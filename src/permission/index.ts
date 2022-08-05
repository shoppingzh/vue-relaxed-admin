import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.1
})

router.beforeEach((to, from, next) => {

  NProgress.start()

  next()
})

router.afterEach(() => {
  NProgress.done()
})
