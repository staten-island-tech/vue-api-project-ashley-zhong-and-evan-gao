<template>
  <div class="BarChartContainer"></div>
  <h1>Bar Chart</h1>
  <Bar :options="chartOptions" :data="chartData" />
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


export default {
  name: "BarChartCard",
  components: { Bar },
  props: {
    Black_NonHispanicProp: {
      type: Number,
      required: true
    },
    White_NonHispanicProp: {
      type: Number,
      required: true
    },
    UnknownProp: {
      type: Number,
      required: true
    },
    HispanicProp: {
      type: Number,
      required: true
    },
    Asian_PacificIslanderProp: {
      type: Number,
      required: true
    },
    OtherProp: {
      type: Number,
      required: true
    },
  },
  computed: {
    chartData() {
      return {
        labels: [
    'Black Non-Hispanic',
    'White Non-Hispanic',
    'Hispanic',
    'Asian and Pacific Islander',
    'Other Race/ Ethnicity',
    'Not Stated/Unknown',
  ],
  datasets: [
    {
      backgroundColor: '#f87979',
      data: [this.Black_NonHispanicProp, this.White_NonHispanicProp, this.UnknownProp, this.HispanicProp, this.Asian_PacificIslanderProp, this.OtherProp]
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

<style scoped></style>
