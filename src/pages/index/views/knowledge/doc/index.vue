
<template>
  <div class="p-4 bg-white shadow-md rounded-md">
    <ElTable :data="list" max-height="600">
      <ElTableColumn label="标题" prop="title" show-overflow-tooltip></ElTableColumn>
      <ElTableColumn label="编号" prop="no"></ElTableColumn>
      <ElTableColumn label="分类" prop="category.name"></ElTableColumn>
      <ElTableColumn label="操作">
        <!-- <template #default="{ row }">
          <ElLink type="primary"><SvgIcon name="bianji" /></ElLink>
          <ElLink type="danger"><SvgIcon name="shanchu" /></ElLink>
        </template> -->
      </ElTableColumn>
    </ElTable>

    <div class="mt-4">
      <ElPagination v-model:current-page="pageQuery.page" v-model:page-size="pageQuery.pageSize" :total="total" background />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as api from '@/api/knowledge/document'
import useLoadPage from '@/hooks/useLoadPage'
import SvgIcon from '@/components/SvgIcon/index.vue'

const { list, pageQuery, total, query, } = useLoadPage({
  query: {
    a: 1,
  },
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
@/hooks/useLoadPage
