<template>
  <section id="home" class="hero">
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
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-secondary">Get in Touch</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="math-animation">
          <div class="equation" v-for="(eq, index) in equations" :key="index" :style="{ animationDelay: `${index * 0.5}s` }">
            {{ eq }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const equations = ref([
  'f(x) = ∫ e^x dx',
  '∑(n=1→∞) 1/n² = π²/6',
  'Black-Scholes PDE',
  'P = NP?',
  'e^(iπ) + 1 = 0'
])
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
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
}

.name {
  display: block;
  background: linear-gradient(45deg, #fff, #e0e6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-weight: 500;
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

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
  border-color: white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.math-animation {
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.equation {
  font-size: 1.5rem;
  font-family: 'Computer Modern', serif;
  margin: 1rem 0;
  opacity: 0;
  animation: fadeInFloat 3s ease-in-out infinite;
  position: absolute;
  white-space: nowrap;
}

.equation:nth-child(1) { top: 10%; left: 20%; }
.equation:nth-child(2) { top: 30%; right: 10%; }
.equation:nth-child(3) { top: 50%; left: 10%; }
.equation:nth-child(4) { top: 70%; right: 20%; }
.equation:nth-child(5) { top: 85%; left: 50%; transform: translateX(-50%); }

@keyframes fadeInFloat {
  0%, 100% { opacity: 0; transform: translateY(20px); }
  50% { opacity: 0.7; transform: translateY(-10px); }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .math-animation {
    height: 200px;
  }
  
  .equation {
    font-size: 1.2rem;
  }
}

@media (max-width: 640px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 200px;
    text-align: center;
  }
}
</style>
