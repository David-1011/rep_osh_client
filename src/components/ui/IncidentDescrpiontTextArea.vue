<template>
  <div>
    <label for="description1" class="form-label">Unfallbeschreibung</label>
    <textarea
      class="form-control"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      id="description1"
      rows="2"
      v-model="incidentDescription"
    ></textarea>
    <div class="invalid-feedback">Bitte beschreiben Sie den Unfallhergang.</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "IncidentDescriptionTextArea",
  computed: {
    incidentDescription: {
      get() {
        return this.$store.state.incidentData.incidentDescription;
      },
      set(value) {
        this.setIncidentDescription(value);
      }
    },
    valid1() {
      return this.$store.state.validation.descriptionValid;
    }
  },
  methods: {
    ...mapActions(["setIncidentDescription"])
  }
};
</script>

<style>
</style>