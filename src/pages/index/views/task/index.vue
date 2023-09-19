<template>
  <div class="p-4">

    <div class="p-4 flex items-center bg-normal">
      <div class="flex-1 flex items-center">
        <el-input
          v-model="query.keyword"
          placeholder="关键字"
          clearable
          class="w-[300px]"
          @clear="load()"
          @keydown.enter="load()" />
        <el-radio-group v-model="query.timeRange" class="ml-2">
          <el-radio-button label="0w">本周</el-radio-button>
          <el-radio-button label="0m">本月</el-radio-button>
          <el-radio-button label="-1m">上月</el-radio-button>
          <!-- <el-radio-button label="all">所有</el-radio-button> -->
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
          @click="load()">筛选</el-button>
      </div>
      <el-button
        type="primary"
        @click="popper.new = true">新增任务</el-button>
      <el-button
        type="success"
        @click="handleExport">导出任务</el-button>
    </div>

    <el-table v-loading="loading" :data="list" class="mt-4">
      <el-table-column label="进度" width="50px" align="center">
        <template #default="{ row, $index }">
          <el-progress
            class="cursor-pointer"
            :percentage="progressList[$index]"
            :show-text="false"
            :stroke-width="4"
            :status="progressList[$index] >= 100 ? 'success' : (progressList[$index] < 50 ? 'warning' : undefined)"
            @click="handleViewSchedule(row)" />
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="category.name" align="center">
        <template #default="{ row }">
          <div class="w-full flex items-center justify-center">
            <!-- <span class="w-1 h-1 rounded-full bg-gray-400" :style="{ backgroundColor: row.category.color }" /> -->
            <div v-if="row.category" class="ml-2">{{ row.category.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title" />
      <el-table-column label="描述" prop="description" show-overflow-tooltip />
      <el-table-column label="目标" prop="target" show-overflow-tooltip />
      <el-table-column label="任务分解" prop="wbs" show-overflow-tooltip />
      <el-table-column label="优先级" align="center">
        <template #default="{ row }">
          {{ getPriority(row) }}
        </template>
      </el-table-column>
      <el-table-column label="权重" prop="weight" align="center" />
      <el-table-column label="开始时间" prop="startTime" align="center" :formatter="createDateFormatter()" />
      <el-table-column label="结束时间" prop="endTime" align="center" :formatter="createDateFormatter()" />
      <el-table-column label="操作" align="center" min-width="120px">
        <template #default="{ row }">
          <el-link
            type="success"
            @click="handleViewSchedule(row)"><SvgIcon name="jindu" class="text-h6" /></el-link>
          <el-link
            type="primary"
            @click="update(row)"><SvgIcon name="bianji" class="text-h6" /></el-link>
          <el-link
            type="danger"
            @click="remove(row)"><SvgIcon name="shanchu" class="text-h6" /></el-link>
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
import useLoad from 'magic-hooks/lib/useLoad'
import { ElMessage } from 'element-plus'
import { computed, reactive, ref, watch } from 'vue'
import New from './New.vue'
import { Task } from '@/api/types'
import Schedule from './Schedule/index.vue'
import useCategorySelect from './useCategorySelect'
import dayjs, { Dayjs } from 'dayjs'
import { createDateFormatter } from '@/utils/ui'
import { getPriority } from '@p-index/utils/task'
import SvgIcon from '@/components/SvgIcon/index.vue'

interface Query {
  keyword: string
  startTime?: string
  endTime?: string
  categoryId?: number
  timeRange?: '0w' | '0m' | '-1m' | 'custom' | 'all'
}

const today = dayjs()

const { query, result: list, loading, load } = useLoad(() => {
  return api.list({
    // eslint-disable-next-line no-use-before-define
    ...params.value
  })
}, {
  initialQuery: {
    keyword: null,
    startTime: null,
    endTime: null,
    categoryId: null,
    timeRange: '0w',
  } as Query
})
const progressList = computed<number[]>(() => {
  return list.value.map(o => {
    if (!o.scheduleList || !o.scheduleList.length) return 0
    return o.scheduleList[o.scheduleList.length - 1].percent
  })
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

watch(() => [query.startTime, query.endTime, query.timeRange, query.categoryId], () => load())

load()
</script>
