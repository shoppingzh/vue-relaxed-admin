<template>
  <Example title="文本">
    我是一段默认文本，我的文字大小是 <Copy text="text-base" />，颜色是 <Copy text="text-primary" />
  </Example>

  <Example title="标题">
    <h1>h1 标题一</h1>
    <h2>h2 标题二</h2>
    <h3>h3 标题三</h3>
    <h4>h4 标题四</h4>
    <h5>h5 标题五</h5>
    <h6>h6 标题六</h6>
  </Example>

  <Example title="链接">
    <a>我是一个链接</a>
  </Example>

  <Example title="滚动条">
    <div class="p-4 w-[600px] h-[300px] overflow-auto">
      <p v-for="x in 1000" :key="x" class="w-[2000px]">{{ x }}. 我们这个解决方案是真的全面啊！！！</p>
    </div>
  </Example>
</template>
