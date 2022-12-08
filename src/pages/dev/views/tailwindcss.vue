<template>
  <Example title="JIT即时编译">
    <div class="w-[210px] h-[100px] bg-blue-50 center">
      w-[210px] h-[100px]
    </div>
    <div class="mt-2">
    </div>
  </Example>

  <Example title="响应式">
    <div class="center w-[210px] h-[100px] md:w-[500px] md:h-[200px] bg-pink-100">
      将屏幕缩放到手机大小，看看上面内容的变化！
    </div>
  </Example>

  <Example title="暗黑模式">
    <div class="w-[300px] h-[150px] bg-green-100 dark:bg-green-600"></div>
    <div class="mt-2">
      切换暗黑模式：<el-switch v-model="darkMode" />
    </div>
  </Example>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import { storeToRefs } from 'pinia';

const { darkMode } = storeToRefs(usePrefs());

</script>

<style>
.center {
  @apply flex justify-center items-center;
}
</style>
