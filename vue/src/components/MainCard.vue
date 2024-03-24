<template>
  <div id="card">
    <h1>{{ deathData.leading_cause }}</h1>
    <h2>{{ key }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  deathData: Object,
  key: Number
})

import DeathsInfo from '@/views/DeathsInfo.vue'
</script>

<style lang="scss" scoped>
#card {
  background-color: aqua;
}
</style>
