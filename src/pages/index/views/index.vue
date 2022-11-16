<template>
  <div>
    {{ appName }}
  </div>
  <div class="text-b-link hover:cursor-pointer text-lg" @click="toDev">
    去开发页
  </div>
  <div class="mt-4">
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import * as userApi from '@/api/user'
import { ref } from 'vue'
import useApp from '@/store/app'
import { storeToRefs } from 'pinia'

const { name: appName } = storeToRefs(useApp())

const result = ref(null)
const toDev = () => {
  location.href = 'dev.html'
}
const load = async() => {
  const response = await userApi.list()
  result.value = response
}

load()
</script>
