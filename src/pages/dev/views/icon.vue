<template>
  <div>
    Element-plus 图标：
    <el-icon class="text-6xl text-blue-500"><House /></el-icon>
  </div>
  <div>
    SVG图标：
    <svg-icon name="home" class="text-6xl text-blue-500" />
  </div>
  <div>
    字体图标：
    <i class="icon-home text-6xl text-blue-500" />
  </div>
  <div>
    内联SVG图标：
    <svg-icon :inline="homeSvg" class="text-6xl text-blue-500" />
  </div>
</template>

<script setup lang="ts">
import homeSvg from '@/icons/svg/home.svg?raw';
console.log(homeSvg);
</script>