<template>
  <Render />
</template>

<!-- 第一种方法：更为简单 -->
<script setup lang="tsx">

function Render() {
  return (
    <div>hello</div>
  )
}
</script>


<!-- 第二种使用方法：传统方法 -->
<!-- <script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div>hello</div>
    )
  },
})
</script> -->
