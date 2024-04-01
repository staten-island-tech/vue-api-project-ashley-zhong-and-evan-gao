<template>
  <router-link :to="causePath" id="card">
    <h1>{{ cause }}</h1>
    <div></div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  cause: String
})

const causePath = computed(() => {
  return `/DeathData/${props.cause}`
})
</script>

<style scoped>
#card {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
</style>
