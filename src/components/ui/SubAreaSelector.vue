<template>
  <div>
    <label for="subArea1" class="form-label">Unterkategorie</label>
    <select
      v-model="incidentSubArea"
      id="subArea1"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      :disabled="incidentMainArea.length == 0"
    >
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="item in SubAreas(incidentMainArea)"
        :key="item.id"
        :value="item.id"
        :selected="incidentSubArea === item.id"
      >
        {{ item.subAreaText }}
      </option>
    </select>
    <div class="invalid-feedback">Bitte geben Sie eine Unterkategorie an.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SubAreaSelector",
  computed: {
    incidentMainArea() {
      return this.$store.state.incidentData.mainArea;
    },
    incidentSubArea: {
      get() {
        return this.$store.state.incidentData.subArea;
      },
      set(value) {
        this.setSubArea(value);
      }
    },
    valid1() {
      return this.$store.state.validation.subAreaValid;
    },
    ...mapGetters(["SubAreas"])
  },
  methods: {
    ...mapActions(["setSubArea", "fetchSubAreas"])
  },
  created() {
    this.fetchSubAreas();
  }
};
</script>

<style>
</style>