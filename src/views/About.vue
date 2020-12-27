<template>
  <div class="container">
    <h1>Verbandsbucheintrag</h1>

    <div class="row mt-1">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Eintrag abgeschlossen</h5>
            <h6 class="card-subtitle mb-2 text-muted">OSH</h6>
            <p class="card-text">
              Ihre Daten wurden erfolgreich übertragen. Wir wünschen Ihnen gute
              Besserung und bleiben Sie gesund. Bei Fragen oder Beschwerden
              wenden Sie sich an Ihren direkten Vorgesetzten.
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