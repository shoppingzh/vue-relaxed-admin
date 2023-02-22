<template>
  <div class="p-4">

    <div class="text-right">
      <el-button
        type="primary"
        size="small"
        @click="popper.new = true">新增任务</el-button>
    </div>

    <el-table :data="list" class="mt-4">
      <el-table-column label="标题" prop="title" />
      <el-table-column label="描述" prop="description" />
      <el-table-column label="目标" prop="target" />
      <el-table-column label="权重" prop="weight" align="center" />
      <el-table-column label="开始时间" prop="startTime" />
      <el-table-column label="结束时间" prop="endTime" />
      <el-table-column label="分类" prop="category.name" />
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="{ row }">
          <el-button
            type="warning"
            size="small"
            @click="handleViewSchedule(row)">进度</el-button>
          <el-button
            type="primary"
            size="small"
            @click="update(row)">修改</el-button>
          <el-button
            type="danger"
            size="small"
            @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-drawer v-model="popper.new" title="新增任务" size="50%">
    <New
      v-if="popper.new"
      :id="updateItem ? updateItem.id : null"
      @success="handleNewSuccess" />
  </el-drawer>

  <el-drawer v-model="popper.schedule" title="进度管理" size="60%">
    <schedule v-if="popper.schedule && scheduleItem" :id="scheduleItem.id" />
  </el-drawer>
</template>

<script setup lang="ts">
import * as api from '@/api/task'
import useLoad from '@p-index/hooks/useLoad'
import { ElMessage } from 'element-plus'
import { reactive, ref, watch } from 'vue'
import New from './New.vue'
import { Task } from '@/api/types'
import Schedule from './Schedule/index.vue'

const { data: list, load } = useLoad(() => api.list())
const popper = reactive({
  new: false,
  schedule: false,
})
const updateItem = ref<Task>()
const scheduleItem = ref<Task>()

async function remove(row: Task) {
  await api.removeById(row.id)
  ElMessage.success('删除成功！')
  load()
}

function handleNewSuccess() {
  popper.new = false
  load()
}

function update(item: Task) {
  updateItem.value = item
  popper.new = true
}

function handleViewSchedule(item: Task) {
  scheduleItem.value = item
  popper.schedule = true
}

watch(() => popper.new, () => {
  if (!popper.new) {
    updateItem.value = null
  }
})

load()

</script>
