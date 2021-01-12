<template>
  <div>
    <label for="mainArea1" class="form-label">Bereich</label>
    <select
      @click="selectMainArea"
      id="mainArea1"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
    >
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="area in allMainAreas"
        :key="area.id"
        :value="area.id"
        :selected="incidentMainArea === area.id"
      >
        {{ area.mainAreaText }}
      </option>
    </select>
    <div class="invalid-feedback">Bitte geben Sie einen Bereich an.</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "IncidentSelectorMainArea",
  props: {
    defaultMainArea: {
      type: String
    }
  },
  setup(props) {
    const store = useStore();

    store.dispatch("fetchMainAreas").then(res => {
      const index = res.find(e => e.mainAreaText == props.defaultMainArea);
      if (index) store.dispatch("setMainArea", index.id);
    });

    const incidentMainArea = computed(() => store.state.incidentData.mainArea);

    const valid1 = computed(() => store.state.validation.mainAreaValid);

    const allMainAreas = computed(() => store.state.masterData.mainAreas);

    const selectMainArea = e => store.dispatch("setMainArea", e.target.value);

    return {
      incidentMainArea,
      selectMainArea,
      valid1,
      allMainAreas
    };
  }
};
</script>

<style>
</style>