<template>
  <aside
    class="relative transition-all duration-200 ease-in-out" :class="{ '!w-[60px]': isAsideCollapse }" :style="styles">
    <div class="flex flex-col w-full h-full overflow-hidden">
      <!-- LOGO区 -->
      <div class="p-4 text-center whitespace-nowrap border-b border-b-gray-200">
        <RouterLink to="/" class="flex items-center appearance-none text-inherit no-underline hover:text-inherit">
          <svg-icon :inline="logoSvg" class="text-h4" />
          <span v-show="!layout.isAsideCollapse" class="ml-2">Vue Template</span>
        </RouterLink>
      </div>
      <!-- 菜单区 -->
      <el-menu :collapse="isAsideCollapse" class="flex-1 h-0 border-r-0">
        <el-menu-item index="1">
          <MenuContent icon="yibiaopan" title="分析页" />
        </el-menu-item>
        <el-sub-menu>
          <template #title>
            <MenuContent icon="yibiaopan" title="错误页" />
          </template>
          <el-menu-item>
            <MenuContent icon="yibiaopan" title="404" />
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- 折叠按钮 -->
    <div v-if="asideCollapseTogglePlace === 'aside'" class="absolute flex items-center justify-center w-[24px] h-[24px] right-0 top-[20%] translate-x-[50%] bg-white dark:bg-black z-10 rounded-full border border-gray-300 cursor-pointer hover:!bg-gray-100" @click="isAsideCollapse = !isAsideCollapse">
      <el-icon class="transition-all duration-300" :class="{ 'rotate-180': isAsideCollapse }"><ArrowLeft /></el-icon>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import logoSvg from '@/assets/logo.svg?raw';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';
import MenuContent from './components/MenuContent.vue';
import { computed } from 'vue';

const router = useRouter();
const routes = router.getRoutes();
const layout = useLayout();
const { isAsideCollapse, asideCollapseTogglePlace, asideWidth } = storeToRefs(layout);
const styles = computed<any>(() => {
  return {
    width: isAsideCollapse.value ? null : `${asideWidth.value}px`,
  };
});
</script>

<style scoped>
.el-menu {
  @apply !w-full;
  /* --color: theme('colors.white');
  --el-menu-bg-color: var(--color);
  --el-menu-hover-bg-color: var(--color);
  --el-menu-border-color: theme('colors.transparent');
  --el-menu-active-text-color: theme('colors.gray.100'); */
  /* &--collapse {
    @apply !w-full;
  }
  &-item {
    @apply !px-4;
  } */
}
</style>
