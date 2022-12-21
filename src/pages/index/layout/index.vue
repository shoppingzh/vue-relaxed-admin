<template>
  <section class="h-full flex overflow-hidden">
    <Aside class="h-full" />
    <section class="flex flex-col flex-1 w-0">
      <Header class="shadow-lg" />
      <Main class="flex-1 h-0 w-full bg-gray-200" />
    </section>
  </section>
  <el-drawer v-model="isSetting" size="20%" title="设置">
    hello
  </el-drawer>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

const { isSetting } = storeToRefs(useLayout());

</script>
