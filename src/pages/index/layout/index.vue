<template>
  <section class="h-full flex overflow-hidden">
    <Aside class="h-full" />
    <section class="flex flex-col flex-1 w-0">
      <Header class="" />
      <Main class="flex-1 h-0 w-full bg-gray-200" />
    </section>
  </section>
  <el-drawer v-model="isSetting" size="300px" title="设置">
    <Settings />
  </el-drawer>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';
import Settings from './components/Settings.vue';

const { isSetting } = storeToRefs(useLayout());

</script>
