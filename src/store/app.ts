import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('app', () => {

  const id = ref('base-app')
  const name = ref('vue-template')

  return {
    id,
    name
  }

})
