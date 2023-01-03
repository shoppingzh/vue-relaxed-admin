<template>
  <div class="p-4">
    <div class="flex">
      <div
        v-for="x in 4"
        :key="x"
        :class="{ 'ml-2': x > 1 }"
        class="relative flex items-center flex-1 bg-normal p-2 rounded-sm">
        <div class="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-gray-200">
          <svg-icon name="github" class="text-[32px]" />
        </div>
        <div class="ml-6">
          <div class="text-h3">480</div>
          <div class="">所有阅读数</div>
        </div>
        <div class="absolute right-4 top-4 cursor-pointer">
          <svg-icon name="gengduo" class="text-h6" />
        </div>
      </div>
    </div>

    <div class="mt-3 bg-normal rounded-sm">
      <div ref="el" class="h-[350px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useChart from '@/hooks/useChart';
import { EChartsOption } from 'echarts';
import { computed } from 'vue';

const options = computed<EChartsOption>(() => ({
  xAxis: {
    type: 'category'
  },
  yAxis: {},
  tooltip: {},
  series: [{
    type: 'bar',
    data: new Array(50).fill(null).map(() => Math.random() * 100)
  }]
}));
const { el } = useChart(options);
</script>
