<template>
    <div>
        <!-- <PieChart v-if="loaded" :menProp="men" :womenProp="women" /> -->

        <h1>{{cause}}</h1>
    </div>
</template>


<script>
import PieChart from '@/components/PieChart.vue';
import { Pie } from 'vue-chartjs';

export default {
    name: 'PieChart',
    components: { PieChart },
    data() {
        return {
            loaded: false,
            men: [],
            women: [],
            cause: {}, 


        }
    },
    mounted: function () {
        this.fetchData().then(() => {
            this.loaded = true;
        });

    },
    methods: {
        fetchData: async function () {
            try {
                const res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=2014&leading_cause=${this.$route.params.id}`);
                const data = await res.json();
                this.cause = data; 
                data.forEach((item) => {
                    if (item.sex === 'M') {
                        this.men += parseInt(item.deaths);
                    } else if (item.sex === 'F') {
                        this.women += parseInt(item.deaths);
                    }
                });

                // this.loaded=true
            } catch (error) {
                console.log(error);
            }
            return Promise.resolve();

        },

    },
}


</script>

<style lang="scss" scoped></style>
