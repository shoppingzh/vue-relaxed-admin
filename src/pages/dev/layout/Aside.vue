<template>
  <aside>
    <div class="flex items-center p-3 border-b border-gray-200 border-solid border-l-0 border-t-0 border-r-0">
      <svg-icon :inline="logo" class="text-h3" />
      <span class="ml-3 text-h5">开发规范</span>
    </div>
    <el-menu class="menu h-full w-[168px]" router collapse :default-active="$route.path">
      <el-menu-item
        v-for="item in menus"
        :key="item.to"
        :index="item.to"
        :route="item.to">{{ item.name }}</el-menu-item>
    </el-menu>
  </aside>
</template>

<script setup lang="ts">
import logo from './logo.svg?raw';

const menus = [{
  name: '全局样式',
  to: '/global-style'
}, {
  name: 'UI规范',
  to: '/ui'
}, {
  name: '图标方案',
  to: '/icon'
}, {
  name: 'TailwindCSS技巧',
  to: '/tailwindcss'
}];
</script>

<style>
.menu {
  --el-menu-border-color: #eee;
}
</style>
