<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
}

main {
  padding-top: 80px; /* Space for fixed header */
}
</style>
