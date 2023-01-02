<template>
  <div class="p-4 h-[3000px]">
    <div ref="el" class="w-full h-[300px]" />
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
