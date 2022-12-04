import '@/main';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import '@/permission';
import { createPinia } from 'pinia';
import Vant from '@/plugins/vant';

import '@/icons/font/iconfont.css';
import './styles/index.scss';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vant)
  .mount('#app');
