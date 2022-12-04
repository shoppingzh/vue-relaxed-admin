import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';
import type { App } from 'vue';

export default function(app: App) {
  app.use(Vant);
}
