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
import moment from "moment";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "IncidentInputTime",
  setup() {
    const store = useStore();

    const maxTime = moment().format("HH:mm:ss");

    const incidentTime = computed({
      get: () => {
        return store.state.incidentData.incidentTime;
      },
      set: value => {
        store.dispatch("setIncidentTime", value);
      }
    });

    return {
      maxTime,
      incidentTime
    };
  }
};
</script>

<style>
</style>