<template>
  <div ref="el" class="h-[350px]" />
</template>

<script setup lang="ts">
import useChart from '@/hooks/useChart';
import { EChartsOption } from 'echarts';
import { computed, ref } from 'vue';
import * as api from '@/api/access';
import dayjs from 'dayjs';

const list = ref([]);
const loading = ref(false);
const options = computed<EChartsOption>(() => ({
  grid: {
    left: 60,
    right: 60
  },
  xAxis: {
    type: 'category',
    data: list.value.map(o => dayjs(o.date).format('MM/DD')),
  },
  yAxis: {},
  tooltip: {
    trigger: 'axis',
    formatter: '{b}访问人数：{c}人'
  },
  series: [{
    type: 'line',
    data: list.value.map(o => o.totalCount),
    smooth: 0.6,
    symbol: 'none',
    itemStyle: {
      borderCap: 'round',
      borderJoin: 'round'
    },
    lineStyle: {
      cap: 'round',
      join: 'round',
    },
    areaStyle: {
      color: 'rgba(22, 93, 255, .1)'
    },
  }]
}));
const { el } = useChart(options, loading);

async function load() {
  const data: any = await api.listLatest();
  list.value = data;
}

load();
</script>
