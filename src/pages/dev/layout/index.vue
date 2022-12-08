<template>
  <section class="flex h-full overflow-hidden">
    <Aside class="shadow-md z-10" />
    <main class="px-8 py-4 flex-1 w-0 h-full overflow-auto">
      <RouterView />
    </main>
  </section>
</template>

<script setup lang="ts">
import Aside from './Aside.vue';
</script>
