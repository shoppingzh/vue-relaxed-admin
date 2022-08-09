<template>
  <div class="text-b-link hover:cursor-pointer text-lg" @click="toDev">
    去开发页
  </div>
</template>

<script setup lang="ts">
const toDev = () => {
  location.href = 'dev.html'
}
</script>
