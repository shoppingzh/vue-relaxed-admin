<template>
  <header class="flex items-center h-[52px] leading-[52px]">
    <div v-if="asideCollapseTogglePlace === 'header'" class="h-full flex items-center px-4 cursor-pointer hover:bg-gray-300" @click="isAsideCollapse = !isAsideCollapse">
      <el-icon class="text-h5 transition-all duration-300" :class="{ 'rotate-180': isAsideCollapse }"><Fold /></el-icon>
    </div>
    <div class="px-4 text-h6 font-semibold">Hello, Xpzheng!</div>
    <div class="flex-1" />
    <div class="px-4 flex items-center">
      <span class="nav-button" @click="isSetting = !isSetting">
        <el-icon>
          <Setting />
        </el-icon>
      </span>
      <span class="nav-button" @click="darkMode = !darkMode">
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
const { isAsideCollapse, asideCollapseTogglePlace, isSetting } = storeToRefs(useLayout());
</script>

<style scoped>
.nav-button {
  @apply inline-flex items-center justify-center p-2 cursor-pointer text-h5;
  @apply hover:text-b-primary;
  & + & {
    @apply ml-1;
  }
}
</style>
