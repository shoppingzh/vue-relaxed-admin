<template>
  <el-table
    :data="list">
    <el-table-column label="姓名" prop="name" />
    <el-table-column label="年龄" prop="age" />
  </el-table>
</template>

<script setup>
import * as api from '@/api/user';
import { ref } from 'vue';
const list = ref([]);

async function load() {
  list.value = await api.list();
}

load();

</script>
