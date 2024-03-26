<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <div> 
    <h1>
      hello
      dfasdfadsf
    </h1>
  </div>
</template>

<script setup>
// import { Bar } from 'vue-chartjs'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
h1{
  font-size: large;
}
</style>
