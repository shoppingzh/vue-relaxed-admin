<template>
  <div class="py-4">
    <ElForm ref="elFormIns" :model="model" :rules="rules" label-width="100" label-position="left">
      <ElFormItem label="类型">
        <ElRadioGroup v-model="model.type">
          <ElRadio :label="2">标准</ElRadio>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="标题" prop="title">
        <ElInput ref="firstFocusInputIns" v-model="model.title" />
      </ElFormItem>
      <ElFormItem label="编号">
        <ElInput v-model="model.no" />
      </ElFormItem>
      <ElFormItem label="发行时间">
        <ElDatePicker v-model="model.time" value-format="YYYY-MM-DD" class="w-full" />
      </ElFormItem>
      <ElFormItem label="分类" prop="category.id">
        <ElCascader v-model="model.category.id" :props="{ emitPath: false, label: 'name', value: 'id' }" :options="categoryList" />
      </ElFormItem>
      <ElFormItem label="内容" prop="file.id">
        <Upload class="w-full" :on-upload="onUpload" />
      </ElFormItem>
    </ElForm>
    <div class="mt-8">
      <ElButton type="primary" class="px-10" @click="handleSubmit">提交</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import useFastCreateUpdate from '@/pages/index/hooks/useFastCreateUpdate'
import { KnowledgeDocument } from '@/api/types'
import useLoad from 'magic-hooks/lib/useLoad'
import * as api from '@/api/knowledge/document'
import * as catApi from '@/api/knowledge/category'
import * as fileApi from '@/api/file'
import Upload from '@p-index/components/Upload/index.vue'
import { ElMessageBox, FormRules } from 'element-plus'
import { computed } from 'vue'

const props = defineProps<{
  id?: any
}>()
const emit = defineEmits(['success'])

const { elFormIns, firstFocusInputIns, loading, model, submit, load } = useFastCreateUpdate({
  type: 2,
  file: {
    id: null,
  },
  category: {
    id: null,
  },
} as KnowledgeDocument, async(model) => {
  await api.addOrUpdate(model)
})
const { result: categoryList, } = useLoad(() => catApi.list(), {
  autoLoad: true,
  initialResult: [],
})

const rules = computed(() => ({
  title: { required: true, message: '请输入标题' },
  'category.id': { required: true, message: '请选择分类' },
  'file.id': { required: true, message: '请上传文件' },
} as FormRules))

async function onUpload(file: File) {
  const f = await fileApi.upload(file)
  model.file.id = f.id
}

async function handleSubmit() {
  await ElMessageBox.confirm('确定提交？', '提示', {
    type: 'info',
  })
  await submit()
  emit('success')
}

</script>
