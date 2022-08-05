import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// permisson
import './permission'

import './styles/index.scss'

createApp(App)
  .use(router)
  .mount('#app')
