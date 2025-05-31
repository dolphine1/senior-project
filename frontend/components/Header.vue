<template>
    <header class="bg-white shadow">
      <div style="max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 16px 24px;">
        <div style="font-size: 24px; font-weight: bold; color: #2563eb;">
          Neighborhood Watch
        </div>
        <div style="display: flex; align-items: center; gap: 32px;">
          <nav style="display: flex; gap: 24px;">
            <nuxt-link to="/" style="color: #374151; text-decoration: none;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">About</nuxt-link>
            <nuxt-link to="/features" style="color: #374151; text-decoration: none;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">Features</nuxt-link>
            <nuxt-link to="/contact" style="color: #374151; text-decoration: none;" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#374151'">Contact</nuxt-link>
          </nav>
          <div style="display: flex; gap: 16px;">
            <nuxt-link to="/login" style="color: white; background-color: #2563eb; padding: 8px 20px; border-radius: 4px; text-decoration: none; display: inline-block;">
              Login
            </nuxt-link>
            <nuxt-link to="/register" style="color: #2563eb; border: 1px solid #2563eb; padding: 8px 20px; border-radius: 4px; text-decoration: none; display: inline-block;">
              Register
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
  <style scoped>
  </style>