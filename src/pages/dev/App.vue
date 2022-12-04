<template>
  <div class="p-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useNetwork } from '@vueuse/core';
import { watch } from 'vue';

const { isOnline } = useNetwork();

watch(isOnline, () => {
  if (!isOnline.value) {
    alert('已断网！');
  }
}, { immediate: true });
</script>
