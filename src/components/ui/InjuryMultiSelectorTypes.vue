<template>
  <div>
    <label for="injuryType1" class="form-label">Verletzungsart</label>
    <select
      id="injuryType1"
      size="8"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      multiple
      v-model="injuryTypes"
    >
      <option v-for="type in allInjuryTypes" :key="type.id" :value="type.id">
        {{ type.typeText }}
      </option>
    </select>
    <div class="invalid-feedback">
      Bitte geben Sie mindestens eine Verletzungsart an.
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "InjuryMultiSelectorTypes",

  setup() {
    const store = useStore();

    store.dispatch("fetchInjuryTypes");

    const valid1 = computed(() => store.state.validation.typesValid);

    const allInjuryTypes = computed(() => store.state.masterData.injuryTypes);

    const injuryTypes = computed({
      get: () => {
        return store.state.injuryData.injuryTypes;
      },
      set: values => {
        store.dispatch("setInjuryTypes", values);
      }
    });

    return {
      allInjuryTypes,
      injuryTypes,
      valid1
    };
  }
};
</script>

<style>
</style>