<template>
  <span class="svg-icon inline-block">
    <svg aria-hidden="true" class="w-[1em] h-[1em] fill-current">
      <use :xlink:href="symbolId" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
}
const props = defineProps<Props>()
const symbolId = computed(() => `#svg-icon/${props.name}`)
</script>
