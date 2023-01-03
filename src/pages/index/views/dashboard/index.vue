<template>
  <div class="p-4">
    <div class="flex">
      <div
        v-for="x in 4"
        :key="x"
        :class="{ 'ml-2': x > 1 }"
        class="relative flex items-center flex-1 bg-normal p-2 rounded-sm">
        <div class="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-gray-200">
          <svg-icon name="github" class="text-[32px]" />
        </div>
        <div class="ml-6">
          <div class="text-h3">480</div>
          <div class="">所有阅读数</div>
        </div>
        <div class="absolute right-4 top-4 cursor-pointer">
          <svg-icon name="gengduo" class="text-h6" />
        </div>
      </div>
    </div>

    <div class="flex mt-3">
      <div class="flex-1">
        <div class="p-3 bg-normal rounded-sm">
          <div class="text-h6 font-semibold">最近访问情况</div>
          <Access />
        </div>
      </div>
      <div class="w-[300px]"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Access from './Access.vue';
</script>
