<template>

    <div id="card">
      <h1>{{ DeathsData.leading_cause }}</h1>
    </div>
</template>

<script setup>
import DeathsData from '@/views/DeathsData.vue';

import { defineProps } from "vue";
const props = defineProps({
  deathData: object
})

</script>

<style lang="scss" scoped>
#card{
  background-color: aqua;
}; 
</style>
