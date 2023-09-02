import { MaybeRef } from '@vueuse/core'
import { reactive, ref } from 'vue'

interface Options {
  username?: MaybeRef<string>
  password?: MaybeRef<string>
  remember?: MaybeRef<boolean>
}

export default function(options: Options = {}) {
  const username = ref(options.username)
  const password = ref(options.password)
  const remember = ref(options.remember)

  const form = reactive({
    username,
    password,
  })

  return {
    form,
    remember,
  }
}
