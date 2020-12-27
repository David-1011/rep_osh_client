<template>
  <ul class="navbar-nav mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Login
      </a>
      <div
        class="dropdown-menu dropdown-menu-dark dropdown-menu-end p-3"
        aria-labelledby="navbarDropdown"
      >
        <LoginForm />
        <div class="dropdown-divider"></div>
        <router-link class="dropdown-item" to="/register"
          >Registrieren</router-link
        >
        <a class="dropdown-item" href="#">Password vergessen?</a>
      </div>
    </li>
  </ul>
</template>

<script>
import LoginForm from "../../ui/LoginForm";
export default {
  name: "HeaderLogin",
  components: {
    LoginForm
  }
};
</script>

<style>
</style>
