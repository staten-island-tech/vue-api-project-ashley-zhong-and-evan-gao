<template>
  <router-link :to="causePath" id="card">
    <h1 data-aos="fade-up">
      {{ cause }}
    </h1>
    <div></div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const props = defineProps({
  cause: String
})

const causePath = computed(() => {
  return `/DeathData/${props.cause}`
})
</script>

<style scoped>
#card {
  margin: 2rem;
  font-size: 3.5rem;
  width: 40%;
  text-decoration: none;
  padding: 1rem;
  box-shadow: 0 4px 15px var(--blue-gray);
  transition: all 0.3s ease-in-out;
}
#card:hover {
  transform: scale(1.1);
}
</style>
