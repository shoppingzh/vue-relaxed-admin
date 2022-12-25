<template>
  <section class="h-full flex overflow-hidden">
    <Aside class="h-full border-r border-r-gray-200" />
    <section class="flex flex-col flex-1 w-0">
      <Header v-show="!isHideHeader" class="z-10 border-b border-b-gray-200" />
      <Main class="flex-1 h-0 w-full bg-gray-200" />
    </section>
  </section>
  <el-drawer v-model="isSetting" size="300px" title="设置">
    <Settings />
  </el-drawer>

  <!-- 悬浮设置按钮 -->
  <el-button type="primary" class="px-3 py-3 fixed right-0 bottom-2/3 rounded-none rounded-tl-sm rounded-bl-sm" @click="isSetting = true">
    <el-icon class="text-h6"><Setting /></el-icon>
  </el-button>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';
import Settings from './components/Settings.vue';
import { computed } from 'vue';

const { isSetting, isHideHeader } = storeToRefs(useLayout());
const styles = computed<any>(() => {
  if (!isSetting.value) return {};
  return {
    filter: 'blur(3px)',
  };
});

</script>

<style scoped>
aside {
  box-shadow: 0 3px 20px theme('colors.gray.200');
}
</style>
