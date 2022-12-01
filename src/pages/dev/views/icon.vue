<template>
  <div class="text-3xl leading-relaxed">
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

  <div class="my-6 h-[1px] bg-gray-300"></div>


  <div
    v-for="cls in sizes"
    :key="cls"
    :class="[cls]"
    class="leading-loose">
    我是一个SVG图标 <svg-icon name="home" />
  </div>

  <div class="my-6 h-[1px] bg-gray-300"></div>

  <div
    v-for="cls in sizes"
    :key="cls"
    :class="[cls]"
    class="leading-loose">
    我是一个字体图标 <i class="icon-home" />
  </div>

</template>

<script setup lang="ts">
import homeSvg from '@/icons/svg/home.svg?raw';
console.log(homeSvg);

const sizes = ['text-xs', 'text-sm', 'text-base', 'text-md', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'];
</script>
