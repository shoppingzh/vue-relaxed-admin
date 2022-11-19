import '@/main'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './styles/index.scss'
import '@/permission'
import { createPinia } from 'pinia'
import ElementPlus from '@/plugins/element-plus'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .mount('#app')
