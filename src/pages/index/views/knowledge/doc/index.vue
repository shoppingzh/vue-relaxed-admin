
<template>
  <ElTable :data="list">
    <ElTableColumn label="标题" prop="title"></ElTableColumn>
    <ElTableColumn label="内容" prop="content"></ElTableColumn>

  </ElTable>
</template>

<script setup lang="ts">
import * as api from '@/api/knowledge/document'
import useLoadList from '@/hooks/useLoadList'

const { list } = useLoadList({
  onLoad: (query) => api.list({
    page: query.page,
    pageSize: query.pageSize,
  }),
  autoLoad: true,
  pageProps: {
    total: 'total',
    list: 'data',
  }
})

</script>
