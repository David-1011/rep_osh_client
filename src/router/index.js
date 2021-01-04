import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Incident from '../views/Incident.vue';
import store from '../store/index.js';

const routes = [
  {
    // Public
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Public
    path: '/home',
    component: Home,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Public
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Public
    path: '/register',
    component: Register,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Public
    path: '/incident',
    name: 'Incident',
    component: Incident,
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Public but should only be accessable from incident router
    // TODO
    path: '/message/:id',
    name: 'Message',
    component: () => import('../views/Message.vue'),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    // Private --> Moderator, Admin
    path: '/administration',
    name: 'Administration',
    component: () => import('../views/Administration.vue'),
  },
  {
    // Private --> Admin
    path: '/editIncident/:id',
    name: 'EditIncident',
    component: () => import('../views/EditIncident.vue'),
  },

  {
    // Private --> User, Moderator, Admin
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    // Public but should only be accessable from incident router
    // TODO
    path: '/confirm-register',
    name: 'confirm-register',
    component: () => import('../views/ConfirmRegister.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.allowAnonymous && !store.getters.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
