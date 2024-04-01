<template>
  <div>
    <Pie :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    AccidentsExceptDrugPosioningProp: {
      type: Number,
      required: true
    },
    NephritisNephroticSyndromeNephrisisProp: {
      type: Number,
      required: true
    },
    CerebrovascularDiseaseProp: {
      type: Number,
      required: true
    },
    ChronicLowerRespiratoryProp: {
      type: Number,
      required: true
    },
    AllOtherProp: {
      type: Number,
      required: true
    },
    AlzheimerProp: {
      type: Number,
      required: true
    },
    MentalBehavioralProp: {
      type: Number,
      required: true
    },
    EssentialHypertensionProp: {
      type: Number,
      required: true
    },
    InfluenzaProp: {
      type: Number,
      required: true
    },
    DiabetesMellitusProp: {
      type: Number,
      required: true
    },
    CertainConditionsProp: {
      type: Number,
      required: true
    },
    MalignantNeoplasmsProp: {
      type: Number,
      required: true
    },
    SelfHarmProp: {
      type: Number,
      required: true
    },
    HivProp: {
      type: Number,
      required: true
    },
    CongenitalMalformationsProp: {
      type: Number,
      required: true
    },
    AssaultProp: {
      type: Number,
      required: true
    },
    SepticemiaProp: {
      type: Number,
      required: true
    },
    ChronicLiverProp: {
      type: Number,
      required: true
    }
  },
  computed: {
    chartData() {
      return {
        labels: [
          'Accidents Except Drug Posioning',
          'Nephritis, Nephrotic Syndrome and Nephrisis',
          'Cerebrovascular Disease',
          'Chronic Lower Respiratory Diseases',
          'All Other Causes',
          `Alzheimer's Disease`,
          'Mental and Behavioral Disorders',
          'Influenza and Pneumonia',
          'Diabetes Mellitus',
          'Perinatal Period',
          'Malignant Neoplasms',
          'Intentional Self-Harm',
          'HIV',
          'Congenital Malformations, Deformations, and Chromosomal Abnormalities',
          'Assault',
          'Septicemia',
          'Chronic Liver Disease and Cirrhosis'
        ],
        datasets: [
          {
            backgroundColor: [
              '#1f77b4',
              '#ff7f0e',
              '#2ca02c',
              '#d62728',
              '#9467bd',
              '#8c564b',
              '#e377c2',
              '#7f7f7f',
              '#bcbd22',
              '#17becf',
              '#aec7e8',
              '#ffbb78',
              '#98df8a',
              '#ff9896',
              '#c5b0d5',
              '#c49c94',
              '#f7b6d2',
              '#c7c7c7'
            ],
            data: [
              this.AccidentsExceptDrugPosioningProp,
              this.NephritisNephroticSyndromeNephrisisProp,
              this.CerebrovascularDiseaseProp,
              this.ChronicLowerRespiratoryProp,
              this.AllOtherProp,
              this.AlzheimerProp,
              this.MentalBehavioralProp,
              this.EssentialHypertensionProp,
              this.InfluenzaProp,
              this.DiabetesMellitusProp,
              this.CertainConditionsProp,
              this.MalignantNeoplasmsProp,
              this.SelfHarmProp,
              this.HivProp,
              this.CongenitalMalformationsProp,
              this.AssaultProp,
              this.SepticemiaProp,
              this.ChronicLiverProp,
              this.NephritisNephroticSyndromeNephrisisProp
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
        maintainAspectRatio: true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
