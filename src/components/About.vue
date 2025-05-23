<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-text">
          <p class="intro">
            I am currently studying a double major in Mathematics and Computer Science at the University of Barcelona. 
            I am a responsible person, hardworking and eager to learn. I like challenges and I give everything to achieve what I set out to do.
          </p>
          <p>
            Working in a team, I try to see all perspectives and provide a constructive vision that helps solve problems.
            My academic journey combines theoretical mathematics with practical computer science skills.
          </p>
          <p>
            Currently in my fourth year, I've participated in various academic activities including the Forum of Young 
            Talents of Catalonia, a monthly tech podcast, and presented at cybersecurity events. I'm particularly 
            interested in statistical data analysis and machine learning.
          </p>
          <div class="stats">
            <div class="stat">
              <span class="number">C1</span>
              <span class="label">English</span>
            </div>
            <div class="stat">
              <span class="number">4th</span>
              <span class="label">Year</span>
            </div>
            <div class="stat">
              <span class="number">2</span>
              <span class="label">Degrees</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <img src="/JAN.jpeg" alt="Jan Accensi March" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />
          </div>
        </div>
      </div>
      
      <div class="education">
        <h3>Education</h3>
        <div class="education-items">
          <div class="education-item">
            <h4>Bachelor in Mathematics & Computer Science</h4>
            <p class="institution">University of Barcelona</p>
            <p class="period">2021 - Present</p>
            <p class="details">Double degree in Mathematics and IT Engineering, currently in 4th year.</p>
          </div>
          <div class="education-item">
            <h4>Secondary Education</h4>
            <p class="institution">IES Torre Vicens (Spain)</p>
            <p class="period">2015 - 2019, 2020 - 2021</p>
            <p class="details">Completed secondary school education with excellent academic performance.</p>
          </div>
          <div class="education-item">
            <h4>International Exchange</h4>
            <p class="institution">Epiphany Global School (United States)</p>
            <p class="period">2019 - 2020</p>
            <p class="details">Amancio Ortega Foundation Scholarship, Member of Mu Alpha Theta Society.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

<style scoped>
.about {
  padding: 100px 0;
  background-color: var(--vt-c-white);
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
  color: var(--vt-c-blue);
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
  background: var(--vt-c-blue);
  border-radius: 2px;
}

.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  color: var(--vt-c-black);
}

.intro {
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--vt-c-blue-dark);
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.stats {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  max-width: 400px;
}

.stat {
  text-align: center;
}

.number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vt-c-blue);
  margin-bottom: 0.25rem;
}

.label {
  font-size: 0.9rem;
  color: var(--vt-c-black-soft);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--vt-c-blue);
  box-shadow: 0 10px 30px rgba(0, 62, 255, 0.2);
}

.education {
  margin-top: 5rem;
}

.education h3 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: var(--vt-c-blue);
}

.education-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.education-item {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--vt-c-blue);
}

.education-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 62, 255, 0.15);
}

.education-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--vt-c-blue-dark);
}

.institution {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.period {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
  }
  
  .stats {
    margin: 2rem auto;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .education-items {
    grid-template-columns: 1fr;
  }
  
  .about {
    padding: 80px 0;
  }
}
</style>
