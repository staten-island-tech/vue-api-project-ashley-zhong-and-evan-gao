<template>
  <router-link :to="causePath" id="card">
    <h1>{{ cause }}</h1>
    <div>{{ cause }}</div>
  </router-link>
</template>

<script setup>
// router links "percent of people from diff race inside indiv card"
// import descriptions from descriptionArr.js based on matching key
import { computed } from 'vue'
import { defineProps } from 'vue'
import { descriptionArr } from '@/stores/descriptionArr'
const props = defineProps({
  key: Number,
  cause: String
})
const causePath = computed(() => {
  return `/DeathData/${props.cause}`
})
// descriptionArr.forEach((descrip) =>
</script>

<style lang="scss" scoped>
#card {
  background-color: aqua;
  margin-bottom: 2rem;
}
</style>
