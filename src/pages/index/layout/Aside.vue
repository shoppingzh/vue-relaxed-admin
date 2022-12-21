<template>
  <aside class="flex flex-col w-[220px] bg-gray-900 dark:bg-gray-200 text-white transition-all duration-300" :class="{ '!w-[50px]': isMenuCollapse }">
    <div class="p-4 text-center whitespace-nowrap">
      <RouterLink to="/" class="appearance-none text-inherit no-underline hover:text-inherit">
        <svg-icon :inline="logoSvg" class="text-h5" />
        <span v-show="!layout.isMenuCollapse" class="ml-2">Vue Template</span>
      </RouterLink>
    </div>
    <el-menu :collapse="isMenuCollapse" class="flex-1 h-0 !w-full">
      <el-menu-item index="1">
        <MenuContent>分析页分析页分析页分析页分析页分析页</MenuContent>
      </el-menu-item>
      <el-sub-menu>
        <template #title>
          <MenuContent>二级二级二级</MenuContent>
        </template>
        <el-menu-item index="2">分析页</el-menu-item>
        <el-sub-menu index="33">
          <template #title>三级</template>
          <el-menu-item index="3">三级分析页</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import logoSvg from '@/assets/vue.svg?raw';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';
import MenuContent from './components/MenuContent.vue';

const router = useRouter();
const routes = router.getRoutes();
const layout = useLayout();
const { isMenuCollapse } = storeToRefs(layout);
</script>

<style scoped>
.el-menu {
  --color: theme('colors.gray.900');
  --el-menu-bg-color: var(--color);
  --el-menu-hover-bg-color: var(--color);
  --el-menu-text-color: #fff;
  --el-menu-border-color: var(--color);
  --el-menu-active-text-color: theme('colors.gray.100');
}
</style>
