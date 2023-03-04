<template>
  <header class="flex items-center h-[52px] leading-[52px]">
    <div v-if="asideCollapseTogglePlace === 'header'" class="h-full flex items-center px-4 cursor-pointer hover:bg-gray-200" @click="isAsideCollapse = !isAsideCollapse">
      <svg-icon name="zhedie" class="text-h5 transition-all duration-300" :class="{ 'rotate-180': isAsideCollapse }" />
    </div>
    <!-- <div class="px-4 text-h6 font-semibold">Hello, Xpzheng!</div> -->
    <div class="px-4">
      <!-- <el-input v-model="keyword" class="w-[300px]" placeholder="搜索关键词" icon="search" @keydown.enter="search">
        <template #suffix>
          <svg-icon name="sousuo" class="text-h6 cursor-pointer" @click="search" />
        </template>
      </el-input> -->
    </div>
    <div class="flex-1" />
    <div class="px-4 flex items-center">
      <span class="nav-button" @click="openRepo">
        <svg-icon name="github" />
      </span>
      <span class="nav-button" @click="openDocs()">
        <svg-icon name="wendang" />
      </span>
      <span class="line" />
      <span class="nav-button" @click="darkMode = !darkMode">
        <svg-icon :name="darkMode ? 'yewan' : 'baitian'" />
      </span>
      <span class="nav-button" @click="isSetting = !isSetting">
        <svg-icon name="shezhi2" />
      </span>
      <span class="nav-button" @click="prefs.toggleFullscreen()">
        <svg-icon :name="isFullscreen ? 'quxiaoquanping' : 'quanping'" />
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference'
import { storeToRefs } from 'pinia'
import useLayout from '@p-index/store/layout'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const keyword = ref('')
const prefs = usePrefs()
const { darkMode, isFullscreen } = storeToRefs(prefs)
const { isAsideCollapse, asideCollapseTogglePlace, isSetting } = storeToRefs(useLayout())

function openRepo() {
  window.open('https://github.com/shoppingzh/vue-relaxed-admin')
}

function openDocs() {
  window.open('https://vue-docs.zhengxiaoping.xyz/')
}

function search() {
  ElMessage.info(`搜索：${keyword.value}`)
}
</script>

<style scoped>
.nav-button {
  @apply inline-flex items-center justify-center p-2 cursor-pointer text-h5 rounded-sm;
  @apply hover:bg-gray-200;
  & + & {
    @apply ml-2;
  }
}
.line {
  @apply inline-block mx-2 w-[1px] h-4 bg-gray-300;
}
</style>
