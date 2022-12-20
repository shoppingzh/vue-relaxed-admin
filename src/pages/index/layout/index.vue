<template>
  <section class="h-full flex flex-col">
    <Header />
    <section class="flex flex-1 h-0">
      <Aside class="h-full" />
      <Main class="flex-1 w-0 h-full bg-gray-100" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
</script>
