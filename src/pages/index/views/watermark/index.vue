<template>
  <Teleport to="body">
    <div ref="el2" class="fixed inset-0 pointer-events-none" />
  </Teleport>
  <ElButton type="primary" @click="createGlobalWatermark">创建一个全局水印</ElButton>
  <div ref="el" class="mt-4 h-[500px] bg-white dark:bg-black" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createWatermark } from '@shoppingzh/tools/lib/dom'

const el = ref<HTMLElement>()
const el2 = ref<HTMLElement>()

function render() {
  createWatermark(el.value, 'Relaxed Admin', {
    textColor: 'rgba(100, 100, 100, .4)',
    textSize: 14,
  })
}

function createGlobalWatermark() {
  createWatermark(el2.value, 'Hello, world!', {

  })
}

onMounted(render)

</script>
