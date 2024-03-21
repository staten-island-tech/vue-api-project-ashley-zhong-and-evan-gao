<template>
  <div class="home-page">
    <p>Cause Count: {{ causeCount.Count }}</p>
    <button @click="findCause" :disabled="!deathData">Discover Another Cause of Death</button>
    <p v-if="!deathData">Loading...</p>
    <pre v-else>{{ deathData }}</pre>
    <MainCard></MainCard>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, watch } from 'vue'
import { causeCount } from '@/stores/causeCount.js'

const deathData = ref(null)
const API = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=1'

function findCause() {
  causeCount.Count++
  const newAPI = API.replace('$limit=1', `$limit=${causeCount.Count}`)
  fetchData(newAPI)
}

async function fetchData(link) {
  deathData.value = null
  const res = await fetch(link) //add cause count as id in json file

  deathData.value = await res.json()
  console.log(deathData)
}

fetchData(API)

watch(causeCount, fetchData)

// call and create fetch data function here but have cards created in maincard.vue component
</script>

<style lang="scss" scoped></style>
