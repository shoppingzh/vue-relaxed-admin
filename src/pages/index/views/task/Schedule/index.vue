<template>
  <div></div>
</template>

<script setup lang="ts">
import useLoad from '@p-index/hooks/useLoad'
import * as api from '@/api/schedule'
import { Schedule } from '@/api/types'

interface Props {
  id: number | string
}
const props = defineProps<Props>()

const { data: list, loading, load } = useLoad<Schedule[], any>(() => api.list({ taskId: props.id }))

load()
</script>
