<template>
  <el-form label-position="top" label-suffix="：">
    <el-form-item label="侧边栏切换按钮位置">
      <el-radio-group v-model="menuCollapseTogglePlace">
        <el-radio label="aside">侧边</el-radio>
        <el-radio label="header">顶部</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

const { menuCollapseTogglePlace } = storeToRefs(useLayout());
</script>
