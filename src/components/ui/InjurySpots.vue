<template>
  <div>
    <label for="injurySpot1" class="form-label">Verletzungsbereich</label>
    <select
      id="injurySpot1"
      size="8"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      multiple
      v-model="spots"
    >
      <option v-for="spot in AllInjurySpots" :key="spot.id" :value="spot.id">
        {{ spot.spotText }}
      </option>
    </select>
    <div class="invalid-feedback">
      Bitte geben Sie mindestens einen Verletzungsbereich an.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "InjurySpots",
  computed: {
    spots: {
      get() {
        return this.$store.state.injuryData.spots;
      },
      set(value) {
        this.setInjurySpots(value);
      }
    },
    valid1() {
      return this.$store.state.validation.spotsValid;
    },
    ...mapGetters(["AllInjurySpots"])
  },
  methods: {
    ...mapActions(["fetchInjurySpots", "setInjurySpots"])
  },
  created() {
    this.fetchInjurySpots();
  }
};
</script>

<style>
</style>