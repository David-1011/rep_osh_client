<template>
  <div>
    <label for="time1" class="form-label">Uhrzeit</label>
    <input
      type="time"
      class="form-control"
      id="time1"
      v-model="incidentTime"
      :max="maxTime"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";
export default {
  name: "IncidentTimeInput",
  data() {
    return {
      maxTime: moment().format("HH:mm")
    };
  },
  computed: {
    incidentTime: {
      get() {
        return this.$store.state.incidentData.incidentTime;
      },
      set(value) {
        this.setIncidentTime(value);
      }
    }
  },
  methods: {
    ...mapActions(["setIncidentTime"])
  }
};
</script>

<style>
</style>