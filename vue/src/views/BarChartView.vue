<template>
  <div class="pie-chart">Pie Chart</div>
  <div>
  </div>
</template>

<script>
export default {
  name: 'AllPieChart',
  components: { },

  data() {
    return {
      AccidentsExceptDrugPosioning: 0, 
      NephritisNephroticSyndromeNephrisis: 0, 
      CerebrovascularDisease: 0, 
      ChronicLowerRespiratory: 0, 
      AllOther: 0,   
      Alzheimer:0, 
      MentalBehavioral: 0,
      EssentialHypertension: 0,
      Influenza: 0,
      DiabetesMellitus: 0, 
      CertainConditions: 0, 
      MalignantNeoplasms: 0, 
      SelfHarm: 0, 
      HIV: 0, 
      CongenitalMalformations: 0, 
      Assault: 0, 
      Septicemia: 0,
      ChronicLiver: 0,  


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
          `https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014`
        )
        if (res.status >= 200 && res.status < 300) {
          this.data = await res.json()
        } else {
          throw new Error(res.statusText)
        }
        console.log(this.data)
        this.data.forEach((item)=> {
          if(item.leading_cause === "Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)"){
            this.AccidentsExceptDrugPosioning += parseInt(item.deaths)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
/* @media (min-width: 1024px) {
  .pie-chart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
