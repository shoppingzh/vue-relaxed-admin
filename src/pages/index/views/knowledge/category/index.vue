<template>
  <ElTable
    :data="result"
    default-expand-all
    row-key="id">
    <ElTableColumn label="名称" prop="name"></ElTableColumn>
    <ElTableColumn label="操作" width="220">
      <template #header>
        操作
        <ElLink type="primary" class="ml-2" @click="handleAdd(null)">添加根节点</ElLink>
      </template>
      <template #default="{ row }">
        <ElLink type="primary" @click="handleAdd(row)">添加</ElLink>
        <ElLink type="primary" @click="handleEdit(row)">编辑</ElLink>
        <ElLink type="danger" @click="handleRemove(row)">删除</ElLink>
      </template>
    </ElTableColumn>
  </ElTable>

  <ElDialog
    v-model="popper.add"
    title="添加分类"
    width="500">
    <Add
      v-if="popper.add"
      :parent="addParent"
      :id="editItem ? editItem.id : null"
      @success="handleAddSuccess"
      @cancel="popper.add = false" />
  </ElDialog>
</template>

<script setup lang="ts">
import useLoad from 'magic-hooks/lib/useLoad'
import * as api from '@/api/knowledge/category'
import Add from './Add.vue'
import { reactive, ref } from 'vue'
import { KnowledgeCategory } from '@/api/types'
import { ElMessageBox } from 'element-plus'

const { result, load } = useLoad(async() => {
  const list = await api.list()

  function iterate(data: KnowledgeCategory[], parent?: KnowledgeCategory) {
    if (!data || !data.length) return
    data.forEach(item => {
      item.parent = parent
      iterate(item.children, item)
    })
  }

  iterate(list)

  return list
}, {
  initialResult: [],
  autoLoad: true,
})
const popper = reactive({
  add: false,
})
const addParent = ref<KnowledgeCategory>()
const editItem = ref<KnowledgeCategory>()

function handleAdd(parent?: KnowledgeCategory) {
  addParent.value = parent
  popper.add = true
}

function handleEdit(item: KnowledgeCategory) {
  addParent.value = item.parent
  editItem.value = item
  popper.add = true
}

function handleAddSuccess() {
  load()
  popper.add = false
}

async function handleRemove(item: KnowledgeCategory) {
  await ElMessageBox.confirm('删除后不可恢复，继续？', '删除分类', {
    type: 'error'
  })
  await api.removeById(item.id)
  load()
}
</script>
