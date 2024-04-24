<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" data-aos="slide-right" data-aos-duration="1000">Search</RouterLink>
        <RouterLink to="/LeadingCauses" data-aos="slide-left" data-aos-duration="1000"
          >Leading Causes of Death</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: var(--mightnight-blue);
}

.wrapper {
  max-width: 1280px;
  margin: 1rem;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--pink-gray);
  font-size: 2rem;
  padding: 2rem;
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
