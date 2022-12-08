<template>
  <header class="flex items-center h-[50px] px-[20px]">
    <div class="flex-1 w-0">
      <div class="flex items-center">
        <svg-icon :inline="logo" class="text-h3" />
        <span class="ml-3 text-h5">开发规范</span>
      </div>
    </div>
    <div class="px-[10px]">
      <el-icon
        class="text-h4 text-gray-800 dark:text-gray-400 hover:text-b-primary-hover cursor-pointer"
        @click="prefs.toggleDarkMode()">
        <Sunny v-if="!darkMode" />
        <Moon v-else />
      </el-icon>
    </div>
  </header>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import { storeToRefs } from 'pinia';
import logo from './logo.svg?raw';

const prefs = usePrefs();
const { darkMode } = storeToRefs(prefs);
</script>
