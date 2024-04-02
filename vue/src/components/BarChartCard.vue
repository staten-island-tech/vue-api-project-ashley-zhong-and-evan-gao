<template>
  <div id="BarChartContainer">
    <h2 class="subtitle">Deaths by Race/Ethnicity</h2>
    <Bar :options="chartOptions" :data="chartData" />
  </div>
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
  name: 'BarChartCard',
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
    }
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
          'Not Stated/Unknown'
        ],
        datasets: [
          {
            label: 'Deaths',
            backgroundColor: '#f87979',
            data: [
              this.Black_NonHispanicProp,
              this.White_NonHispanicProp,
              this.UnknownProp,
              this.HispanicProp,
              this.Asian_PacificIslanderProp,
              this.OtherProp
            ]
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
      },
      scales: {
        x: {
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'white'
          }

        },
        
        y: {
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'white'
          }

        }
      }

      }
    }
  }
}
</script>

<style scoped>
#BarChartContainer {
  margin-top: 3rem;
}
h2 {
  text-align: center;
  color: var(--pink-gray);
}
</style>
