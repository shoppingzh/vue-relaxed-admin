/**
 * 界面公共表现的状态可统一在此维护
 */
import { useDark, useFullscreen, useLocalStorage, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { watch } from 'vue';

export default defineStore('preference', () => {

  const darkMode = useDark();
  const toggleDarkMode = useToggle(darkMode);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(document.body);
  const grayMode = useLocalStorage('grayMode', false, {});

  watch(grayMode, () => {
    document.body.style.filter = grayMode.value ? `grayscale(1)` : 'unset';
  }, { immediate: true });

  return {
    darkMode,
    toggleDarkMode,

    isFullscreen,
    toggleFullscreen,

    grayMode,
  };

});
