<template>
  <div id="main" class="w-full h-full overflow-auto">
    <Transition name="fade">
      <RouterView />
    </Transition>
    <el-backtop target="#main" />
  </div>
</template>

<style scoped>
.fade {
  &-enter-from, &-leave-to {
    @apply translate-x-[-30px] opacity-0;
  }
  &-enter-active, &-leave-active {
    @apply transition-all duration-500;
  }
}
</style>
