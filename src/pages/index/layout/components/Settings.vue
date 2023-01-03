<template>
  <div class="h-full flex flex-col">
    <!-- 主区 -->
    <div class="flex-1 h-0 overflow-auto py-3">
      <div class="mb-4">
        <div class="mb-4 font-semibold">主题色</div>
        <div class="flex">
          <div
            v-for="([name, color]) in brandColors"
            :key="name"
            class="relative w-8 h-8 transition-all duration-150 cursor-pointer hover:scale-110 hover:z-10 opacity-70"
            :style="{ backgroundColor: `var(--color-${color}-6)` }"
            @click="brandColor = name" />
        </div>
      </div>
      <div class="mb-4">
        <div class="mb-4 font-semibold">布局</div>
        <div>
          <div class="set-item flex">
            <div class="flex-1">隐藏顶部栏</div>
            <el-switch v-model="isHideHeader" />
          </div>
          <div class="set-item flex">
            <div class="flex-1">侧边栏宽度</div>
            <el-input-number v-model="asideWidth" :controls="false" :min="80" :max="500" class="w-[100px]" />
          </div>
          <div class="set-item flex">
            <div class="flex-1">侧切位置</div>
            <el-radio-group v-model="asideCollapseTogglePlace">
              <el-radio label="aside">侧边</el-radio>
              <el-radio label="header">顶部</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    
      <div>
        <div class="mb-4 font-semibold">风格/表现</div>
        <div>
          <div class="set-item flex">
            <div class="flex-1">暗黑模式</div>
            <el-switch v-model="darkMode" />
          </div>
          <div class="set-item flex">
            <div class="flex-1">灰色模式</div>
            <el-switch v-model="grayMode" />
          </div>
          <div class="set-item flex">
            <div class="flex-1">色弱模式</div>
            <el-switch v-model="weakMode" />
          </div>
        </div>
      </div>
    </div>

    <!-- 快捷键区 -->
    <div class="py-2 text-center">
      <Keyboard text="S" /> <span class="ml-2 text-xs text-secondary">展开/收起</span>
    </div>
  </div>

</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

const { darkMode, grayMode, weakMode, brandColor } = storeToRefs(usePrefs());
const { asideWidth, asideCollapseTogglePlace, isHideHeader } = storeToRefs(useLayout());
const brandColors = [
  ['blue', 'blue'],
  ['red', 'red'],
  ['green', 'green'],
  ['orange', 'orange'],
  ['pink', 'pink'],
  ['cyan', 'cyan'],
  ['gray', 'gray'],
];
</script>

<style scoped>
.set-item {
  @apply mb-2;
}
</style>
