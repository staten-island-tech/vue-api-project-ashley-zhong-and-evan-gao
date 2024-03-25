<template>
  <div class="home-page">
    <h3>Causes of Death in 2014</h3>
    <MainCard v-for="cause in uniqueLeadingCauses" :key="cause" :id="index" :cause="cause" />

    <!-- <input type="text" v-model="searchedCause" placeholder="Search..." @keyup.enter="findDeath" />
    <button type="button" @click="findDeath" :disabled="!searchedCause">
      Search Specific Causes
    </button>

    <div>Finding Results for {{ searchedCause }}</div>
    <p v-if="!deathData && !displayedCauseData">Loading...</p>
    <pre v-else-if="displayedCauseData">{{ displayedCauseData }}</pre>

    <MainCard v-else :key="componentKey" :deathData="getFilteredData"></MainCard> -->
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, onMounted, computed } from 'vue'

const deathData = ref(null)
// const searchedCause = ref('')
// const displayedCauseData = ref(null)
// const componentKey = ref(0)

const API = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014'

async function fetchData(link) {
  try {
    deathData.value = null
    const res = await fetch(link)
    if (res.status >= 200 && res.status < 300) {
      deathData.value = await res.json()
      console.log(deathData.value)
    } else {
      throw new Error(res.statusText)
    }
  } catch (error) {
    console.log(error)
  }
}
// console.log(deathData)

const uniqueLeadingCauses = computed(() => {
  if (deathData.value) {
    return [...new Set(deathData.value.map((item) => item.leading_cause))]
  }
  return ["didn't work properly"]
})
console.log(uniqueLeadingCauses.value)

onMounted(() => {
  fetchData(API)
})

// function findDeath() {
//   if (searchedCause.value) {
//     const matchingData = deathData.value.filter((item) =>
//       item.leading_cause.toLowerCase().includes(searchedCause.value.toLowerCase())
//     )
//     displayedCauseData.value = matchingData
//     componentKey.value += 1
//   }
// }
// const getFilteredData = () => {
//   if (displayedCauseData.value) {
//     return displayedCauseData.value
//   } else {
//     return []
//   }
// }
</script>

<style lang="scss" scoped></style>
