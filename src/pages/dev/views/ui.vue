<template>

  <el-alert class="mb-5" type="warning">
    注：所有带有复制标记的文本点击都可点击复制。
  </el-alert>

  <Example title="色彩">
    <div
      v-for="[colors, name] in bgColors"
      :key="name"
      class="mb-4 flex w-[600px]">
      <div class="flex">
        <div
          v-for="color in colors"
          :key="color">
          <div class="w-[150px] h-[50px]" :class="color" />
          <div class="mt-1 text-sm">
            <Copy :text="color" />
          </div>
        </div>
      </div>
    </div>
  </Example>
  
  <Example title="色彩的应用">
    <el-alert :closable="false" title="注：">
      默认色彩是可以用于任何可以加颜色的地方的（如文本、边框、背景等）
    </el-alert>
    <div class="mt-5">
      <div class="text-h6 font-semibold">文字</div>
      <div
        v-for="[color] in colors"
        :key="color"
        class="flex text-white text-h5 leading-relaxed font-semibold w-[600px]"
        :class="color">
        <Copy :text="color" />
      </div>
    </div>

    <div class="mt-5">
      <div class="text-h6 mb-2 font-semibold">边框</div>
      <div class="flex">
        <div
          v-for="cls in ['border-b-primary', 'border-b-info', 'border-b-success', 'border-b-warn', 'border-b-danger']"
          :key="cls"
          class="w-[160px] mr-2 border-2">
          <div class="flex items-center justify-center h-[100px] border-solid text-regular font-semibold" :class="cls">
            <Copy :text="cls" />
          </div>
        </div>
      </div>
    </div>

  </Example>

  <Example title="间距">
    <div class="flex">
      <div
        v-for="cls in ['ml-0', 'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-5', 'ml-6', 'ml-7']"
        :key="cls"
        :class="cls"
        class="flex items-center justify-center w-[150px] h-[80px] bg-blue-100">
        <Copy :text="cls" />
      </div>
    </div>
    <el-alert :closable="false" title="注：" class="mt-2">
      <div>1. 所有间距以4px的倍数递进，最大支持20倍。</div>
      <div>2. 间距可用于外边距、内边距、宽度、高度等场景。</div>
    </el-alert>

  </Example>

  <Example title="文字大小">
    <div
      v-for="[cls, name] in textSizes"
      :key="cls"
      class="text-gray-600 font-semibold"
      :class="cls">
      {{ name }} <Copy :text="cls" />
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
        <div class="p-2 text-h6">
          <div><Copy :text="cls" /></div>
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
        <div class="mt-2 text-regular text-h6">
          <div><Copy :text="cls" /></div>
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
        <div class="mt-2 text-regular text-h6">
          <div><Copy :text="cls" /></div>
          <div>{{ name }}</div>
        </div>
      </div>
    </div>
  </Example>

</template>

<script setup lang="ts">
const bgColors = [
  [['bg-b-primary', 'bg-b-primary-hover', 'bg-b-primary-active', 'bg-b-primary-disabled'], '品牌色'],
  // [['bg-b-info', 'bg-b-info-hover', 'bg-b-info-active', 'bg-b-info-disabled'], '信息色'],
  [['bg-b-success', 'bg-b-success-hover', 'bg-b-success-active', 'bg-b-success-disabled'], '成功色'],
  [['bg-b-warn', 'bg-b-warn-hover', 'bg-b-warn-active', 'bg-b-warn-disabled'], '警告色'],
  [['bg-b-danger', 'bg-b-danger-hover', 'bg-b-danger-active', 'bg-b-danger-disabled'], '危险色'],
  // ['text-b-link', 'text-b-primary-hover', 'text-b-primary-active', 'text-b-primary-disabled', '链接色'],
];
const colors = [
  ['text-b-primary', '品牌色'],
  ['text-b-primary-hover', '品牌色'],
  ['text-b-primary-active', '品牌色'],
  ['text-b-primary-disabled', '品牌色'],
  // ['text-b-info', '信息色'],
  ['text-b-success', '成功色'],
  ['text-b-success-hover', '成功色'],
  ['text-b-success-active', '成功色'],
  ['text-b-success-disabled', '成功色'],
  ['text-b-warn', '警告色'],
  ['text-b-warn-hover', '警告色'],
  ['text-b-warn-active', '警告色'],
  ['text-b-warn-disabled', '警告色'],
  ['text-b-danger', '危险色'],
  ['text-b-danger-hover', '危险色'],
  ['text-b-danger-active', '危险色'],
  ['text-b-danger-disabled', '危险色'],
  // ['text-b-link', '链接色'],
];

const textSizes = [
  ['text-h1', '标题一'],
  ['text-h2', '标题二'],
  ['text-h3', '标题三'],
  ['text-h4', '标题四'],
  ['text-h5', '标题五'],
  ['text-h6', '标题六'],
  ['text-base', '常规'],
  ['text-msm', '中小'],
  ['text-sm', '小的'],
  ['text-xs', '超小'],
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
  ['rounded-full', '圆'],
];
</script>
