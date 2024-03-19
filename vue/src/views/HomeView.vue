<template>
  <div class="home-page">
    <MainCard></MainCard>
  </div>
</template>

<script setup>
import MainCard from '@/components/MainCard.vue'
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json`)
  todoData.value = await res.json()
  console.log(todoData)
}

fetchData()

watch(todoId, fetchData)

// call and create fetch data function here but have cards created in maincard.vue component
</script>

<style lang="scss" scoped></style>
