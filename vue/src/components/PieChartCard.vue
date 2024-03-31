<template>
  <div class="PieChartContainer">
    <h1>Pie Chart</h1>
    <Pie :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChartCard',
  components: { Pie },
  props: {
    menProp: {
      type: Number,
      required: true
    },
    womenProp: {
      type: Number,
      required: true
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['Men', 'Women'],
        datasets: [
          {
            backgroundColor: ['#5a5e9a', '#777aaf'],
            data: [this.menProp, this.womenProp]
          }
        ]
      }
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: large;
}
</style>
