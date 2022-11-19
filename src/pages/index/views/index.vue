<template>
  <div>
    {{ appName }}
  </div>
  <el-button type="primary" @click="load">查询</el-button>
  <!-- <div class="text-b-link hover:cursor-pointer text-lg" @click="toDev">
    去开发页
  </div> -->
  <div class="w-[400px]">
    <el-table :data="result" size="small" border>
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="年龄" prop="age" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import * as userApi from '@/api/user'
import { ref } from 'vue'
import useApp from '@/store/app'
import { storeToRefs } from 'pinia'

const { name: appName } = storeToRefs(useApp())

const result = ref(null)
const toDev = () => {
  location.href = 'dev.html'
}
const load = async() => {
  try {
    const response = await userApi.list()
    result.value = response
  } catch (err) {
    console.log('查询失败')
  }
}

</script>
