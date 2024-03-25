<template>
    <div>
        <h1> {{ cause }}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cause: {

                }
            }
        },
        methods:{
            getCause:{
                async function(){
                    let res= await fetch (`https://data.cityofnewyork.us/resource/jb7j-dtam.json?
                    ${this.$route.params.id}`)
                    let data = await res.json()
                    this.cuase = data
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>