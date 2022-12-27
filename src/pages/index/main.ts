import '@/main';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import ElementPlus from '@/plugins/element-plus';
import components from '@/components';
import router from './router';
import pageComponents from './components';
import '@/mock';

import './styles/index.scss';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ElementPlus)
  .use(components)
  .use(pageComponents)
  .mount('#app');
