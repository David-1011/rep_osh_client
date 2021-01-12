<template>
  <div>
    <label for="injuryType1" class="form-label">Verletzungsart</label>
    <select
      id="injuryType1"
      size="8"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      multiple
      v-model="types"
    >
      <option v-for="type in AllInjuryTypes" :key="type.id" :value="type.id">
        {{ type.typeText }}
      </option>
    </select>
    <div class="invalid-feedback">
      Bitte geben Sie mindestens eine Verletzungsart an.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "InjuryTypes",
  computed: {
    types: {
      get() {
        return this.$store.state.injuryData.types;
      },
      set(value) {
        this.setInjuryTypes(value);
      }
    },
    valid1() {
      return this.$store.state.validation.typesValid;
    },
    ...mapGetters(["AllInjuryTypes"])
  },
  methods: {
    ...mapActions(["fetchInjuryTypes", "setInjuryTypes"])
  },
  created() {
    this.fetchInjuryTypes();
  }
};
</script>

<style>
</style>