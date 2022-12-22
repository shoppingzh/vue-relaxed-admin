import { useLocalStorage, useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

type MenuCollapseTogglePlace = 'aside' | 'header'

export default defineStore('layout', () => {

  const { width: windowWidth } = useWindowSize();
  const isMenuCollapse = useLocalStorage('isMenuCollapse', false);
  // 菜单折叠器的位置
  const menuCollapseTogglePlace = useLocalStorage('menuCollapseTogglePlace', 'aside');

  const isSetting = ref(false);

  // 自动折叠
  watch(windowWidth, () => {
    isMenuCollapse.value = windowWidth.value <= 768;
  });

  return {
    isMenuCollapse,
    isSetting,
    menuCollapseTogglePlace,
  };

});
