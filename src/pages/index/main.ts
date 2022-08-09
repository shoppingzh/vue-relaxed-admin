import '@/main'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './styles/index.scss'
import '@/permission'

createApp(App)
  .use(router)
  .mount('#app')
