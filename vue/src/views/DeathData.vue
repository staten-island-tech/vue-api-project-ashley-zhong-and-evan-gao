<template>
    <div>
        <h1> {{  }}</h1>
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
            getCause:
                async function(){
                    let res= await fetch (`https://data.cityofnewyork.us/resource/jb7j-dtam.json?leading_cause=${this.$route.params.id}`)
                    let data = await res.json()
                    console.log(data)
                    this.cause = data
                }
        },
        created() {
            this.getCause(); // call the method when the component is created
        }
    }
</script>

<style lang="scss" scoped>

</style>