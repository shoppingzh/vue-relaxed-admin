<template>
  <div class="p-4">
    <el-table :data="list">
      <el-table-column label="ID" prop="id" />
      <el-table-column label="标题" prop="title" />
      <el-table-column label="描述" prop="description" />
      <el-table-column label="目标" prop="target" />
      <el-table-column label="权重" prop="weight" />
      <el-table-column label="开始时间" prop="startTime" />
      <el-table-column label="结束时间" prop="endTime" />
      <el-table-column label="分类" prop="category.name" />
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button
            type="danger"
            size="small"
            @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/task'
import useLoad from '@p-index/hooks/useLoad'
import { ElMessage } from 'element-plus'

const { data: list, load } = useLoad(() => api.list())

async function remove(row: api.Task) {
  await api.removeById(row.id)
  ElMessage.success('删除成功！')
  load()
}

load()

</script>
