<template>
  <div class="home-page">
    <h3>Causes of Death in 2014</h3>
    <p>Cause Count: {{ causeCount.Count }}</p>
    <button @click="findCause" :disabled="!deathData">Discover Another Cause of Death</button>
    <p v-if="!deathData">Loading...</p>
    <pre v-else>{{ deathData }}</pre>
    <buttton>Search For Causes of Deaths</buttton>
    <MainCard></MainCard>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, watch, onMounted } from 'vue'
import { causeCount } from '@/stores/causeCount.js'

const deathData = ref(null)

const API = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&$limit=0'

// function findCause() {
//   causeCount.Count++
//   const newAPI = API.replace('$limit=0', `$limit=${causeCount.Count}`)
//   fetchData(newAPI)
// }

async function fetchData(link) {
  try {
    deathData.value = null
    const res = await fetch(link)
    if (res.status < 200 || res.status > 299) {
      throw new Error(res.statusText)
    } else {
      deathData.value = await res.json()
      console.log(deathData)
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(()=> {
  fetchData(API)
})



// watch(causeCount, fetchData)

// call and create fetch data function here but have cards created in maincard.vue component
</script>

<style lang="scss" scoped></style>
