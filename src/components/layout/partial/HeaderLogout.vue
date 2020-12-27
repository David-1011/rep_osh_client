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
        {{ user.firstName }} {{ user.lastName.substring(0, 1) }}.
      </a>
      <div
        class="dropdown-menu dropdown-menu-dark dropdown-menu-end p-2"
        aria-labelledby="navbarDropdown"
      >
        <div class="card-body" style="width: 300px">
          <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
          <a href="#" class="btn btn-secondary" v-on:click="logout">Logout</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HeaderLogin",
  computed: {
    user() {
      return this.$store.state.authData.user;
    }
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<style>
</style>
