<template>
  <Example title="按钮">
    <div>
      <el-button
        v-for="type in types"
        :key="type"
        :type="type">我是一个按钮</el-button>
    </div>
    <div class="mt-2">
      <el-button
        v-for="type in types"
        :key="type"
        :type="type"
        disabled>我是一个按钮</el-button>
    </div>
  </Example>

  <Example title="链接">
    <el-link
      v-for="type in types"
      :key="type"
      :type="type"
      class="mr-2">我是一个链接</el-link>
  </Example>

  <Example title="文字颜色">
    <el-input v-model="val" placeholder="请输入内容" class="w-[200px]" />
  </Example>

  <Example title="圆角">
    <el-select />
    <el-time-picker class="ml-2" />
    <!-- <el-switch class="ml-2" /> -->
    <el-tag class="ml-2">hello</el-tag>

    <div class="mt-2">
      <el-alert :closable="false">hello</el-alert>
    </div>
    

  </Example>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const types = ['default', 'primary', 'info', 'success', 'warning', 'danger'];
const val = ref('');
</script>
