<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="submitForm">
        <input v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
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
          const response = await axios.post('http://localhost:5000/api/register', {
            username: this.username,
            password: this.password
          });
          console.log('Registration successful:', response.data);
          // You can handle response here, e.g., navigate to login page or show a success message
        } catch (error) {
          console.error('Registration failed:', error.response.data);
          // Show error message if registration fails
        }
      }
    }
  };
  </script>
  