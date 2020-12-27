<template>
  <form @submit.prevent="handleLogin" style="width: 300px">
    <div class="mb-3">
      <label for="email1" class="form-label">E-Mail Adresse</label>
      <input
        v-model="user.email"
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
        v-model="user.password"
        type="password"
        class="form-control"
        id="password1"
        autocomplete="new-password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
import User from "../../models/user";
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.loading = true;
      if (this.user.email && this.user.password) {
        this.login(this.user).catch(err => {
          console.log(err.message);
        });
      }
    }
  }
};
</script>

<style>
</style>