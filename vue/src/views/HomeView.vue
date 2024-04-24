<template>
  <div class="home-page">
    <h1
      class="title"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="1000"
    >
      Data for Leading Causes of Death in 2014 (Race and Gender)
    </h1>
    <div class="search-info">
      <label
        class="search-title"
        for="search-input"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        Find Info and Statistics For {{ searchedCause }}:</label
      >
      <input
        id="search-input"
        class="search-bar"
        type="text"
        v-model="searchedCause"
        placeholder="Search..."
        @keyup.enter="findDeath"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      />
    </div>
    <div class="all-cards">
      <MainCard v-for="(cause, index) in filteredUniqueLeadingCauses" :key="index" :cause="cause" />
    </div>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, onMounted, computed } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  AOS.init()
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
  margin: 1em;
}

.search-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
}
.search-title {
  font-size: 2.5rem;
  color: var(--pink-gray);
  justify-content: center;
  width: 100%;
  padding: 1em;
  height: auto;
  text-align: center;
  font-weight: bold;
}
.search-bar {
  font-size: 2rem;
  color: var(--pink-gray);
  justify-content: center;
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 2em;
  text-align: center;
}
.all-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 7rem;
}
</style>
