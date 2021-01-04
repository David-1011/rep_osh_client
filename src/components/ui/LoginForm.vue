<template>
  <form @submit.prevent="handleLogin" style="min-width: 300px">
    <div class="mb-3">
      <label for="email1" class="form-label">E-Mail Adresse</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="email1"
        aria-describedby="emailHelp"
        autocomplete="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password1" class="form-label">Passwort</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="password1"
        autocomplete="current-password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      const email = this.email;
      const password = this.password;
      this.login({ email, password })
        .then(() => this.$router.push(this.$route.query.redirect || "/"))
        .catch(err => console.log(err.message));
    }
  }
};
</script>

<style>
</style>