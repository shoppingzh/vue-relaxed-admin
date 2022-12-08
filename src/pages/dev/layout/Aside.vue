<template>
  <aside>
    <div class="flex items-center p-3 border-b border-gray-200 dark:border-gray-700 border-solid border-l-0 border-t-0 border-r-0">
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import logo from './logo.svg?raw';

const router = useRouter();
const routes = router.getRoutes();
const menus = computed(() => routes.map(o => ({
  name: o.meta.title,
  to: o.path,
})));
</script>

<style>
.menu {
  --el-menu-border-color: transparent;
}
</style>
