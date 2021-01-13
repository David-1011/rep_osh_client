<template>
  <div>
    <label for="injurySpot1" class="form-label">Verletzungsbereich</label>
    <select
      id="injurySpot1"
      size="8"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      multiple
      v-model="injurySpots"
    >
      <option v-for="spot in allInjurySpots" :key="spot.id" :value="spot.id">
        {{ spot.spotText }}
      </option>
    </select>
    <div class="invalid-feedback">
      Bitte geben Sie mindestens einen Verletzungsbereich an.
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "InjuryMultiSelectorSpots",
  setup() {
    const store = useStore();

    store.dispatch("fetchInjurySpots");

    const valid1 = computed(() => store.state.validation.spotsValid);

    const allInjurySpots = computed(() => store.state.masterData.injurySpots);

    const injurySpots = computed({
      get: () => {
        return store.state.injuryData.injurySpots;
      },
      set: values => {
        store.dispatch("setInjurySpots", values);
      }
    });

    return {
      allInjurySpots,
      injurySpots,
      valid1
    };
  }
};
</script>

<style>
</style>