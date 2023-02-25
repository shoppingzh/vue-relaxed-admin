<template>
  <el-form ref="elFormIns" :model="model" :rules="rules" @submit.stop>
    <el-form-item label="名称" prop="name">
      <el-input ref="nameInputIns" v-model="model.name" @keydown.enter="handleSumit" />
    </el-form-item>
  </el-form>

  <div class="mt-8">
    <el-button
      type="primary"
      :loading="loading"
      @click="handleSumit">提交</el-button>
    <el-button @click="emit('cancel')">关闭</el-button>
  </div>
</template>

<script setup lang="ts">
import { Category } from '@/api/types'
import useFastCreateUpdate from '@p-index/hooks/useFastCreateUpdate'
import * as api from '@/api/category'

interface Props {
  id?: number
}
const props = defineProps<Props>()
const emit = defineEmits(['success', 'cancel'])
const {
  model,
  loading,
  elFormIns,
  firstFocusInputIns: nameInputIns,
  submit
} = useFastCreateUpdate<Category>({
  id: props.id,
  name: ''
}, (model) => api.createOrUpdate(model), () => api.getById(props.id))
const rules = {
  name: [{ required: true, message: '请输入分类名' }]
}

async function handleSumit() {
  await submit()
  emit('success')
}

</script>
