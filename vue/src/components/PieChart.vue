<template>
    <pie-chart :chart-data="chartData" />
</template>

<script >
import { Pie } from 'vue-chartjs';

export default {
  name: 'PieChart',
  extends: Pie,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
    });
    console.log(chartData)
  },
};
</script>

<style lang="scss" scoped>
h1{
  font-size: large;
}
</style>
