import { useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export default defineStore('layout', () => {

  const isMenuCollapse = ref(false);
  const { width: windowWidth } = useWindowSize();

  // 自动折叠
  watch(windowWidth, () => {
    isMenuCollapse.value = windowWidth.value <= 768;
  });

  return {
    isMenuCollapse,
  };

});
