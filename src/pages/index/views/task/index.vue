<template>
  <div class="p-4">

    <div class="p-4 flex items-center bg-normal">
      <div class="flex-1 flex items-center">
        <el-input
          v-model="query.keyword"
          placeholder="关键字"
          clearable
          class="w-[300px]"
          @clear="load"
          @keydown.enter="load" />
        <el-radio-group v-model="query.timeRange" class="ml-2">
          <el-radio-button label="0w">本周</el-radio-button>
          <el-radio-button label="0m">本月</el-radio-button>
          <el-radio-button label="-1m">上月</el-radio-button>
          <el-radio-button label="all">所有</el-radio-button>
        </el-radio-group>
        <el-select v-model="query.categoryId" class="ml-2" clearable placeholder="请选择分类">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :value="item.id"
            :label="item.name" />
        </el-select>
        <el-button
          class="ml-2"
          type="primary"
          @click="load">筛选</el-button>
      </div>
      <el-button
        type="primary"
        @click="popper.new = true">新增任务</el-button>
      <el-button
        type="success"
        @click="handleExport">导出任务</el-button>
    </div>

    <el-table v-loading="loading" :data="list" class="mt-4">
      <el-table-column label="分类" prop="category.name" align="center" />
      <el-table-column label="标题" prop="title" header-align="center" />
      <el-table-column label="描述" prop="description" show-overflow-tooltip />
      <el-table-column label="目标" prop="target" show-overflow-tooltip />
      <el-table-column label="权重" prop="weight" align="center" />
      <el-table-column label="开始时间" prop="startTime" align="center">
        <template #default="{ row }">
          {{ $dayjs(row.startTime).format('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column label="结束时间" prop="endTime" align="center">
        <template #default="{ row }">
          {{ $dayjs(row.endTime).format('YYYY-MM-DD') }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="{ row }">
          <el-button
            type="warning"
            size="small"
            plain
            @click="handleViewSchedule(row)"><el-icon><Clock /></el-icon></el-button>
          <el-button
            type="primary"
            size="small"
            plain
            @click="update(row)"><el-icon><Edit /></el-icon></el-button>
          <el-button
            type="danger"
            size="small"
            plain
            @click="remove(row)"><el-icon><Delete /></el-icon></el-button>
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
import { computed, reactive, ref, watch } from 'vue'
import New from './New.vue'
import { Task } from '@/api/types'
import Schedule from './Schedule/index.vue'
import useCategorySelect from './useCategorySelect'
import dayjs, { Dayjs } from 'dayjs'

interface Query {
  keyword: string
  startTime?: string
  endTime?: string
  categoryId?: number
  timeRange?: '0w' | '0m' | '-1m' | 'custom' | 'all'
}

const today = dayjs()

const { query, data: list, loading, load } = useLoad<Task[], Query>(() => {
  return api.list({
    // eslint-disable-next-line no-use-before-define
    ...params.value
  })
}, {
  keyword: null,
  startTime: null,
  endTime: null,
  categoryId: null,
  timeRange: '0w',
})
const params = computed(() => {
  const params: Query = {
    ...query
  }
  if (query.timeRange !== 'custom') {
    let start: Dayjs, end: Dayjs
    if (query.timeRange === '0w') {
      start = today.startOf('week')
      end = today.endOf('week')
    } else if (query.timeRange === '0m') {
      start = today.startOf('month')
      end = today.endOf('month')
    } else if (query.timeRange === '-1m') {
      const lastMonthDay = today.subtract(1, 'month')
      start = lastMonthDay.startOf('month')
      end = lastMonthDay.endOf('month')
    }
    if (start && end) {
      params.startTime = start.format('YYYY-MM-DD')
      params.endTime = end.format('YYYY-MM-DD')
    }
  }
  return params
})

const popper = reactive({
  new: false,
  schedule: false,
})
const updateItem = ref<Task>()
const scheduleItem = ref<Task>()
const { list: categoryList } = useCategorySelect()

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

function joinQuery(query: Record<string, any>) {
  return Object.keys(query).filter(name => query[name] != null).map(name => `${name}=${query[name]}`).join('&')
}

function handleExport() {
  window.open(`/api/task/export?${joinQuery(params.value)}`)
}

watch(() => popper.new, () => {
  if (!popper.new) {
    updateItem.value = null
  }
})

watch(() => [query.startTime, query.endTime, query.timeRange, query.categoryId], load)

load()
</script>
