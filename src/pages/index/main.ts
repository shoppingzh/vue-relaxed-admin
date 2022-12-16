import '@/main';
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from '@/plugins/element-plus';
import components from '@/components';

import './styles/index.scss';

createApp(App)
  .use(ElementPlus)
  .use(components)
  .mount('#app');
