import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { App } from 'vue'

dayjs.locale('zh-cn')

export default function(app: App) {
  app.config.globalProperties.$dayjs = dayjs
}
