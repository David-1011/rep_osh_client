<template>
  <div>
    <label for="description1" class="form-label">Unfallbeschreibung</label>
    <textarea
      class="form-control"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      id="description1"
      rows="2"
      v-model="incidentDescription"
    ></textarea>
    <div class="invalid-feedback">Bitte beschreiben Sie den Unfallhergang.</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "IncidentTextAreaDescription",

  setup() {
    const store = useStore();

    const incidentDescription = computed({
      get: () => {
        return store.state.incidentData.incidentDescription;
      },
      set: value => {
        store.dispatch("setIncidentDescription", value);
      }
    });

    const valid1 = computed(() => store.state.validation.descriptionValid);

    return {
      incidentDescription,
      valid1
    };
  }
};
</script>

<style>
</style>