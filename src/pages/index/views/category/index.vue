<template>
  <div class="p-4">

    <div class="flex">
      <div class="flex-1"></div>
      <div>
        <el-button type="primary" @click="create">新增分类</el-button>
      </div>
    </div>

    <el-table :data="list" class="mt-4">
      <el-table-column label="主题色" align="center" width="80px">
        <template #default="{ row}">
          <span class="inline-block w-3 h-3 rounded-full bg-gray-400" :style="{ backgroundColor: row.color }" />
        </template>

      </el-table-column>
      <el-table-column label="名称" prop="name" align="center" />
      <el-table-column label="创建时间" prop="gmtCreate" align="center" :formatter="datetimeFormat" />
      <el-table-column label="最后修改时间" prop="gmtModify" align="center" :formatter="datetimeFormat" />
        <!-- <template #default="{ row }">
          {{ $dayjs(row.gmtCreate).format('YYYY-MM-DD') }}
        </template>
      </el-table-column> -->
      <el-table-column label="操作" align="center">
        <template #default="{ row }">
          <ElLink
            type="primary"
            size="small"
            @click="handleUpdate(row)">编辑</ElLink>
          <ElLink type="danger" plain @click="remove(row)">删除</ElLink>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog
    v-model="popper.create"
    :title="`${updateItem ? '修改' : '新增'}分类`"
    width="400px">
    <New
      v-if="popper.create"
      :id="updateItem ? updateItem.id : null"
      @success="handleCreateSuccess"
      @cancel="popper.create = false" />
  </el-dialog>
</template>

<script setup lang="ts">
import * as api from '@/api/category'
import { ElMessage } from 'element-plus'
import useLoad from 'magic-hooks/lib/useLoad'
import { reactive, ref, watch } from 'vue'
import New from './New.vue'
import { Category } from '@/api/types'
import dayjs from 'dayjs'

const popper = reactive({
  create: false
})
const updateItem = ref<Category>()
const { result: list, load } = useLoad(() => api.list())

async function remove(row: any) {
  await api.removeById(row.id)
  ElMessage.success('删除成功！')
  load()
}

async function create() {
  popper.create = true
}

function handleCreateSuccess() {
  popper.create = false
  load()
}

function handleUpdate(item: Category) {
  updateItem.value = item
  popper.create = true
}

function datetimeFormat(row: any, column: any, cellValue: Date) {
  return cellValue ? dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss') : '-'
}

load()

watch(() => popper.create, () => {
  if (popper.create) return
  updateItem.value = null
})
</script>
