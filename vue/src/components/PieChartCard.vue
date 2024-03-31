<template>
  <div>
    <Pie
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
    />
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
  extends: Pie,
  props: {
    menProp: {
      type: Number,
      required: true
    },

    womenProp: {
      type: Number,
      required: true
    },
    chartId: {
      type: String,
      default: 'pie-chart'
    },

    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 400
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: large;
}
</style>
