<template>
  <template v-if="item.children && item.children.length">
    <el-sub-menu>
      <template #title>
        <MenuContent :icon="item.icon" :title="item.name" />
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child.path"
        :item="child" />
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="item.path" @click="click">
      <MenuContent :icon="item.icon" :title="item.name" />
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import MenuContent from './MenuContent.vue';

interface Item {
  path: string,
  name: string,
  icon: string,
  children?: Item[],
}
interface Props {
  item: Item
}
const props = defineProps<Props>();
const emit = defineEmits(['click']);

function click() {
  emit('click', props.item);
}
</script>
