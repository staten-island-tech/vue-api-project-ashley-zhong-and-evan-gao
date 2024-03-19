<template>
  <div class = "card">
    <h2> {{ cause.name }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  cause: object
})

</script>

<style lang="scss" scoped></style>
