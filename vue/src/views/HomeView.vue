<template>
  <div class="home-page">
    <h1>Causes of Death in 2014</h1>
    <h3>Find Info on the Statistics of Causes of Deaths based on Race and Gender</h3>
    <input type="text" v-model="searchedCause" placeholder="Search..." @keyup.enter="findDeath" />
    <div>Finding Results for: {{ searchedCause }}</div>
    <MainCard v-for="(cause, index) in filteredUniqueLeadingCauses" :key="index" :cause="cause" />
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, onMounted, computed } from 'vue'

const deathData = ref(null)
const searchedCause = ref('')

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

const uniqueLeadingCauses = computed(() => {
  // takes all the items with same leading_causes and eliminates any extras for searching
  if (deathData.value) {
    return [...new Set(deathData.value.map((item) => item.leading_cause))]
  }
  return ["didn't work properly"]
})

const filteredUniqueLeadingCauses = computed(() => {
  if (searchedCause.value) {
    return uniqueLeadingCauses.value.filter((cause) =>
      cause.toLowerCase().includes(searchedCause.value.toLowerCase())
    )
  }
  return uniqueLeadingCauses.value
})

onMounted(() => {
  fetchData(API)
})
</script>

<style scoped></style>
