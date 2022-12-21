<template>
  <header class="flex items-center h-[52px] leading-[52px]">
    <div class="h-full flex items-center px-4 cursor-pointer hover:bg-gray-300" @click="isMenuCollapse = !isMenuCollapse">
      <el-icon class="text-h5 transition-all duration-300" :class="{ 'rotate-180': isMenuCollapse }"><Fold /></el-icon>
    </div>
    <div class="flex-1" />
    <div class="px-4">
      <span class="nav-button text-h6" @click="isSetting = !isSetting">
        <el-icon>
          <Setting />
        </el-icon>
      </span>
      <span class="nav-button text-h6" @click="darkMode = !darkMode">
        <el-icon><Sunny /></el-icon>
      </span>
      <!-- <el-switch v-model="darkMode" /> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import { storeToRefs } from 'pinia';
import useLayout from '@p-index/store/layout';

const prefs = usePrefs();
const { darkMode } = storeToRefs(prefs);
const { isMenuCollapse, isSetting } = storeToRefs(useLayout());
</script>

<style scoped>
.nav-button {
  @apply inline-flex items-center justify-center p-2 cursor-pointer;
  @apply hover:text-b-primary;
  & + & {
    @apply ml-1;
  }
}
</style>
