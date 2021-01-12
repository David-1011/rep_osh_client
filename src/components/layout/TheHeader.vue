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
          data-bs-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbar1"
                @click="goToHome"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbar1"
                @click="goToIncident"
                to="/incident"
                >Verbandsbucheintrag</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbar1"
                @click="goToAdministration"
                to="/administration"
                >Datenverwaltung</router-link
              >
            </li>
          </ul>
          <div v-if="!isLoggedIn && displayLoginForm">
            <HeaderLogin />
          </div>
          <div v-if="isLoggedIn">
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
  name: "TheHeader",
  components: {
    HeaderLogin,
    HeaderLogout
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.state.authData.token;
    },
    displayLoginForm() {
      return this.$route.name == "Login" ? false : true;
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToIncident() {
      this.$router.push("/incident");
    },
    goToAdministration() {
      this.$router.push("/administration");
    }
  }
};
</script>

<style scoped>
</style>