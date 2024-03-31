<template>
  <div>
    <!-- <PieChart v-if="loaded" :menProp="men" :womenProp="women" /> -->
  </div>
</template>

<script>
import PieChart from '@/components/PieChartCard.vue'
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
  name: 'PieChart',
  components: { PieChart },

  data() {
    return {
      loaded: false,
      men: 0,
      women: 0
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      if (this.loaded) return
      this.loaded = true
      try {
        this.data = null
        const res = await fetch(
          `https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=${this.$route.params.id}`
        )
        if (res.status >= 200 && res.status < 300) {
          this.data = await res.json()
        } else {
          throw new Error(res.statusText)
        }
        console.log(this.data)
        this.data.forEach((item) => {
          if (item.sex === 'M') {
            if (item.deaths != '.') {
              this.men += parseInt(item.deaths)
            }
          } else if (item.sex === 'F') {
            if (item.deaths != '.') {
              this.women += parseInt(item.deaths)
            }
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}

// https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=Accidents%20Except%20Drug%20Posioning%20(V01-X39,%20X43,%20X45-X59,%20Y85-Y86)
</script>

<style lang="scss" scoped></style>
