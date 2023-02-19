import { computed, onMounted, onUnmounted, Ref, ref, shallowRef, unref, watch } from 'vue'
import * as echarts from 'echarts'
import { useResizeObserver } from '@vueuse/core'
import { throttle } from 'lodash'

export default function (option?: Ref<echarts.EChartsOption> | echarts.EChartsOption, loading?: Ref<boolean> | boolean) {
  const el = ref<HTMLElement>(null)
  const chart = shallowRef<echarts.EChartsType>(null)
  const optionRef = computed(() => unref(option))
  const loadingRef = computed(() => unref(loading))

  const resetOption = () => {
    if (!chart.value || !optionRef.value) return
    chart.value.setOption(optionRef.value, {
      notMerge: true,
      lazyUpdate: true,
    })
  }

  const resetLoading = () => {
    if (!chart.value) return
    if (loadingRef.value) {
      chart.value.showLoading()
    } else {
      chart.value.hideLoading()
    }
  }

  const rerender = () => {
    chart.value &&
      chart.value.resize({
        animation: {
          duration: 500,
        },
      })
  }

  onMounted(() => {
    chart.value = echarts.init(el.value)
  })
  onUnmounted(() => {
    chart.value && chart.value.dispose()
  })
  // 容器大小发生改变，重绘
  useResizeObserver(el, throttle(rerender, 500))

  watch(
    [chart, optionRef],
    () => {
      resetOption()
    },
    { deep: true }
  )

  watch([chart, loadingRef], () => {
    resetLoading()
  })

  return {
    el,
    chart: computed(() => chart.value),
  }
}
