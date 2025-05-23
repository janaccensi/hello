<template>
  <section id="home" class="hero">
    <div class="three-container">
      <ThreeScene />
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="greeting">Hello, I'm</span>
          <span class="name">Jan Accensi March</span>
        </h1>
        <p class="hero-subtitle">Mathematics & Computer Science Student</p>
        <p class="hero-description">
          Currently studying a double major in Mathematics and Computer Science at the University of Barcelona.
          I am a responsible person, hardworking and eager to learn. I like challenges and give everything to 
          achieve what I set out to do.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn">View Projects</a>
          <a href="#contact" class="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ThreeScene from './ThreeScene.vue'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--vt-c-black);
  color: white;
  position: relative;
  overflow: hidden;
}

.three-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  max-width: 650px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  color: var(--vt-c-blue-light);
}

.name {
  display: block;
  background: linear-gradient(45deg, var(--vt-c-blue-light), var(--vt-c-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-weight: 500;
  color: var(--vt-c-white);
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

@media (max-width: 968px) {
  .hero-content {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 640px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
    text-align: center;
  }
}
</style>
