import Vant from 'vant';
import 'vant/lib/index.css';
import { App } from 'vue';

export default function(app: App) {
  app.use(Vant);
}
