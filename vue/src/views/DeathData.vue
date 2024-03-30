<template>
    <div>    
        <PieChart v-if="chartData.labels.length > 0" :chart-data="chartData" />

    </div>
</template>


<script>
import PieChart from '@/components/PieChart.vue';
// import { Bar } from 'vue-chartjs'




export default {
    name: 'PieChart',
  components: { PieChart },

    data() {
        return {
            cause: {},
        }
    },
    computed: {
        chartData() {
            const genderData = {
        men: 0,
        women: 0,
      };
            this.cause.forEach((item) => {
        if (item.sex === 'M') {
            genderData.men += parseInt(item.deaths);
        } else if (item.sex === 'F') {
            genderData.women += parseInt(item.deaths);
        }
      });
      return {
        labels: ['Men', 'Women'],
        datasets: [
          {
            data: [genderData.men, genderData.women],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
          },
        ],
      };

        }

    },
    mounted: async function () {

        await this.getCause();
    },
    methods: {
        getCause:
            async function () {
                let res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=${this.$route.params.id}`)
                let data = await res.json()
                console.log(data)
                this.cause = data
            }
    },
    // created() {
    //     this.getCause();
    // }
}


</script>

<style lang="scss" scoped></style>
