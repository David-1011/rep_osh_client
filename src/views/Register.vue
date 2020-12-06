<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <img
            id="profile-img"
            src="@/assets/avatar_2x.png"
            class="card-img-top rounded-circle px-5 pt-1"
          />
          <div class="card-body">
            <form @submit.prevent="handleRegister">
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
                <label for="firstName1" class="form-label">Vorname</label>
                <input
                  v-model="user.firstName"
                  type="text"
                  class="form-control"
                  id="firstName1"
                  autocomplete="given-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="lastName1" class="form-label">Nachname</label>
                <input
                  v-model="user.lastName"
                  type="text"
                  class="form-control"
                  id="lastName1"
                  autocomplete="family-name"
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
              <div class="mb-3">
                <label for="password2" class="form-label"
                  >Passwort wiederholen</label
                >
                <input
                  v-model="password2"
                  type="password"
                  class="form-control"
                  id="password2"
                  autocomplete="new-password"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Registrieren
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", "", ""),
      submitted: false,
      successful: false,
      message: "",
      password2: ""
    };
  },
  computed: {
    loggedIn() {
      console.log();
      return this.$store.state.authData.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister() {
      console.log(this.user);
      console.log(this.password2);
      console.log(this.user.validatePassword(this.password2));
      /*
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch("auth/register", this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }      
      });
      */
    }
  }
};
</script>

<style scoped>
</style>