<template>
  <div class="w-full text-h6 truncate">
    <slot>
      <slot name="icon">
        <svg-icon v-if="icon" :name="icon" />
      </slot>
      <span v-if="!isAsideCollapse" class="ml-2">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

interface Props {
  icon?: string,
  title: string,
}
defineProps<Props>();

const layout = useLayout();
const { isAsideCollapse } = storeToRefs(layout);
</script>
