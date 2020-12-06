<template>
  <div class="container">
    <div class="row mt-1">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registrierung abgeschlossen</h5>
            <p class="card-text">
              Ihre Daten wurden erfolgreich übertragen. Sie werden in Kürze eine
              Bestätigungsemail erhalten. Nachdem Sie Ihren Account bestätigt
              haben, können Sie sich einlogen.
            </p>
            <router-link class="card-link" to="/">Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {}
};
</script>

<style scoped>
</style>