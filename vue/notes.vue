<template>
  <div>
    <header>aS</header>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const pokemon = ref('')
async function getPokemon() {
  let res = await fetch('https://pokeapi.com')
  let data = await res.json()
  pokemon.value = data.results
}

onBeforeMount(() => {
  getPokemon()
})
</script>

<style lang="scss" scoped></style>
