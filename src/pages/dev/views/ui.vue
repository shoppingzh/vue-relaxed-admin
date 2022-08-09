<template>
  <div>
    <div class="mb-4 text-3xl">
      色彩
    </div>
    <div
      v-for="(item, index) in colors"
      :key="index"
      class="text-lg"
      :class="[item[0]]">{{ item[1] }}（{{ item[0] }}）</div>

    <div
      v-for="(item, index) in bgColors"
      :key="index"
      class="mb-2 text-lg text-white w-[500px]"
      :class="[item[0]]">{{ item[1] }}（{{ item[0] }}）</div>
  </div>

  <div class="mt-8">
    <div class="mb-4 text-3xl">文本</div>
    <div
      v-for="item in ['text-xs', 'text-sm', 'text-base', 'text-md', 'text-lg', 'text-xl', 'text-2xl']"
      :key="item"
      class="text-gray-600"
      :class="[item]">
      {{ item }}
    </div>
    <div class="text-gray-600">默认文本大小：14px</div>
  </div>
  
  <div class="mt-8">
    <div class="mb-4 text-3xl">阴影</div>
    <div class="flex">
      <div
        v-for="item in ['shadow-sm', 'shadow-md', 'shadow-lg']"
        :key="item"
        class="w-[100px] h-[100px] mr-2"
        :class="[item]"></div>
    </div>
  </div>

</template>

<script setup lang="ts">
const colors = [
  ['text-b-primary', '品牌色'],
  ['text-b-info', '信息色'],
  ['text-b-success', '成功色'],
  ['text-b-warn', '警告色'],
  ['text-b-danger', '危险色'],
  ['text-b-link', '链接色'],
]
const bgColors = [
  ['bg-b-primary', '品牌色'],
  ['bg-b-info', '信息色'],
  ['bg-b-success', '成功色'],
  ['bg-b-warn', '警告色'],
  ['bg-b-danger', '危险色'],
  ['bg-b-link', '链接色'],
]
</script>
