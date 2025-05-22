import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Check if we have a redirect stored from 404.html
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  // You can handle the redirect here if you add a router in the future
  console.log('Redirected from:', redirect);
}

createApp(App).mount('#app')
