<template>
  <ElTable
    :data="result"
    default-expand-all
    row-key="id">
    <ElTableColumn label="名称" prop="name"></ElTableColumn>
    <ElTableColumn label="操作">
      <ElButton type="primary" plain size="small">添加</ElButton>
    </ElTableColumn>
  </ElTable>
</template>

<script setup lang="ts">
import useLoad from 'magic-hooks/lib/useLoad'
import * as api from '@/api/knowledge-category'

const { result } = useLoad(() => api.list(), {
  initialResult: [],
  autoLoad: true,
})
</script>
