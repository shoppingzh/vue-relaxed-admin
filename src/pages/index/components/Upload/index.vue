<template>
  <ElUpload
    v-bind="attrs">
    <div class="flex items-center justify-center">
      <div class="text-secondary">
        <div><SvgIcon name="tianjia" class="text-h2" /></div>
        <div>拖动文件到此处或点击选择文件</div>
      </div>
    </div>
  </ElUpload>
</template>

<script setup lang="ts">
import { UploadProps } from 'element-plus'
import { merge } from 'lodash'
import { computed, useAttrs } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export type OnUpload = (file: File) => Promise<unknown>

export interface Props {
  onUpload: OnUpload
}

const props = defineProps<Props>()

const $attrs = useAttrs()

const attrs = computed(() => {
  return merge({
    drag: true,
    showFileList: true,
  } as Partial<UploadProps>, $attrs, props, {
    httpRequest: async(options) => {
      if (props.onUpload) {
        await props.onUpload(options.file)
      }
    }
  } as Partial<UploadProps>)
})
</script>
