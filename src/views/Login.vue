<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img
            id="profile-img"
            src="@/assets/avatar_2x.png"
            class="card-img-top rounded-circle px-5 pt-1"
          />
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.authData.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.loading = true;
      if (this.user.email && this.user.password) {
        this.login(this.user)
          .then(() => {
            this.$router.push("/profile");
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    }
  }
};
</script>

<style scoped>
</style>