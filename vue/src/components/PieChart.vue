<template>
  <div>
    <!-- <canvas :id="chartId" width="400" height="400"></canvas> -->
  </div>
</template>

<script >
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'PieChart',
  extends: Pie,
  props: {
    menProp: Array,
    womenProp: Array, 

    // chartData: {
    //   type: Array,
    //   required: true
    // },
    // chartId: {
    //   type: String,
    //   default: 'pie-chart'
    // }
  },
  // mounted() {
  //   this.renderChart(this.chartData, {
  //     responsive: true,
  //     maintainAspectRatio: false
  //   });
  // }
}

</script>

<style lang="scss" scoped>
h1{
  font-size: large;
}
</style>
