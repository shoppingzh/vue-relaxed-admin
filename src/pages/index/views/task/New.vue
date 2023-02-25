<template>
  <div class="py-4">
    <el-form ref="formIns" :model="form" :rules="rules" size="medium" label-width="120px" label-position="left">
      <el-form-item label="标题" prop="title">
        <el-input
          ref="titleInputIns"
          v-model="form.title"
          placeholder="标题" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="form.description"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="目标" prop="target">
        <el-input
          v-model="form.target"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="分类">
        <el-radio-group v-model="form.category.id">
          <el-radio
            v-for="item in categoryList"
            :key="item.id"
            :label="item.id">{{ item.name }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="重要程度">
        <el-radio-group v-model="form.important">
          <el-radio :label="-1">不重要</el-radio>
          <el-radio :label="0">重要</el-radio>
          <el-radio :label="1">非常重要</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="紧急程度">
        <el-radio-group v-model="form.urgent">
          <el-radio :label="-1">不紧急</el-radio>
          <el-radio :label="0">紧急</el-radio>
          <el-radio :label="1">非常紧急</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="权重">
        <el-slider v-model="form.weight" :max="10" />
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          v-model="form.startTime" />
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker
          v-model="form.endTime" />
      </el-form-item>
    </el-form>
    <div class="mt-6">
      <el-button
        type="primary"
        size="medium"
        @click="handleSubmit">提交</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/task'
import useCategorySelect from './useCategorySelect'
import useFastCreateUpdate from '../../hooks/useFastCreateUpdate'

interface Props {
  id: number
}

const props = defineProps<Props>()
const emit = defineEmits(['success'])

const { list: categoryList } = useCategorySelect()
const rules: any = {
  title: [{
    required: true,
    message: '请填写任务标题'
  }],
  target: [{ required: true, message: '请填写任务目标' }]
}

const {
  model: form,
  firstFocusInputIns: titleInputIns,
  elFormIns: formIns,
  submit,
} = useFastCreateUpdate({
  id: props.id,
  title: null,
  description: null,
  target: null,
  important: 0,
  urgent: 0,
  weight: 0,
  startTime: new Date(),
  endTime: null,
  category: {
    id: null
  }
}, (model) => api.createOrUpdate(model), () => api.getById(props.id))

async function handleSubmit() {
  await submit()
  emit('success')
}

</script>
