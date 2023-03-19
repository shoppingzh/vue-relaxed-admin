<template>
  <div class="page-wrap">
    <div class="content-wrap">
      <div class="text-h6">格式化：</div>
      <div class="mt-2">
        {{ $dayjs(now).format('YYYY-MM-DD HH:mm:ss') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { ref } from 'vue'

const now = ref(new Date())

useIntervalFn(() => {
  now.value = new Date()
}, 1000)
</script>
