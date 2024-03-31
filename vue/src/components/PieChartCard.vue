<template>
  <div class="PieChartContainer">
    <h1>Pie Chart</h1>
    <!-- <Pie
      :chart-data="
        (chartData = {
          labels: ['Men', 'Women'],
          datasets: [
            {
              data: [this.menProp, this.womenProp],
              backgroundColor: ['#f9c200', '#3498db']
            }
          ]
        })
      "
      :chart-options="{ responsive: true, maintainAspectRatio: false }"
      :chart-id="chartId"
      :width="width"
      :height="height"
    /> -->

    <Pie 
    :options="chartOptions"
    :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PieChartCard',
  components: {Pie}, 
  // extends: Pie,
  data() {
      return { chartConfig, 
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
    // chartId: {
    //   type: String,
    //   default: 'pie-chart'
    // },

    // width: {
    //   type: Number,
    //   default: 400
    // },

    // height: {
    //   type: Number,
    //   default: 400
    // }
  }
}
</script>

<style scoped>
h1 {
  font-size: large;
}
</style>
