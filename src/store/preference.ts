/**
 * 界面公共表现的状态可统一在此维护
 * 注：诸如侧边栏是否折叠这种与单页具体布局相关的状态，不在此维护。
 */
import { useDark, useFullscreen, useLocalStorage, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { changeBrandCssVar } from '@/utils/theme';

export default defineStore('preference', () => {

  const darkMode = useDark({
    storageKey: 'darkMode',
  });
  const toggleDarkMode = useToggle(darkMode);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(document.body);
  const grayMode = useLocalStorage('grayMode', false, {});
  const weakMode = useLocalStorage('weakMode', false);
  const brandColor = ref<string>();

  watch([grayMode, weakMode], updateBodyFilter, { immediate: true });
  watch(brandColor, () => {
    changeBrandCssVar('primary', brandColor.value);
  });

  function updateBodyFilter() {
    const filters = [];
    if (grayMode.value) {
      filters.push('grayscale(1)');
    }
    if (weakMode.value) {
      filters.push('invert(.8)');
    }
    document.body.style.filter = filters.length ? filters.join(' ') : 'unset';

  }

  return {
    darkMode,
    toggleDarkMode,

    isFullscreen,
    toggleFullscreen,

    grayMode,

    weakMode,

    brandColor,
  };

});
