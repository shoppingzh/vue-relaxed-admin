import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('layout', () => {

  const isMenuCollapse = ref(false);

  return {
    isMenuCollapse,
  };

});
