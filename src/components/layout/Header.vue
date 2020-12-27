<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          id="navbar-button"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li @click="toggleNavbar" class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li @click="toggleNavbar" class="nav-item">
              <router-link class="nav-link" to="/incident"
                >Verbandsbucheintrag</router-link
              >
            </li>
          </ul>
          <div v-if="!loggedIn">
            <HeaderLogin />
          </div>
          <div v-if="loggedIn">
            <HeaderLogout />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderLogin from "./partial/HeaderLogin";
import HeaderLogout from "./partial/HeaderLogout";
export default {
  name: "Header",
  components: {
    HeaderLogin,
    HeaderLogout
  },
  computed: {
    loggedIn() {
      return this.$store.state.authData.status.loggedIn;
    }
  },
  methods: {
    toggleNavbar: () => {
      document.getElementById("navbar-button").click();
    }
  }
};
</script>

<style scoped>
</style>