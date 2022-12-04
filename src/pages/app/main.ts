import '@/main';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import '@/permission';
import { createPinia } from 'pinia';

import '@/icons/font/iconfont.css';
import './styles/index.scss';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
