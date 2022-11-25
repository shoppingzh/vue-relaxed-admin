<template>
  <span v-if="name" class="svg-icon inline-block">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </span>
  <span v-else v-html="inline" class="svg-icon inline-block"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string,
  inline: string,
}
const props = defineProps<Props>();
const symbolId = computed(() => `#svg-icon/${props.name}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  :deep(svg) {
    @apply w-[1em] h-[1em] fill-current;
  }
}
</style>
