<template>
  <svg-icon v-if="icon" :name="icon" />
  <span class="ml-2">
    {{ title }}
  </span>
</template>

<script setup lang="ts">

interface Props {
  icon?: string,
  title: string,
}
defineProps<Props>();

</script>
