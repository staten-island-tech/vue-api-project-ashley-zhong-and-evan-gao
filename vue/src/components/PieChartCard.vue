<template>
  <div class="PieChartContainer">
    <h2 class="subtitle">Deaths by Gender</h2>
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
            backgroundColor: ['#00308F', '#AA336A'],
            data: [this.menProp, this.womenProp]
          }
        ]
      }
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          },
          label: {
            color: 'white'
          }
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  color: var(--pink-gray);
}
</style>
