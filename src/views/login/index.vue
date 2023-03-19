<template>

  <div class="h-full flex">

    <!-- 左侧 -->
    <div
      class="brand-wrap hidden md:block w-[540px] bg-gray-200">
      <!--  -->
    </div>

    <!-- 右侧 -->
    <div class="flex-1 w-0 flex items-center">
      <div class="w-[450px] mx-auto relative -top-20 p-8 bg-normal">
        <div class="text-h5 font-semibold">登录{{ appName }}</div>
        <div class="mt-6">
          <el-form size="large" label-position="top" label-width="120px" label-suffix="：">
            <el-form-item label="用户名">
              <el-input />
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                type="password" />
            </el-form-item>
          </el-form>
          <div class="mt-8">
            <el-button
              type="primary"
              size="large"
              round
              class="!px-20">登录</el-button>
            <el-button
              size="large"
              plain
              round
              class="!px-10">注册</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import useApp from '@/store/app'
import { storeToRefs } from 'pinia'

const { name: appName } = storeToRefs(useApp())
</script>

<style scoped>
.el-input {
  --el-input-border-radius: theme('borderRadius.sm');
  --el-input-bg-color: theme('colors.gray.200');
  --el-input-border-color: theme('colors.gray.200');
}
.brand-wrap {
  background-image: url('./brand.png');
  @apply bg-cover bg-no-repeat bg-center;
}
</style>
