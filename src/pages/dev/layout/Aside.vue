<template>
  <aside class="flex flex-col">
    <el-menu class="menu h-full" router :collapse="isCollapse" :default-active="$route.path">
      <el-tooltip v-for="item in menus" :key="item.to" :content="item.name" :disabled="!isCollapse" placement="right">
        <el-menu-item
          :index="item.to"
          :route="item.to">
          <svg-icon
            :inline="icons[item.icon]"
            class="menu-svg-icon text-h6"
            :class="{ 'text-h5': isCollapse }" />
          <span class="ml-2" :class="{ 'invisible': isCollapse }">{{ item.name }}</span>
        </el-menu-item>
      </el-tooltip>
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
import icons from './icons';

const router = useRouter();
const routes = router.getRoutes();
const menus = computed(() => routes.filter(o => o.meta && o.meta.menu).map(o => ({
  name: o.meta.title,
  to: o.path,
  icon: o.meta.icon,
})));
const { isMenuCollapse: isCollapse } = storeToRefs(useLayout());
</script>

<style scoped>
/* .menu {
  --el-menu-border-color: transparent;
} */
:deep(.menu-svg-icon) {
  svg {
    @apply transition-all duration-300;
  }
}
</style>
