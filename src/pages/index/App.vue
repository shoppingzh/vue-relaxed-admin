<template>
  <div class="p-10 font-semibold text-lg">
    Hello, vue-relaxed-admin!
  </div>
</template>

<script setup lang="ts">
import service from '@/service/index'

service.get('/hello').then(res => {
  console.log(res)
}).catch((err: Error) => {
  console.error(err.cause)
})
</script>
