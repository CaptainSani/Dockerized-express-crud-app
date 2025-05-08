import { createRouter, createWebHistory } from 'vue-router';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import UserList from './components/UserList.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/users', component: UserList }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
