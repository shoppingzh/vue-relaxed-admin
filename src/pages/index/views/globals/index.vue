<template>
  <div class="p-4">
    <div class="p-4 bg-normal">
      <el-form :model="model">
        <el-form-item label="平台拥有者" prop="owner">
          <el-input
            v-model="model.owner"
            class="w-[300px]" />
        </el-form-item>
      </el-form>
      <div class="mt-8">
        <el-button
          type="primary"
          :loading="loading"
          @click="submit">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useFastCreateUpdate from '../../hooks/useFastCreateUpdate'
import { Globals } from '@/api/types'
import * as api from '@/api/globals'
import useSession from '@p-index/store/session'

const session = useSession()

const { model, loading, load, submit } = useFastCreateUpdate({
  owner: null
}, async(model: Globals) => {
  await api.update(model)
  session.initGlobals()
}, () => api.get(), {
  successMessage: '保存成功！'
})

load()

</script>
