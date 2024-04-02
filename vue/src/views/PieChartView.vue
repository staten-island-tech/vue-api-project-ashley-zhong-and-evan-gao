<template>
  <div class="pie-title">Leading Causes of Death</div>
  <div>
    <PieChartTotal
      :AccidentsExceptDrugPosioningProp="AccidentsExceptDrugPosioning"
      :NephritisNephroticSyndromeNephrisisProp="NephritisNephroticSyndromeNephrisis"
      :CerebrovascularDiseaseProp="CerebrovascularDisease"
      :ChronicLowerRespiratoryProp="ChronicLowerRespiratory"
      :AllOtherProp="AllOther"
      :AlzheimerProp="Alzheimer"
      :MentalBehavioralProp="MentalBehavioral"
      :EssentialHypertensionProp="EssentialHypertension"
      :InfluenzaProp="Influenza"
      :DiabetesMellitusProp="DiabetesMellitus"
      :CertainConditionsProp="CertainConditions"
      :MalignantNeoplasmsProp="MalignantNeoplasms"
      :SelfHarmProp="SelfHarm"
      :HivProp="Hiv"
      :CongenitalMalformationsProp="CongenitalMalformations"
      :AssaultProp="Assault"
      :SepticemiaProp="Septicemia"
      :ChronicLiverProp="ChronicLiver"
    ></PieChartTotal>
  </div>
</template>

<script>
import PieChartTotal from '@/components/PieChartTotal.vue'

export default {
  name: 'AllPieChart',
  components: { PieChartTotal },

  data() {
    return {
      AccidentsExceptDrugPosioning: 0,
      NephritisNephroticSyndromeNephrisis: 0,
      CerebrovascularDisease: 0,
      ChronicLowerRespiratory: 0,
      AllOther: 0,
      Alzheimer: 0,
      MentalBehavioral: 0,
      EssentialHypertension: 0,
      Influenza: 0,
      DiabetesMellitus: 0,
      CertainConditions: 0,
      MalignantNeoplasms: 0,
      SelfHarm: 0,
      Hiv: 0,
      CongenitalMalformations: 0,
      Assault: 0,
      Septicemia: 0,
      ChronicLiver: 0
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
        const res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014`)
        if (res.status >= 200 && res.status < 300) {
          this.data = await res.json()
        } else {
          throw new Error(res.statusText)
        }
        this.data = this.data.map((item) => {
          if (item.deaths === '.') {
            item.deaths = 0
          }
          return item
        })
        console.log(this.data)
        this.data.forEach((item) => {
          if (
            item.leading_cause ===
            'Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)'
          ) {
            this.AccidentsExceptDrugPosioning += parseInt(item.deaths)
          }
          if (
            item.leading_cause ===
            'Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)'
          ) {
            this.NephritisNephroticSyndromeNephrisis += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Cerebrovascular Disease (Stroke: I60-I69)') {
            this.CerebrovascularDisease += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Chronic Lower Respiratory Diseases (J40-J47)') {
            this.ChronicLowerRespiratory += parseInt(item.deaths)
          }
          if (item.leading_cause === 'All Other Causes') {
            this.AllOther += parseInt(item.deaths)
          }
          if (item.leading_cause === "Alzheimer's Disease (G30)") {
            this.Alzheimer += parseInt(item.deaths)
          }
          if (
            item.leading_cause ===
            'Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)'
          ) {
            this.MentalBehavioral += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Essential Hypertension and Renal Diseases (I10, I12)') {
            this.EssentialHypertension += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Influenza (Flu) and Pneumonia (J09-J18)') {
            this.Influenza += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Diabetes Mellitus (E10-E14)') {
            this.DiabetesMellitus += parseInt(item.deaths)
          }
          if (
            item.leading_cause ===
            'Certain Conditions originating in the Perinatal Period (P00-P96)'
          ) {
            this.CertainConditions += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Malignant Neoplasms (Cancer: C00-C97)') {
            this.MalignantNeoplasms += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Intentional Self-Harm (Suicide: X60-X84, Y87.0)') {
            this.SelfHarm += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Human Immunodeficiency Virus Disease (HIV: B20-B24)') {
            this.Hiv += parseInt(item.deaths)
          }
          if (
            item.leading_cause ===
            'Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)'
          ) {
            this.CongenitalMalformations += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Assault (Homicide: Y87.1, X85-Y09)') {
            this.Assault += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Septicemia (A40-A41)') {
            this.Septicemia += parseInt(item.deaths)
          }
          if (item.leading_cause === 'Chronic Liver Disease and Cirrhosis (K70, K73)') {
            this.ChronicLiver += parseInt(item.deaths)
          }
        })
        console.log(this.Septicemia)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.pie-title {
  font-size: var(--h2);
  color: var(--pink-gray);
  text-align: center;
}
</style>
