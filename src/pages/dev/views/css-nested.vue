<template>
  <div class="parent">
    <div class="parent__child"></div>
  </div>
</template>

<style scoped>
.parent {
  @apply w-[400px] h-[200px] p-[20px] bg-blue-100;
  &__child {
    @apply w-[200px] h-[100px] bg-pink-200;
  }
}
</style>
