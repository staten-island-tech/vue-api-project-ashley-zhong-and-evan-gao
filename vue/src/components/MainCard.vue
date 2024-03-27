<template>
  <router-link :to="causePath" id="card">
    <h1>{{ cause }}</h1>
  </router-link>
</template>

<script setup>
// router links "percent of people from diff race inside indiv card"
import { computed } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  cause: Object,
  key: Number
})
const causePath = computed(() => {
  return `/DeathData/${props.cause}`
})
import DeathsData from '@/views/DeathData.vue'
</script>

<style lang="scss" scoped>
#card {
  background-color: aqua;
  margin-bottom: 2rem;
}
</style>
