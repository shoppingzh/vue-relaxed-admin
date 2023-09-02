import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/api/menu'
import { Globals } from '@/api/types'
import * as globalsApi from '@/api/globals'
import * as userApi from '@/api/user'

export default defineStore('session', () => {
  const inited = ref(false)
  const user = ref()
  const menus = ref()
  const globals = ref<Globals>()

  async function initGlobals() {
    globals.value = await globalsApi.get()
  }

  function init() {
    return new Promise<void>(async(resolve, reject) => {
      try {
        if (inited.value) {
          resolve()
          return
        }
        // user.value = await userApi.getCurrent()
        menus.value = await api.list()
        await initGlobals()

        inited.value = true
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  return {
    user,
    menus,
    globals,
    initGlobals,
    inited,
    init,
  }
})
