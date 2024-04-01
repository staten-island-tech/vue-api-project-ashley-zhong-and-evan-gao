<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LeadingCauses">Leading Causes of Death</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--mightnight-blue);
  padding: 2rem;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--pink-gray);
  font-size: 1.5rem;
  padding: 3rem;
  transition: color 0.4s;
}

nav a:hover {
  color: var(--ivory);
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
