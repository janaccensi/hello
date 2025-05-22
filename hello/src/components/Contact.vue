<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Get In Touch</h2>
      <p class="contact-description">
        I'm always open to discuss new opportunities, projects, and collaborations. Feel free to reach out!
      </p>
      
      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-item">
            <h3>Email</h3>
            <a href="mailto:janaccensi@gmail.com">janaccensi@gmail.com</a>
          </div>
          
          <div class="contact-item">
            <h3>Phone</h3>
            <p>+34 625 305 240</p>
          </div>
          
          <div class="contact-item">
            <h3>Location</h3>
            <p>Barcelona, Spain</p>
          </div>
          
          <div class="contact-item">
            <h3>Follow Me</h3>
            <div class="social-links">
              <a href="https://github.com/janaccensi" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/janaccensimarch" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com/janaccensi" target="_blank" rel="noopener">Twitter</a>
            </div>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <input 
              type="text" 
              v-model="form.name" 
              placeholder="Your Name" 
              required
            />
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              v-model="form.email" 
              placeholder="Your Email" 
              required
            />
          </div>
          
          <div class="form-group">
            <textarea 
              v-model="form.message" 
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // In a real application, you would send this to a backend
  console.log('Form submitted:', form)
  alert('Thank you for your message! I\'ll get back to you soon.')
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.contact-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 300;
}

.contact-description {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.contact-item a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.contact-item a:hover {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}

.submit-btn {
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.submit-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .contact-section {
    padding: 60px 0;
  }
}
</style>
