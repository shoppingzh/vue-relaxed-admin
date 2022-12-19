import '@/main';
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from '@/plugins/element-plus';
import components from '@/components';
import router from './router';

import './styles/index.scss';

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(components)
  .mount('#app');
