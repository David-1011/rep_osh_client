<template>
  <div>
    <label for="date1" class="form-label">Datum</label>
    <input
      type="date"
      class="form-control"
      id="date1"
      v-model="incidentDate"
      :max="maxDate"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";
export default {
  name: "IncidentDateInput",
  data() {
    return {
      maxDate: moment().format("YYYY-MM-DD")
    };
  },
  computed: {
    incidentDate: {
      get() {
        return this.$store.state.incidentData.incidentDate;
      },
      set(value) {
        this.setIncidentDate(value);
      }
    }
  },
  methods: {
    ...mapActions(["setIncidentDate"])
  }
};
</script>

<style>
</style>