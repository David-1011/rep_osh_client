<template>
  <div>
    <label for="mainArea1" class="form-label">Bereich</label>
    <select v-model="incidentMainArea" id="mainArea1" class="form-select">
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="area in AllMainAreas"
        :key="area.mainAreaId"
        :value="area.mainAreaId"
        :selected="incidentMainArea === area.mainAreaId"
      >
        {{ area.mainAreaText }}
      </option>
    </select>
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