import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('app', () => {

  const id = ref('base-app')
  const name = ref('基础工程')

  return {
    id,
    name
  }

})
