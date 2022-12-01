<template>
  <div class="text-3xl leading-loose">
    <div>
      Element-plus 图标：
      <el-icon class="text-blue-500"><House /></el-icon>
    </div>
    <div>
      SVG图标：
      <svg-icon name="home" class="text-blue-500" />
    </div>
    <div>
      字体图标：
      <i class="icon-home text-blue-500" />
    </div>
    <div>
      内联SVG图标：
      <svg-icon :inline="homeSvg" class="text-blue-500" />
    </div>
  </div>
</template>

<script setup lang="ts">
import homeSvg from '@/icons/svg/home.svg?raw';
console.log(homeSvg);
</script>
