<template>
  <router-link to="/ui" custom v-slot="{ navigate, href, route }">
    <div class="text-b-link hover:cursor-pointer" @click="navigate">{{ 'UI规范' }}</div>
  </router-link>
</template>
