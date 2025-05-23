<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <div class="project-placeholder">
              <component :is="project.icon" />
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-links">
              <a :href="project.github" class="project-link" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Code
              </a>
              <a :href="project.demo" class="project-link demo" target="_blank" v-if="project.demo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Icons as components
const MathIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  `
}

const CodeIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  `
}

const AIIcon = {
  template: `
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
    </svg>
  `
}

const projects = ref([
  {
    id: 1,
    title: "Black-Scholes PDE Solver",
    description: "Implementation of numerical methods to solve the Black-Scholes partial differential equation for option pricing in financial mathematics.",
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/janaccensi/black-scholes-solver",
    demo: "https://black-scholes.janaccensi.com",
    icon: MathIcon
  },
  {
    id: 2,
    title: "Statistical Disease Prediction",
    description: "Machine learning model that leverages statistical analysis to identify patterns in patient data for early heart disease detection.",
    technologies: ["R", "Python", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/janaccensi/disease-prediction",
    demo: "https://disease-prediction.janaccensi.com",
    icon: AIIcon
  },
  {
    id: 3,
    title: "Google Code In Podcast",
    description: "Monthly podcast discussing tech topics, programming challenges, and computer science concepts for students and professionals.",
    technologies: ["Audio Production", "Content Creation", "Educational Media"],
    github: "https://github.com/janaccensi/code-in-podcast",
    demo: "https://codein-podcast.com",
    icon: CodeIcon
  },
  {
    id: 4,
    title: "Cybersecurity Business Framework",
    description: "Framework for businesses to implement cybersecurity measures, developed as part of the MWC Mobile Week 2021 presentation.",
    technologies: ["Security Analysis", "Business Strategy", "Risk Assessment"],
    github: "https://github.com/janaccensi/cybersec-framework",
    demo: null,
    icon: CodeIcon
  },
  {
    id: 5,
    title: "Mathematical Modeling Tool",
    description: "Interactive tool for creating and analyzing mathematical models, with applications in both pure and applied mathematics.",
    technologies: ["JavaScript", "D3.js", "MathJax", "Node.js"],
    github: "https://github.com/janaccensi/math-modeling",
    demo: "https://math-models.janaccensi.com",
    icon: MathIcon
  },
  {
    id: 6,
    title: "Algorithm Visualization Platform",
    description: "Educational platform that visualizes common algorithms in computer science, helping students understand computational complexity.",
    technologies: ["Vue.js", "TypeScript", "Canvas API", "Web Animations"],
    github: "https://github.com/janaccensi/algorithm-vis",
    demo: "https://algovis.janaccensi.com",
    icon: AIIcon
  }
])
</script>

<style scoped>
.projects {
  padding: 100px 0;
  background-color: var(--vt-c-black);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--vt-c-blue-light);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--vt-c-blue-light);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.project-card {
  background-color: var(--vt-c-black-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 62, 255, 0.3);
  border-color: var(--vt-c-blue);
}

.project-image {
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--vt-c-blue-dark), var(--vt-c-black));
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--vt-c-blue-light);
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 62, 255, 0.2);
  color: var(--vt-c-blue-light);
  border-radius: 50px;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: var(--vt-c-blue-dark);
  transition: all 0.3s;
}

.project-link:hover {
  background-color: var(--vt-c-blue);
}

.project-link.demo {
  background-color: transparent;
  border: 1px solid var(--vt-c-blue);
}

.project-link.demo:hover {
  background-color: var(--vt-c-blue);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
