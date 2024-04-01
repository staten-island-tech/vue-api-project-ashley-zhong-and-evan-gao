<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/byRacePieChart">Leading Cause of Death By Race</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--dark-blue);
  padding: 1rem 0;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--orange);
  font-size: 1.5rem;
  padding: 0 1rem;
  transition: color 0.4s;
}

nav a:hover {
  color: var(--normal-red);
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  nav a {
    padding: 1rem 0;
  }
}
</style>
