import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Incident from '../views/Incident.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/incident',
    name: 'Incident',
    component: Incident,
  },
  {
    path: '/administration',
    name: 'Administration',
    // lazy-loaded
    component: () => import('../views/Administration.vue'),
  },
  {
    path: '/editIncident/:id',
    name: 'EditIncident',
    // lazy-loaded
    component: () => import('../views/EditIncident.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/confirm-register',
    name: 'confirm-register',
    component: () => import('../views/ConfirmRegister.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
