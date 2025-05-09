<template>
    <div>
      <h2>All Users</h2>
      <button @click="logout">Logout</button>
      
      <p v-if="message" class="text-red-500">{{ message }}</p>
  
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.username }} ({{ user.email }})
        </li>
      </ul>
      
      <p v-else>No users found.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        message: ''
      };
    },
    methods: {
      async fetchUsers() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.message = 'You must be logged in to view users.';
          return;
        }
  
        try {
          const res = await fetch('http://localhost:5000/api/users', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
          const data = await res.json();
          if (res.ok) {
            this.users = data.users; // Assuming the response returns a 'users' property
          } else {
            this.message = data.error || 'Could not fetch users';
          }
        } catch (err) {
          this.message = 'Error fetching users';
        }
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/');
      }
    },
    mounted() {
      this.fetchUsers();
    }
  };
  </script>
  