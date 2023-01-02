import { computed, onMounted, onUnmounted, Ref, ref, shallowRef, unref, watch } from 'vue';
import * as echarts from 'echarts';
import { useWindowSize } from '@vueuse/core';
import { throttle } from 'lodash';

function onWindowResize(callback: () => void) {
  const { width: windowWidth } = useWindowSize();
  watch(windowWidth, throttle(() => {
    callback && callback();
  }, 500));
}

export default function(
  option?: Ref<echarts.EChartsOption> | echarts.EChartsOption,
  loading?: Ref<boolean> | boolean
) {
  const el = ref<HTMLElement>(null);
  const chart = shallowRef<echarts.EChartsType>(null);
  const optionRef = computed(() => unref(option));
  const loadingRef = computed(() => unref(loading));

  const resetOption = () => {
    if (!chart.value || !optionRef.value) return;
    chart.value.setOption(optionRef.value, {
      notMerge: true,
      lazyUpdate: true
    });
  };

  const resetLoading = () => {
    if (!chart.value) return;
    if (loadingRef.value) {
      chart.value.showLoading();
    } else {
      chart.value.hideLoading();
    }
  };

  onMounted(() => {
    chart.value = echarts.init(el.value);
  });

  onUnmounted(() => {
    chart.value && chart.value.dispose();
  });

  onWindowResize(() => {
    chart.value && chart.value.resize({
      animation: {
        duration: 500
      }
    });
  });

  watch([chart, optionRef], () => {
    resetOption();
  }, { deep: true });

  watch([chart, loadingRef], () => {
    resetLoading();
  });

  return {
    el,
    chart: computed(() => chart.value)
  };
}
