<template>
  <div class="p-4">
    <el-table :data="list">
      <el-table-column label="名称" prop="name"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/category';
import { ref } from 'vue';

const list = ref<any[]>([]);

async function load() {
  list.value = await api.list();
}

load();
</script>