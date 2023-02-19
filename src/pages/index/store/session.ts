import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/api/menu'

export default defineStore('session', () => {
  const inited = ref(false)
  const menus = ref()

  function init() {
    return new Promise<void>(async (resolve, reject) => {
      try {
        if (inited.value) {
          resolve()
          return
        }

        menus.value = await api.list()

        inited.value = true
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }

  return {
    menus,
    init,
  }
})
