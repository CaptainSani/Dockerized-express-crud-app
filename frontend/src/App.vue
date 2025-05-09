<template>
  <div id="app">
    <h1>My App</h1>
    <nav>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
