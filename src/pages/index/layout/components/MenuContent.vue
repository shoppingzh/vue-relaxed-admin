<template>
  <div class="truncate">
    <slot>
        <slot name="icon">
      </slot>
      <slot name="title">
        {{  title  }}
      </slot>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon?: string,
  title: string,
}
defineProps<Props>();
</script>
