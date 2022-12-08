<template>
  <div class="text-h4 leading-relaxed">
    <div>
      Element-plus 图标：
      <el-icon class="text-blue-500"><House /></el-icon>
    </div>
    <div>
      SVG图标：
      <svg-icon name="home" class="text-blue-500" />
    </div>
    <div>
      内联SVG图标：
      <svg-icon :inline="homeSvg" class="text-blue-500" />
    </div>
  </div>

  <div class="my-6 h-[1px] bg-gray-300"></div>


  <div
    v-for="cls in sizes"
    :key="cls"
    :class="[cls]"
    class="leading-relaxed">
    我是一个SVG图标 <svg-icon name="home" />
  </div>


</template>

<script setup lang="ts">
import homeSvg from '@/icons/svg/home.svg?raw';
console.log(homeSvg);

const sizes = ['text-xs', 'text-sm', 'text-base', 'text-h6', 'text-h5', 'text-h4', 'text-h3', 'text-h2', 'text-h1'];
</script>
