
<template>
  <div class="p-4 bg-white dark:bg-gray-100 shadow-md rounded-md">
    <div class="flex items-center">
      <div class="flex-1 shrink-0">
        <ElForm inline @submit.prevent>
          <ElFormItem>
            <ElInput v-model="query.title" placeholder="标题" clearable class="w-[400px]" @keydown.enter="reload()" @clear="reload()" />
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary" :loading="loading" @click="reload()"><SvgIcon name="sousuo2" class="mr-1" /> 搜索</ElButton>
          </ElFormItem>
        </ElForm>
      </div>
      <ElButton type="primary" @click="handleAddOrUpdate()"><SvgIcon name="tianjia" class="mr-1" /> 新增知识</ElButton>
    </div>
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

  <ElDrawer v-model="popper.add" size="70%">
    <Add v-if="popper.add" @success="handleAddOrUpdateSuccess" />
  </ElDrawer>
</template>

<script setup lang="ts">
import * as api from '@/api/knowledge/document'
import useLoadPage from '@/hooks/useLoadPage'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { reactive } from 'vue'
import Add from './Add/index.vue'

interface Query {
  title?: string
}

const { list, pageQuery, total, query, reload, loading, } = useLoadPage({
  query: {
    title: '',
  } as Query,
  onLoad: (q: any) => api.list(q),
  // autoLoad: true,
  pageProps: {
    // total: 'total',
    // list: listKey,
    list: 'data',
  }
  // pageProps: {
  //   total: 'total',
  //   list: 'data',
  // }
})


const popper = reactive({
  add: false,
})

async function handleAddOrUpdate() {
  popper.add = true
}

function handleAddOrUpdateSuccess() {
  reload()
  popper.add = false
}

</script>
