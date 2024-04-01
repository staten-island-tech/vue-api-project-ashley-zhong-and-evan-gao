<template>
  <div>
    <div class="men">Number of Men: {{ men }}</div>
    <div class="women">Number of Women: {{ women }}</div>
    <PieChartCard :menProp="men" :womenProp="women"></PieChartCard>
    <BarChartCard 
    :Black_NonHispanicProp="Black_NonHispanic"
    :White_NonHispanicProp="White_NonHispanic"
    :HispanicProp="Hispanic"
    :Asian_PacificIslanderProp="Asian_PacificIslander"
    :OtherProp="Other"
    :UnknownProp="Unknown"></BarChartCard>
  </div>
</template>

<script>
import PieChartCard from '@/components/PieChartCard.vue'
import BarChartCard from '@/components/BarChartCard.vue'

export default {
  name: 'AllCharts',
  components: { PieChartCard , BarChartCard},

  data() {
    return {
      loaded: false,
      men: 0,
      women: 0,
      Black_NonHispanic: 0,
      White_NonHispanic: 0,
      Hispanic:0, 
      Asian_PacificIslander: 0, 
      Other:0, 
      Unknown: 0, 
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
        this.data.forEach((item)=> {
          if(item.race_ethnicity === "Black Non-Hispanic"){
            this.Black_NonHispanic += parseInt(item.deaths)
          }
          if(item.race_ethnicity === "White Non-Hispanic"){
            this.White_NonHispanic += parseInt(item.deaths)
          }
          if(item.race_ethnicity === "Hispanic"){
            this.Hispanic += parseInt(item.deaths)
          }
          if(item.race_ethnicity === "Asian and Pacific Islander"){
            this.Asian_PacificIslander += parseInt(item.deaths)
          }
          if(item.race_ethnicity === "Other Race/ Ethnicity"){
            this.Other += parseInt(item.deaths)
          }
          if(item.race_ethnicity === "Not Stated/Unknown"){
            this.Unknown += parseInt(item.deaths)
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

<style scoped></style>
