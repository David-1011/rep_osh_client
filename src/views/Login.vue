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
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/ui/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style scoped>
</style>