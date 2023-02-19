<template>
  <div class="p-4">
    <div class="p-2 bg-white rounded-xs">
      <div class="text-h6">格式化：</div>
      <div class="mt-2">
        {{ dayjs(now).format('YYYY-MM-DD HH:mm:ss') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import dayjs from 'dayjs'
import { ref } from 'vue'

const now = ref(new Date())

useIntervalFn(() => {
  now.value = new Date()
}, 1000)
</script>
