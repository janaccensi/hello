<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Skills & Technologies</h2>
      <div class="skills-content">
        <div class="skills-categories">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3>{{ category.name }}</h3>
            <div class="skills-list">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="additional-skills">
          <h3>Additional Skills</h3>
          <div class="skills-tags">
            <span v-for="skill in additionalSkills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
        
        <div class="languages-section">
          <h3>Languages</h3>
          <div class="languages-grid">
            <div class="language-item" v-for="language in languages" :key="language.name">
              <div class="language-name">{{ language.name }}</div>
              <div class="language-level">{{ language.level }}</div>
              <div class="language-skills">{{ language.skills }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    name: "Mathematics",
    skills: [
      { name: "Calculus", level: 95 },
      { name: "Linear Algebra", level: 90 },
      { name: "Statistics", level: 88 },
      { name: "Abstract Reasoning", level: 92 },
      { name: "Differential Equations", level: 82 }
    ]
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 85 },
      { name: "C++", level: 82 },
      { name: "Java", level: 78 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    name: "Computer Science",
    skills: [
      { name: "Algorithms", level: 88 },
      { name: "Data Structures", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Statistical Analysis", level: 92 },
      { name: "Problem Solving", level: 90 }
    ]
  }
])

const additionalSkills = ref([
  "Project Development",
  "Team Leadership",
  "Communication",
  "Data Analysis",
  "Research Methodology",
  "Statistical Modeling",
  "Version Control",
  "LaTeX",
  "Problem Solving",
  "Critical Thinking"
])

const languages = ref([
  { name: "Catalan", level: "Native", skills: "Read, Written, Spoken" },
  { name: "Spanish", level: "Native", skills: "Read, Written, Spoken" },
  { name: "English", level: "C1 Certificate", skills: "Read, Written, Spoken" },
  { name: "German", level: "A1.1 Certificate", skills: "Read, Written, Spoken" }
])
</script>

<style scoped>
.skills {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  font-weight: 700;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.skill-category h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: 500;
  color: #2c3e50;
}

.skill-level {
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 4px;
  transition: width 1s ease-in-out;
  animation: progressAnimation 2s ease-in-out;
}

@keyframes progressAnimation {
  from { width: 0%; }
}

.additional-skills {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.additional-skills h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.skill-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.languages-section {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
}

.languages-section h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.language-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 3px solid #3498db;
  transition: all 0.3s ease;
}

.language-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.language-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.language-level {
  color: #3498db;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.language-skills {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .skills {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .skills-categories {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
  
  .skills-tags {
    justify-content: flex-start;
  }
}
</style>
