<template>
  <aside class="w-[160px] bg-gray-900 dark:bg-gray-200 text-white transition-all duration-300" :class="{ 'w-[50px]': layout.isMenuCollapse }">
    <div class="p-4">
      <RouterLink to="/" class="appearance-none text-inherit no-underline hover:text-inherit">
        <svg-icon :inline="logoSvg" class="text-h5" />
        <span v-show="!layout.isMenuCollapse" class="ml-2">Vue Template</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import logoSvg from '@/assets/vue.svg?raw';
import useLayout from '@p-index/store/layout';

const router = useRouter();
const routes = router.getRoutes();
const layout = useLayout();
</script>
