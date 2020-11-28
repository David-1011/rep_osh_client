<template>
  <div>
    <label for="subArea1" class="form-label">Unterkategorie</label>
    <select v-model="incidentSubArea" id="subArea1" class="form-select">
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="item in SubAreas(incidentMainArea)"
        :key="item.subAreaId"
        :value="item.subAreaId"
        :selected="incidentSubArea === item.subAreaId"
      >
        {{ item.subAreaText }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SubAreaSelector",
  computed: {
    incidentMainArea: {
      get() {
        return this.$store.state.incidentData.mainArea;
      }
    },
    incidentSubArea: {
      get() {
        return this.$store.state.incidentData.subArea;
      },
      set(value) {
        this.setSubArea(value);
      }
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