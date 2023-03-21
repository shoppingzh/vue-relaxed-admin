import { MaybeRef } from '@vueuse/core'
import { merge } from 'lodash'
import { ref } from 'vue'

interface Options {
  username?: MaybeRef<string>
  password?: MaybeRef<string>
  remember?: MaybeRef<boolean>
}

export default function(options?: Options) {
  const opts = merge({} as Options, options)
  const username = ref(opts.username)
  const password = ref(opts.password)
  const remember = ref(opts.remember)

  return {
    username,
    password,
    remember,
  }
}
