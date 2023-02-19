<template>
  <section class="h-full flex flex-col">
    <Header class="z-10 border-b border-gray-300" />
    <section class="flex-1 flex h-0 overflow-hidden">
      <Aside class="shadow-md z-[5]" />
      <main id="main" class="px-8 py-4 flex-1 w-0 h-full overflow-auto">
        <RouterView />
        <el-backtop target="#main" />
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import Aside from './Aside.vue'
import Header from './Header.vue'
</script>
