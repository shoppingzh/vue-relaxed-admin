<template>
  <aside class="flex flex-col">
    <el-menu class="menu h-full" router :collapse="isCollapse" :default-active="$route.path">
      <el-menu-item
        v-for="item in menus"
        :key="item.to"
        :index="item.to"
        :route="item.to">
        <div class="truncate">{{ item.name }}</div>
      </el-menu-item>
    </el-menu>
    <div
      class="p-2 text-center hover:bg-gray-100 cursor-pointer border-t border-t-gray-600"
      @click="isCollapse = !isCollapse">
      <el-icon class="transition-all duration-350 text-h6" :class="{ 'rotate-180': isCollapse }"><Fold /></el-icon>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useLayout from '@p-dev/store/layout';
import { storeToRefs } from 'pinia';

const router = useRouter();
const routes = router.getRoutes();
const menus = computed(() => routes.filter(o => o.meta && o.meta.menu).map(o => ({
  name: o.meta.title,
  to: o.path,
})));
const { isMenuCollapse: isCollapse } = storeToRefs(useLayout());
</script>

<style>
.menu {
  --el-menu-border-color: transparent;
}
</style>
