<template>
  <div>
    <h2>All Users</h2>
    <button @click="logout">Logout</button>
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
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (res.ok) {
          this.users = data;
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
