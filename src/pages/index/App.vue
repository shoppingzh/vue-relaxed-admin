<template>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const prefs = usePrefs();
prefs.darkMode = false;
</script>
