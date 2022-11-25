<template>
  <section class="layout flex h-full">
    <aside class="layot__aside h-full">
      <Menu class="layout__menu" />
    </aside>
    <main class="layout__main h-full flex-1 w-0">
      <Header class="layout__header" />
      <RouterView />
    </main>
  </section>
</template>

<script setup>
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
</script>

<style lang="scss" scoped>
</style>
