<template>
  <Example title="按钮">
    <el-button
      v-for="type in types"
      :key="type"
      :type="type">我是一个按钮</el-button>
  </Example>

  <Example title="链接">
    <el-link
      v-for="type in types"
      :key="type"
      :type="type"
      class="mr-2">我是一个链接</el-link>
  </Example>
</template>

<script lang="ts" setup>
const types = ['default', 'primary', 'info', 'success', 'warning', 'danger'];
</script>
