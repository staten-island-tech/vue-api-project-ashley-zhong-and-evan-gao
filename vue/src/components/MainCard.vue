<template>
  <router-link :to="causePath" id="card">
    <h1>{{ cause }}</h1>
    <div>Description: {{ description.description }}</div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  descriptionKey: Number,
  cause: String,
  description: Object
})

const causePath = computed(() => {
  return `/DeathData/${props.cause}`
})
</script>

<style scoped>
#card {
  background-color: aqua;
  margin-bottom: 2rem;
}
</style>
