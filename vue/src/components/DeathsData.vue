<template>
  <div>
    <h1>{{ deathData.CauseOfDeath }}</h1>
    <p>Description: {{ deathData.Description }}</p>
    <p>Count: {{ deathData.Count }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  deathData: Object
})
</script>

<style scoped></style>
