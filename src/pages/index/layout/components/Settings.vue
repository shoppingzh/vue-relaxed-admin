<template>
  <el-form label-position="top" label-suffix="：">
    <el-form-item label="侧边栏切换按钮位置">
      <el-radio-group v-model="menuCollapseTogglePlace">
        <el-radio label="aside">侧边</el-radio>
        <el-radio label="header">顶部</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="灰色模式">
      <el-switch v-model="grayMode" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import useLayout from '@p-index/store/layout';
import { storeToRefs } from 'pinia';

const { menuCollapseTogglePlace } = storeToRefs(useLayout());
const { grayMode } = storeToRefs(usePrefs());
</script>
