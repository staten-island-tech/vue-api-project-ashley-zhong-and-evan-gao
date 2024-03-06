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

export default {
  data() {
    return {
      pokemons: []
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=${this.id}')
        const data = await result.json()
        this.pokemons = data.results
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
