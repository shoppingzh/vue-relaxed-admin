<template>
  <el-alert type="success" :closable="false" class="mb-4"> TailwindCSS的入门使用，推荐看这篇文章就够了：<a target="_blank" href="https://zhengxiaoping.xyz/others/TailwindCSS%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.html">https://zhengxiaoping.xyz/others/TailwindCSS%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7.html</a> </el-alert>

  <Example title="JIT即时编译">
    <div class="w-[210px] h-[100px] bg-blue-100 center">w-[210px] h-[100px]</div>
    <div class="mt-2"></div>
  </Example>

  <Example title="类名复用">
    <div class="block center">block</div>
    <div class="mt-1 block center">block</div>
    <div>.block { @apply w-[200px] h-[120px] bg-cyan-100; }</div>
  </Example>

  <Example title="响应式">
    <div class="center w-[210px] h-[100px] md:w-[500px] md:h-[200px] bg-pink-100">w-[210px] h-[100px] md:w-[500px] md:h-[200px]</div>
    将屏幕缩放到手机大小，看看上面内容的变化！
  </Example>

  <Example title="暗黑模式">
    <div class="center w-[300px] h-[150px] bg-green-100 dark:bg-green-600">bg-green-100 dark:bg-green-600</div>
    <div class="mt-2">切换暗黑模式：<el-switch v-model="darkMode" /></div>
  </Example>

  <Example title="多行文本溢出插件">
    <div class="line-clamp-3">
      <span v-for="x in 100" :key="x">人生到处知何似，应似飞鸿踏雪泥；泥上偶然留指爪，鸿飞哪复计东西。</span>
    </div>
  </Example>

  <Example title="比例盒子">
    <div class="w-[500px] aspect-video bg-blue-200" />
  </Example>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference'
import { storeToRefs } from 'pinia'

const { darkMode } = storeToRefs(usePrefs())
</script>

<style scoped>
.center {
  @apply flex justify-center items-center;
}
.block {
  @apply w-[200px] h-[120px] bg-cyan-100;
}
</style>
