<template>
  <div id="card">
    <DeathsData v-if="displayedCauseData" :key="key" :deathData="deathData" />
    <p v-else>No Data</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DeathsInfo from '@/views/DeathsInfo.vue'

const deathData = ref(null)

const key = ref(1)

const displayedCauseData = ref(null)

const searchCause = () => {
  displayedCauseData.value = deathData.value.filter((data) => {
    return data.CauseOfDeath.toLowerCase().includes(searchedCause.value.toLowerCase())
  })
  key.value += 1
}

const searchedCause = ref('')
</script>
