<template>
  <div>
    <label for="date1" class="form-label">Datum</label>
    <input
      type="date"
      class="form-control"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      id="date1"
      v-model="incidentDate"
      :max="maxDate"
    />
    <div class="invalid-feedback">Ungültiger Zeitpunkt.</div>
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

    const valid1 = computed(() => store.state.validation.datetimeValid1);

    const incidentDate = computed({
      get: () => {
        return store.state.incidentData.incidentDate;
      },
      set: value => {
        store.dispatch("setIncidentDate", value);
      }
    });

    return {
      valid1,
      maxDate,
      incidentDate
    };
  }
};
</script>

<style>
</style>