<template>
  <div class="pie-chart">Pie Chart</div>
  <div>
    <canvas id="pieChart"></canvas>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue'
export default {
  name: 'App',
  components: { PieChart }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .pie-chart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
