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
            <div class="placeholder-content">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
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

<style scoped>
.about {
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

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.intro {
  font-size: 1.3rem;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.about-text p {
  margin-bottom: 1.5rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat .number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 0.25rem;
}

.stat .label {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.education h3 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.education-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.education-item {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #3498db;
}

.education-item h4 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.institution {
  font-weight: 600;
  color: #3498db;
  margin-bottom: 0.25rem;
}

.period {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.details {
  color: #555;
  line-height: 1.5;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .education-items {
    grid-template-columns: 1fr;
  }
  
  .stats {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .about {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
  }
  
  .stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
