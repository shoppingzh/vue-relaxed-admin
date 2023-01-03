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

    <div class="md:flex mt-3">
      <div class="md:flex-1 md:w-0">
        <div class="p-3 bg-normal rounded-sm">
          <div class="text-h6 font-semibold">访问情况趋势</div>
          <Access />
        </div>

        <div class="mt-4 p-3 rounded-sm overflow-hidden bg-normal">
          <div class="text-h6 font-semibold">访问情况详情</div>
          <Users class="mt-2" />
        </div>
      </div>
      <div class="mt-2 md:mt-0 md:ml-3 md:w-[350px]">
        <div v-for="x in 2" :key="x" class="mb-2 p-3 bg-normal rounded-sm">
          <div class="mb-2 flex">
            <div class="flex-1 w-0">最近阅读变现</div>
            <el-select size="small" class="w-[70px]">
              <el-option v-for="year in ['2021', '2022', '2023']" :key="year" :value="year" :label="year"></el-option>
            </el-select>
          </div>
          <div class="text-h5 font-semibold">¥9,999.66</div>
          <div class="mt-1 text-green-500 text-xs">
            <svg-icon name="shang" class="text-md" /> 环比上升3.2%
          </div>
        </div>

        <div class="mt-4 p-3 bg-normal rounded-sm">
          <div class="mb-3">热门文章</div>
          <Hot />
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import Access from './Access.vue';
import Users from './Users.vue';
import Hot from './Hot.vue';
</script>
