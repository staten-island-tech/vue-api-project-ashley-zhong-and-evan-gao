<template>
    <div>
        <PieChart v-if="loaded"
            :menProp="men"
            :womenProp="women" />
        <h1>hello</h1>
    </div>
</template>


<script>
import PieChart from '@/components/PieChart.vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)




export default {
    name: 'PieChart',
    components: { PieChart },
    data() {
        return {
            loaded: false,
            men:0,
            women:0,


        }
    },
    mounted: function(){
        this.fetchData();
    },
    methods: {
        fetchData: async function() {
          this.loaded = false

            try{
                const res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=${this.$route.params.id}`);
                const data = await res.json();

                data.forEach((item) => {
                   if (item.sex === 'M') {
                       this.men += parseInt(item.deaths);
                   } else if (item.sex === 'F') {
                       this.women += parseInt(item.deaths);
                   }
               });

                this.loaded=true
            } catch(error){
                console.log(error);
            }
        },
        
  },

    // computed: {
    //     chartData() {
    //         const genderData = {
    //     men: 0,
    //     women: 0,
    //   };

    //     this.cause.forEach((item) => {
    //     if (item.sex === 'M') {
    //         genderData.men += parseInt(item.deaths);
    //     } else if (item.sex === 'F') {
    //         genderData.women += parseInt(item.deaths);
    //     }
    //   });
    //   return {
    //     datasets: [
    //     {
    //       label: 'Gender',
    //       data: [genderData.men, genderData.women],
    //       backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
    //     },
    //   ],
    //   };

    //     }

    // },
    //---------------------------help=-======
    // mounted: async function () {

    //     await this.getCause();
    // },
    // methods: {
    //     getCause:
    //         async function () {
    //             let res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=${this.$route.params.id}`)
    //             let data = await res.json()
    //             console.log(data)
    //             this.cause = data
    //             data.forEach((item) => {
    //                 if (item.sex === 'M') {
    //                     this.men += parseInt(item.deaths);
    //                 } else if (item.sex === 'F') {
    //                     this.women += parseInt(item.deaths);
    //                 }
    //             });
    //             this.loaded=true
    //         }
    // },



    // created() {
    //     this.getCause();
    // }
}


</script>

<style lang="scss" scoped></style>
