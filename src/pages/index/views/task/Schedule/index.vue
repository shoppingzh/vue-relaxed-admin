<template>
  <div class="px-0 py-4">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in list"
        :key="item.id"
        :timestamp="item.gmtCreate"
        placement="bottom"
        center
        type="primary"
        hollow>
        <el-card>
          <div class="flex items-center">
            <div class="flex-1">
              {{ item.description }}
              <div class="mt-2">
                <el-progress :percentage="item.percent" :stroke-width="3" />
              </div>
            </div>
            <el-divider direction="vertical" class="mx-4" />
            <div>
              <el-button
                type="primary"
                circle
                plain
                @click="handleUpdate(item, index)"><el-icon><EditPen /></el-icon></el-button>
              <el-button
                type="danger"
                circle
                plain
                @click="remove(item, index)"><el-icon><Delete /></el-icon></el-button>
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <div class="mt-4 text-center">
      <el-button
        type="primary"
        size="large"
        circle
        class="!p-6"
        @click="add"><el-icon class="text-h4"><Plus /></el-icon></el-button>
    </div>
  </div>

  <el-dialog
    v-model="popper.new"
    width="500px"
    :title="updateItem ? '修改进度' : '新进度'">
    <New
      v-if="popper.new"
      :task-id="id"
      :id="updateItem ? updateItem.id : null"
      @success="handleNewSuccess" />
  </el-dialog>
</template>

<script setup lang="ts">
import useLoad from '@p-index/hooks/useLoad'
import * as api from '@/api/schedule'
import { Schedule } from '@/api/types'
import { reactive, ref, watch } from 'vue'
import New from './New.vue'

interface Props {
  id: number
}
const props = defineProps<Props>()
const popper = reactive({
  new: false,
})
const { data: list, loading, load } = useLoad<Schedule[], any>(() => api.list({ taskId: props.id }))
const updateItem = ref<Schedule>()

async function add() {
  // await api.create({
  //   task: {
  //     id: props.id as number
  //   },
  //   percent: 0,
  //   description: '新进度',
  //   time: new Date()
  // })
  // load()

  popper.new = true
}

async function remove(item: Schedule, index: number) {
  await api.remove(item.id)
  list.value.splice(index, 1)
}

function handleNewSuccess() {
  load()
  popper.new = false
}

function handleUpdate(item: Schedule, index?: number) {
  updateItem.value = item
  popper.new = true
}

watch(() => popper.new, () => {
  if (!popper.new) {
    updateItem.value = null
  }
})

load()
</script>
