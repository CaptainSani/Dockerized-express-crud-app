<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <input v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            username: this.username,
            password: this.password
          });
          console.log('Login successful:', response.data);
          // Store the JWT token in localStorage or sessionStorage
          localStorage.setItem('authToken', response.data.token);
          // Redirect or show a success message
        } catch (error) {
          console.error('Login failed:', error.response.data);
          // Show error message if login fails
        }
      }
    }
  };
  </script>
  