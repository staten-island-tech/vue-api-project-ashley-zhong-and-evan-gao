<template>
  <div class="home-page">
    <p>Cause Count: {{ causeCount }}</p>
    <button @click="causeCount++" :disabled="!deathData">Discover a Cause of Death</button>
    <p v-if="!deathData">Loading...</p>
    <pre v-else>{{ deathData }}</pre>
    <MainCard></MainCard>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, watch } from 'vue'

const causeCount = ref(1)
const deathData = ref(null)

async function fetchData() {
  deathData.value = null
  const res = await fetch(
    `https://data.cityofnewyork.us/resource/jb7j-dtam.json?limit=${causeCount}`
  ) //add cause count as id in json file
  deathData.value = await res.json()
  console.log(deathData)
}

fetchData()

watch(causeCount, fetchData)

// call and create fetch data function here but have cards created in maincard.vue component
</script>

<style lang="scss" scoped></style>
