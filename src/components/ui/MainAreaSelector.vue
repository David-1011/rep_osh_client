<template>
  <div>
    <label for="mainArea1" class="form-label">Bereich</label>
    <select
      v-model="incidentMainArea"
      id="mainArea1"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
    >
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="area in AllMainAreas"
        :key="area.id"
        :value="area.id"
        :selected="incidentMainArea === area.id"
      >
        {{ area.mainAreaText }}
      </option>
    </select>
    <div class="invalid-feedback">Bitte geben Sie einen Bereich an.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MainAreaSelector",
  computed: {
    incidentMainArea: {
      get() {
        return this.$store.state.incidentData.mainArea;
      },
      set(value) {
        this.setMainArea(value);
      }
    },
    valid1() {
      return this.$store.state.validation.mainAreaValid;
    },
    ...mapGetters(["AllMainAreas"])
  },
  methods: {
    ...mapActions(["setMainArea", "fetchMainAreas"])
  },
  created() {
    this.fetchMainAreas();
  }
};
</script>

<style>
</style>