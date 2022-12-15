<template>
  <el-config-provider :locale="locale" size="default">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useNetwork } from '@vueuse/core';
import { watch } from 'vue';
import locale from 'element-plus/dist/locale/zh-cn.mjs';

const { isOnline } = useNetwork();

watch(isOnline, () => {
  if (!isOnline.value) {
    alert('已断网！');
  }
}, { immediate: true });
</script>
