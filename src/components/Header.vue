<template>
  <header :class="{ 'scrolled': isScrolled }">
    <nav class="nav-container">
      <div class="logo">
        <a href="#home">Jan Accensi March</a>
      </div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

header.scrolled {
  background: rgba(10, 10, 10, 0.9);
  border-bottom-color: var(--vt-c-blue);
  box-shadow: 0 2px 20px rgba(0, 62, 255, 0.3);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  color: var(--vt-c-blue-light);
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--vt-c-blue);
  transition: width 0.3s;
}

.nav-links a:hover {
  color: var(--vt-c-blue-light);
}

.nav-links a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }
  
  .logo a {
    font-size: 1.2rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .nav-links a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-links {
    gap: 0.75rem;
  }
  
  .nav-links a {
    font-size: 0.8rem;
  }
}
</style>
