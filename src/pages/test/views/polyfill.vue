<template>
  <div class="flex flex-col">
    <h3>按照以下方式验证低版本兼容性：</h3>
    <ol>
      <li>pnpm build</li>
      <li>在低版本Chrome下打开此页</li>
      <li>观察控制台是否报错</li>
      <li>选中此页根元素，观察CSS样式是否自动带上前缀</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
console.log([1, 2, 3].findLast(o => o < 3))

</script>
