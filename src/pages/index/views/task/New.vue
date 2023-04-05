<template>
  <div class="py-4">
    <el-form ref="formIns" :model="model" :rules="rules" size="medium" label-width="120px" label-position="left">
      <el-form-item label="标题" prop="title">
        <el-input
          ref="titleInputIns"
          v-model="model.title"
          placeholder="标题" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="model.description"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="目标" prop="target">
        <el-input
          v-model="model.target"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="任务分解" prop="wbs">
        <el-input
          v-model="model.wbs"
          type="textarea" />
      </el-form-item>
      <el-form-item label="参与人" props="participants">
        <el-select
          v-model="participantNames"
          allow-create
          filterable
          multiple
          placeholder="输入按回车添加"
          tag-type="success"
          class="w-full" />
      </el-form-item>
      <el-form-item label="分类" prop="category.id">
        <el-radio-group v-model="model.category.id">
          <el-radio
            v-for="item in categoryList"
            :key="item.id"
            :label="item.id">{{ item.name }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="重要程度">
        <el-radio-group v-model="model.important">
          <el-radio :label="-1">不重要</el-radio>
          <el-radio :label="0">重要</el-radio>
          <el-radio :label="1">非常重要</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="紧急程度">
        <el-radio-group v-model="model.urgent">
          <el-radio :label="-1">不紧急</el-radio>
          <el-radio :label="0">紧急</el-radio>
          <el-radio :label="1">非常紧急</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="权重">
        <el-slider v-model="model.weight" :min="1" :max="10" />
      </el-form-item>
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker
          v-model="model.startTime"
          value-format="YYYY-MM-DD" />
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker
          v-model="model.endTime"
          value-format="YYYY-MM-DD" />
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
import dayjs from 'dayjs'
import { computed } from 'vue'
import useSession from '@p-index/store/session'
import { storeToRefs } from 'pinia'
import { FormRules } from 'element-plus'

interface Props {
  id: number
}

const props = defineProps<Props>()
const emit = defineEmits(['success'])
const { globals } = storeToRefs(useSession())

const { list: categoryList } = useCategorySelect()
const rules: FormRules = {
  title: [{
    required: true,
    message: '请填写任务标题'
  }],
  'category.id': [{ required: true, message: '请选择分类' }],
  target: [{ required: true, message: '请填写任务目标' }],
  startTime: [{ required: true, message: '请选择开始时间' }],
  endTime: [{ required: true, message: '请选择结束时间' }],
}

const {
  model,
  firstFocusInputIns: titleInputIns,
  elFormIns: formIns,
  submit,
} = useFastCreateUpdate({
  id: props.id,
  title: null,
  description: null,
  wbs: null,
  participants: globals.value && globals.value.owner ? [{ name: globals.value.owner }] : [], // FIXME
  target: null,
  important: 0,
  urgent: 0,
  weight: 0,
  startTime: dayjs().format('YYYY-MM-DD'),
  endTime: dayjs().format('YYYY-MM-DD'),
  category: {
    id: null
  }
}, (model) => api.createOrUpdate(model), async() => {
  const data = await api.getById(props.id)
  if (!data.category) {
    data.category = { id: null }
  }
  return data
})

const participantNames = computed({
  set(newVal: string[]) {
    model.participants = newVal.map((name, index) => {
      const exist = model.participants[index]
      if (exist) {
        exist.name = name
      }
      return exist || { name }
    })
  },
  get() {
    return model.participants.map(o => o.name)
  }
})

async function handleSubmit() {
  await submit()
  emit('success')
}

</script>
