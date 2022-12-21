<template>
  <section class="h-full flex">
    <Aside class="h-full" />
    <section class="flex flex-col flex-1 w-0">
      <Header />
      <Main class="flex-1 h-0 w-full bg-gray-100" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
</script>
