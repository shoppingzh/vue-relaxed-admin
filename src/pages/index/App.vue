<template>
  <el-config-provider :locale="zhCn" :button="{ autoInsertSpace: true }">
    <RouterView />
  </el-config-provider>

  <Teleport to="body">
    <div ref="el" class="fixed z-[9999999] inset-0 pointer-events-none" />
  </Teleport>
</template>

<script setup lang="ts">
import { createWatermark } from '@shoppingzh/tools/lib/dom'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { onMounted, ref } from 'vue'

const el = ref()

onMounted(() => {
  createWatermark(el.value, '孔明工具箱', {
    textSize: 14,
    textColor: 'rgba(100, 100, 100, .1)',
    rotate: -20,
    padding: [60, 60]
  })
})
</script>
