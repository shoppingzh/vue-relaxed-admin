<template>
  <RouterView />
</template>

<script setup lang="ts">
import usePrefs from '@/store/preference';

const prefs = usePrefs();
prefs.darkMode = false;
</script>
