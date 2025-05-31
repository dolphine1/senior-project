<template>
    <div>
      <!-- Header Component -->
      <Header />
      
      <!-- Hero Section -->
      <section class="hero" :style="{ backgroundImage: 'url(' + heroImage + ')' }">
        <div class="hero-content">
          <h1>Neighborhood Watch</h1>
          <h2>Enhance Your Community's Safety</h2>
          <p>
            Join our neighborhood watch system to connect with your neighbors and
            local security providers.
          </p>
        </div>
      </section>
      
      <!-- Key Features Section -->
      <section class="features">
        <h2>Key Features</h2>
        <div class="feature-list">
          <div class="feature-item">
            <h3>Connect with Neighbors</h3>
            <p>
              Easily connect with your neighbors to share information and stay informed about local events.
            </p>
          </div>
          <div class="feature-item">
            <h3>Enhanced Security</h3>
            <p>
              Collaborate with local security providers for a more secure neighborhood.
            </p>
          </div>
          <div class="feature-item">
            <h3>Real-Time Alerts</h3>
            <p>
              Receive instant notifications about incidents and important updates in your area.
            </p>
          </div>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2025 Neighborhood Watch. All rights reserved.</p>
        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
      </footer>
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  
  export default {
    name: 'HomePage',
    components: {
      Header
    },
    data() {
      return {
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
      }
    }
  }
  </script>
  
  <style scoped>
  .hero {
    background-size: cover;
    color: white;
    text-align: center;
    padding: 60px 0;
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .features {
    padding: 40px 20px;
  }
  
  .feature-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .feature-item {
    flex: 1;
    margin: 20px;
  }
  footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f8f8;
  color: #333;
}

footer p,
footer a {
  display: block;
  margin: 5px 0;
  color: inherit;
  text-decoration: none;
}

  </style>