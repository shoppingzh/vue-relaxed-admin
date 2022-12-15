import { useLocalStorage, useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { watch } from 'vue';

export default defineStore('layout', () => {

  const { width: windowWidth } = useWindowSize();
  const isMenuCollapse = useLocalStorage('isMenuCollapse', false, {});

  // 自动折叠
  watch(windowWidth, () => {
    isMenuCollapse.value = windowWidth.value <= 768;
  });

  return {
    isMenuCollapse,
  };

});
