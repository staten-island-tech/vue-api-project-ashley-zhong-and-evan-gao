<template>
  <div class="PieChartContainer">
    <h1>Pie Chart</h1>

    <Pie 
    :options="chartOptions"
    :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// } from 'chart.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'PieChartCard',
  components: {Pie}, 
  // extends: Pie,
  data() {
      return { 
        chartData: {
          labels: [ 'Men', 'Women'],
          datasets: [ { 
            backgroundColor: [ '#5a5e9a', '#777aaf'],
            data: [ this.menProp, this.womenProp] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
      },

  props: {
    menProp: {
      type: Number,
    },

    womenProp: {
      type: Number,
    },
  }
}
</script>

<style scoped>
h1 {
  font-size: large;
}
</style>
