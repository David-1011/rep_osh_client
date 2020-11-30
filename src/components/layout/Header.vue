<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">OSH</a>
        <button
          id="navbar-button"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li @click="toggleNavbar" class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li @click="toggleNavbar" class="nav-item">
              <router-link class="nav-link" to="/incident"
                >Verbandsbucheintrag</router-link
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {},
  methods: {
    toggleNavbar: async () => {
      document.getElementById("navbar-button").click();
    }
  }
};
</script>

<style scoped>
</style>