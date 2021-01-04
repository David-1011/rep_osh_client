<template>
  <ul class="navbar-nav mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" @click="handlelogout">Logout</a>
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
    ...mapActions(["logout"]),
    handlelogout() {
      this.logout().then(() => {
        this.$router.push("./");
      });
    }
  }
};
</script>

<style>
</style>
