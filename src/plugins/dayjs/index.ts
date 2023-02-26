import dayjs from 'dayjs'
import { App } from 'vue'

export default function(app: App) {
  app.config.globalProperties.$dayjs = dayjs
}
