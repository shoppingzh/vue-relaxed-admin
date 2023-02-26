import '@/main'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from '@/plugins/element-plus'
import components from '@/components'
import router from './router'
import pageComponents from './components'
import errorReport from '@/plugins/error-report'
import './permission'
import '@/mock'

import './styles/index.scss'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(components)
  .use(pageComponents)
  .use(errorReport)
  .mount('#app')
