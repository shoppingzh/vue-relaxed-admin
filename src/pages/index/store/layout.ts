import { useLocalStorage, useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export default defineStore('layout', () => {

  const { width: windowWidth } = useWindowSize();
  const isAsideCollapse = useLocalStorage('isAsideCollapse', false);
  // 菜单折叠器的位置
  const asideCollapseTogglePlace = useLocalStorage('asideCollapseTogglePlace', 'aside');
  // 菜单栏宽度
  const asideWidth = useLocalStorage('asideWidth', 180);
  // 顶部栏显示
  const isHideHeader = useLocalStorage('isHideHeader', false);

  const isSetting = ref(false);

  // 自动折叠
  watch(windowWidth, () => {
    isAsideCollapse.value = windowWidth.value <= 768;
  });

  return {
    isAsideCollapse,
    isSetting,
    asideCollapseTogglePlace,
    asideWidth,
    isHideHeader,
  };

});
