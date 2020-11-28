<template>
  <div>
    <label for="description1" class="form-label">Unfallbeschreibung</label>
    <textarea
      class="form-control"
      id="description1"
      rows="4"
      v-model="incidentDescription"
    ></textarea>
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
    }
  },
  methods: {
    ...mapActions(["setIncidentDescription"])
  }
};
</script>

<style>
</style>