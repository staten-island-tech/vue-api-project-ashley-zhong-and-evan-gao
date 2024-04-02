<template>
  <div class="home-page">
    <h1 class="title">Data for Leading Causes of Death in 2014</h1>
    <label class="subtitle" for="search-input">
      Find Info on the Statistics of Causes of Deaths based on Race and Gender:</label
    >
    <input
      id="search-input"
      class="search-bar"
      type="text"
      v-model="searchedCause"
      placeholder="Search..."
      @keyup.enter="findDeath"
    />
    <div class="results">Finding Results for: {{ searchedCause }}</div>
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

<style scoped>


.home-page {
  margin: 0em;
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-size: 3rem;
  color: var(--pink-gray);
  text-align: center;
  justify-content: center;
  width: 100%;
  margin: 2em;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--pink-gray);
  justify-content: center;
  width: 50%;
  height: auto;
  text-align: center;
}
.search-bar {
  font-size: 2rem;
  color: var(--pink-gray);
  justify-content: center;
  width: 50%;
  height: auto;
}

.results {
  font-size: 2rem;
  color: var(--pink-gray);
  width: 100%;
  margin: 2em;
}
</style>
