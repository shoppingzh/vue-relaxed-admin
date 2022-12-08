/**
 * 界面公共表现的状态可统一在此维护
 */
import { useDark, useFullscreen, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';

export default defineStore('app', () => {

  const darkMode = useDark();
  const toggleDarkMode = useToggle(darkMode);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(document.body);

  return {
    darkMode,
    toggleDarkMode,

    isFullscreen,
    toggleFullscreen,
  };

});
