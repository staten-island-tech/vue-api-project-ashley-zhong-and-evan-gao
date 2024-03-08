<template>
  <div class="pie-chart">Pie Chart</div>
</template>

<script setup>
import chart from '@/components/chart.vue'
const url = 'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .pie-chart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
