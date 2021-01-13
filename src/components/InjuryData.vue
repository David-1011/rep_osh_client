<template>
  <div class="card">
    <div class="card-header text-white bg-tkTurquoise">
      3. Verletzungsbeschreibung
    </div>
    <div class="card-body">
      <div class="d-flex flex-column flex-md-row">
        <div class="col me-md-3"><InjurySpots /></div>
        <div class="col ms-md-3"><InjuryTypes /></div>
      </div>
      <p class="d-none d-md-block mt-2">
        <small>
          Zur Mehrfachauswahl auf Desktop-PCs "Strg"-Taste gedrückt halten.
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import InjurySpots from "./ui/InjuryMultiSelectorSpots";
import InjuryTypes from "./ui/InjuryMultiSelectorTypes";

export default {
  name: "InjuryData",
  components: {
    InjurySpots,
    InjuryTypes
  }
};
</script>

<style>
</style>