<template>
  <div ref="el" class="h-full bg-white dark:bg-black" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createWatermark } from '@shoppingzh/tools/lib/dom'

const el = ref<HTMLElement>()

function render() {
  createWatermark(el.value, 'Relaxed Admin', {
    textColor: 'rgba(100, 100, 100, .4)',
    textSize: 14,
  })
}

onMounted(render)

</script>
