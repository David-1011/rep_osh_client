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
          <div class="card-body">
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="email1" class="form-label">E-Mail Adresse</label>
                <input
                  v-model="user.email"
                  type="text"
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
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      },
      submitted: false,
      successful: false,
      message: "",
      password2: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.authData.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      console.log(this.loggedIn);
    }
  },
  methods: {
    ...mapActions(["register"]),

    handleRegister() {
      this.message = "";
      this.submitted = true;
      if (this.password2 === this.user.password) {
        this.register(this.user);
      }
    }
  }
};
</script>

<style scoped>
</style>