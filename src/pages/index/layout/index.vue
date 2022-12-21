<template>
  <section class="h-full flex overflow-hidden">
    <Aside class="h-full" />
    <section class="flex flex-col flex-1 w-0">
      <Header class="shadow-lg" />
      <Main class="flex-1 h-0 w-full bg-gray-200" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
</script>
