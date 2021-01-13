<template>
  <div>
    <label for="time1" class="form-label">Uhrzeit</label>
    <input
      type="time"
      class="form-control"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      id="time1"
      v-model="incidentTime"
      :max="maxTime"
    />
    <div class="invalid-feedback">Ungültiger Zeitpunkt.</div>
  </div>
</template>

<script>
import moment from "moment";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "IncidentInputTime",
  setup() {
    const store = useStore();

    const maxTime = moment().format("HH:mm:ss");

    const valid1 = computed(() => store.state.validation.datetimeValid1);

    const incidentTime = computed({
      get: () => {
        return store.state.incidentData.incidentTime;
      },
      set: value => {
        store.dispatch("setIncidentTime", value);
      }
    });

    return {
      valid1,
      maxTime,
      incidentTime
    };
  }
};
</script>

<style>
</style>