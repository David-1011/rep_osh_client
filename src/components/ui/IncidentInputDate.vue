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
import moment from "moment";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "IncidentInputDate",
  setup() {
    const store = useStore();

    const maxDate = moment().format("YYYY-MM-DD");

    const incidentDate = computed({
      get: () => {
        return store.state.incidentData.incidentDate;
      },
      set: value => {
        store.dispatch("setIncidentDate", value);
      }
    });

    return {
      maxDate,
      incidentDate
    };
  }
};
</script>

<style>
</style>