<template>
  <aside>
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
