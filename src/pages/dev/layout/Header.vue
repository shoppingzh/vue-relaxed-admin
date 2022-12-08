<template>
  <header class="flex items-center h-[50px] px-[20px]">
    <div class="flex-1 w-0">
      <RouterLink to="/" custom v-slot="{ navigate }">
        <div class="flex items-center cursor-pointer" @click="navigate()">
          <svg-icon :inline="logo" class="text-h3" />
          <span class="ml-3 text-h5">开发规范</span>
        </div>
      </RouterLink>
    </div>
    <div class="px-[10px]">

      <div class="flex items-center">
        <el-link :underline="false" class="text-h4">
          <el-icon
            @click="prefs.toggleDarkMode()">
            <Sunny v-if="!darkMode" />
            <Moon v-else />
          </el-icon>
        </el-link>

        <el-link :underline="false" class="ml-[15px] text-h5">
          <el-icon
            @click="prefs.toggleFullscreen()"><FullScreen /></el-icon>
        </el-link>
  
      </div>
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
