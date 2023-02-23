<template>
  <el-form :model="form">
    <el-form-item label="描述" prop="description">
      <el-input ref="inputIns" v-model="form.description" type="textarea" :rows="6" />
    </el-form-item>
    <el-form-item label="进度" prop="percent">
      <el-input-number v-model="form.percent" />
    </el-form-item>
    <el-form-item label="完成时间" prop="time">
      <el-date-picker v-model="form.time" />
    </el-form-item>
  </el-form>

  <div class="mt-4">
    <el-button
      type="primary"
      @click="submit">提交</el-button>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/schedule'
import { Schedule } from '@/api/types'
import { merge } from 'lodash'
import { onMounted, reactive, ref } from 'vue'
import useAutoFocus from '@/hooks/useAutoFocus'

interface Props {
  taskId: number
  id?: number
}
const props = defineProps<Props>()
const emit = defineEmits(['success'])

const form = reactive<Schedule>({
  percent: 0,
  description: '',
  time: new Date(),
  task: {
    id: props.taskId
  }
})
const { input: inputIns } = useAutoFocus()

async function submit() {
  await api.createOrUpdate(form)
  emit('success')
}

async function load() {
  const data = await api.getById(props.id)
  merge(form, data)
}

props.id && load()

</script>
