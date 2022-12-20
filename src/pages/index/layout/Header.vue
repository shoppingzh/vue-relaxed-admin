<template>
  <header class="flex items-center h-[52px] leading-[52px] px-4 border-b border-b-gray-300">
    <RouterLink to="/" class="appearance-none text-inherit no-underline hover:text-inherit">
      <svg-icon :inline="logoSvg" class="text-h5" />
      <span class="ml-2 text-h6">Vue Template</span>
    </RouterLink>
    <div class="flex-1" />
    <div>
      <el-switch v-model="darkMode" />
    </div>
  </header>
</template>

<script setup lang="ts">
import logoSvg from '@/assets/vue.svg?raw';
import usePrefs from '@/store/preference';
import { storeToRefs } from 'pinia';

const prefs = usePrefs();
const { darkMode } = storeToRefs(prefs);
</script>
