import '@/main'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import errorReport from '@/plugins/error-report'
import dayjs from '@/plugins/dayjs'
import './permission'
import './styles/index.scss'

const app = createApp(App)
app
  .use(createPinia())
  .use(errorReport)
  .use(dayjs)
  .mount('#app')
