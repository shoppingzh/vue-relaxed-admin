<template>
  <div class="p-4">

    <div class="flex">
      <div class="flex-1"></div>
      <div>
        <el-button size="small" type="primary" @click="create">新增分类</el-button>
      </div>
    </div>

    <el-table :data="list" class="mt-4">
      <el-table-column label="ID" prop="id" align="center"></el-table-column>
      <el-table-column label="名称" prop="name" align="center"></el-table-column>
      <el-table-column label="创建时间" prop="gmtCreate" align="center"></el-table-column>
      <el-table-column label="最后修改时间" prop="gmtModify" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <el-button size="small" type="danger" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/category'
import { ElMessage, ElMessageBox } from 'element-plus'
import useLoad from '@p-index/hooks/useLoad'

const { data: list, load } = useLoad(() => api.list())

async function remove(row: any) {
  await api.removeById(row.id)
  ElMessage.success('删除成功！')
  load()
}

async function create() {
  try {
    const { value: name } = await ElMessageBox.prompt('分类名称', '添加分类', {})
    await api.create({ name })
    load()
  } catch {
    return
  }
}


load()
</script>
