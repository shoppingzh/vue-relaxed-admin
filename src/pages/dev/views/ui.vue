<template>
  <Example title="色彩">
    <div
      v-for="[color, name] in bgColors"
      :key="color"
      class="px-4 py-3 flex text-white text-sm font-semibold w-[600px]"
      :class="color">
      <div class="flex-1 w-0">{{ color }}</div>
      <div>{{ name }}</div>
    </div>
  </Example>
  
  <Example title="色彩的应用">
    <el-alert :closable="false" title="注：">
      默认色彩是可以用于任何可以加颜色的地方的（如文本、边框、背景等）
    </el-alert>
    <div class="mt-5">
      <div class="text-h1 font-semibold">文字</div>
      <div
        v-for="[color] in colors"
        :key="color"
        class="flex text-white text-md font-semibold w-[600px]"
        :class="color">
        {{ color }}
        <!-- <div class="flex-1 w-0">{{ color }}</div> -->
        <!-- <div>{{ name }}</div> -->
      </div>
    </div>

    <div class="mt-5">
      <div class="text-h1 mb-2 font-semibold">边框</div>
      <div class="flex">
        <div
          v-for="cls in ['border-b-primary', 'border-b-info', 'border-b-success', 'border-b-warn', 'border-b-danger']"
          :key="cls"
          class="w-[150px] mr-2 border-2">
          <div class="flex items-center justify-center h-[100px] border-solid text-regular font-semibold" :class="cls">
            {{ cls }}
          </div>
        </div>
      </div>
    </div>

  </Example>

  <Example title="文字大小">
    <div
      v-for="[cls, name, size] in textSizes"
      :key="cls"
      class="text-gray-600 font-semibold"
      :class="cls">
      {{ name }}（{{ size }}px）
    </div>
    <el-alert title="备注" :closable="false" class="mt-2">
      <div>默认文本大小：常规</div>
    </el-alert>
  </Example>

  <Example title="文字颜色">
    <div class="flex">
      <div
        v-for="[cls, name] in textColors"
        :key="cls"
        class="w-[150px]"
        :class="cls">
        <div class="h-[100px] bg-current" />
        <div class="p-2 text-h1">
          <div>{{ cls }}</div>
          <div>{{ name }}</div>
        </div>
      </div>
    </div>
    <el-alert title="备注" :closable="false" class="mt-2">
      <div>默认文字颜色：text-regular</div>
    </el-alert>
  </Example>

  <Example title="阴影">
    <div class="flex bg-[#FCFCFC] p-4">
      <div
        v-for="[cls, name] in shadows"
        :key="cls">
        <div class="w-[150px] h-[100px] mr-2" :class="cls" />
        <div class="mt-2 text-regular text-h1">
          <div>{{ cls }}</div>
          <div>{{ name }}</div>
        </div>
      </div>
    </div>
  </Example>

  <Example title="圆角">
    <div class="flex bg-[#FCFCFC] p-4">
      <div
        v-for="[cls, name] in radius"
        :key="cls">
        <div class="w-[150px] h-[100px] mr-4 bg-blue-100" :class="cls" />
        <div class="mt-2 text-regular text-h1">
          <div>{{ cls }}</div>
          <div>{{ name }}</div>
        </div>
      </div>
    </div>
  </Example>

</template>

<script setup lang="ts">
const colors = [
  ['text-b-primary', '品牌色'],
  ['text-b-info', '信息色'],
  ['text-b-success', '成功色'],
  ['text-b-warn', '警告色'],
  ['text-b-danger', '危险色'],
  ['text-b-link', '链接色'],
];
const bgColors = [
  ['bg-b-primary', '品牌色'],
  ['bg-b-info', '信息色'],
  ['bg-b-success', '成功色'],
  ['bg-b-warn', '警告色'],
  ['bg-b-danger', '危险色'],
  ['bg-b-link', '链接色'],
];

const textSizes = [
  ['text-xs', '超小', 10],
  ['text-sm', '小的', 12],
  ['text-msm', '中小', 13],
  ['text-base', '常规', 14],
  ['text-h1', '标题一', 16],
  ['text-h2', '标题二', 20],
  ['text-h3', '标题三', 24],
  ['text-h4', '标题四', 36],
  ['text-h5', '标题五', 48],
  ['text-h6', '标题六', 56],
];

const textColors = [
  ['text-primary', '主色'],
  ['text-regular', '常规色'],
  ['text-secondary', '次要色'],
  ['text-disabled', '禁用色'],
];

const shadows = [
  ['shadow-sm', '小阴影'],
  ['shadow-md', '中阴影'],
  ['shadow-lg', '大阴影'],
];

const radius = [
  ['rounded-xs', '超小圆角'],
  ['rounded-sm', '小圆角'],
  ['rounded-md', '中等圆角'],
];
</script>
