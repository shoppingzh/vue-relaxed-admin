<template>
  <div class="mb-4 font-semibold">布局</div>
  <div>
    <div class="set-item flex">
      <div class="flex-1">隐藏顶部栏</div>
      <el-switch v-model="isHideHeader" />
    </div>
  </div>

  <div class="mb-4 font-semibold">表现相关</div>
  <div>
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
    <div class="set-item flex">
      <div class="flex-1">暗黑模式</div>
      <el-switch v-model="darkMode" />
    </div>
    <div class="set-item flex">
      <div class="flex-1">灰色模式</div>
      <el-switch v-model="grayMode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

const { darkMode, grayMode } = storeToRefs(usePrefs());
const { asideWidth, asideCollapseTogglePlace, isHideHeader } = storeToRefs(useLayout());
</script>

<style scoped>
.set-item {
  @apply mb-2;
}
</style>
