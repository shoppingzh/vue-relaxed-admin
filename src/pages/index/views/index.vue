<template>
  <div class="text-b-link hover:cursor-pointer text-lg" @click="toDev">
    去开发页
  </div>
  <div class="mt-4">
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import { hello } from '@/api/hello'
import { ref } from 'vue'

const result = ref(null)
const toDev = () => {
  location.href = 'dev.html'
}
const load = async() => {
  const response = await hello()
  result.value = response.data
}

load()
</script>
