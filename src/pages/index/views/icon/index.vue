<template>
  <div class="p-4">
    <div class="p-4 bg-white dark:bg-black rounded-sm shadow-sm">
      
      <div class="mb-4 flex items-center">
        <el-input v-model="keyword" placeholder="搜索图标" class="w-[300px] mr-4" clearable />

        <span class="mr-4">
          <span class="text-secondary text-msm">颜色：</span>
          <el-color-picker v-model="color" />
        </span>

        <span>
          <span class="text-secondary text-msm">大小：</span>
          <el-input-number v-model="size" controls-position="right" :min="30" :max="100" class="w-[100px]" />
        </span>

      </div>

      <div v-if="filterIcons.length" class="flex flex-wrap">
        <div
          v-for="name in filterIcons"
          :key="name"
          class="p-4 bg-white dark:bg-black border border-gray-200 rounded-sm mr-3 text-center
            cursor-pointer hover:translate-y-[-2px] hover:shadow-md hover:border-transparent transition-all duration-300"
          :style="{ width: `${size}px` }">
          <div class="w-full aspect-square">
            <svg-icon :name="name" class="text-[30px]" :style="iconStyle" />
          </div>
          <div class="mt-2 text-center text-xs text-secondary truncate">
            {{ name }}
          </div>
        </div>
      </div>
      <el-empty v-else description="空空如也" image-size="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import icons from './icons';

const keyword = ref('');
const color = ref('');
const size = ref(40);

const filterIcons = computed(() => icons.filter(name => name.indexOf(keyword.value.trim()) >= 0));
const iconStyle = computed(() => ({
  color: color.value,
  fontSize: `${size.value}px`,
}));
</script>
