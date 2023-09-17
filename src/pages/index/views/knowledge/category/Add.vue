<template>
  <ElForm ref="elFormIns" :model="model" :rules="rules" @submit.prevent>
    <ElFormItem label="名称" prop="name">
      <ElInput
        ref="firstFocusInputIns"
        v-model="model.name"
        placeholder="回车键保存"
        @keydown.enter="handleSubmit" />
    </ElFormItem>
  </ElForm>

  <div class="mt-6">
    <ElButton
      type="primary"
      @click="handleSubmit">确定</ElButton>
    <ElButton
      @click="emit('cancel')">关闭</ElButton>
  </div>
</template>

<script setup lang="ts">
import useFastCreateUpdate from '@/pages/index/hooks/useFastCreateUpdate'
import * as api from '@/api/knowledge-category'
import { KnowledgeCategory } from '@/api/types'
import { computed } from 'vue'
import { FormRules } from 'element-plus'

const props = defineProps<{
  parent: KnowledgeCategory
  item?: KnowledgeCategory
}>()
const emit = defineEmits(['success', 'cancel'])

const { model, elFormIns, firstFocusInputIns, submit, } = useFastCreateUpdate({
  parent: {
    id: props.parent ? props.parent.id : null,
  }
} as KnowledgeCategory, (model) => api.addOrUpdate(model))
const rules = computed(() => ({
  name: { required: true, message: '请输入名称' }
} as FormRules))

async function handleSubmit() {
  await submit()
  emit('success')
}
</script>
