<template>
  <div>
    <label for="subArea1" class="form-label">Unterkategorie</label>
    <select
      @click="selectSubArea"
      id="subArea1"
      class="form-select"
      :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
      :disabled="incidentMainArea.length == 0"
    >
      <option selected disabled value="">Öffnen</option>
      <option
        v-for="item in subAreas(incidentMainArea)"
        :key="item.id"
        :value="item.id"
        :selected="incidentSubArea === item.id"
      >
        {{ item.subAreaText }}
      </option>
    </select>
    <div class="invalid-feedback">Bitte geben Sie eine Unterkategorie an.</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { AT } from "../../constants/action-types";
export default {
  name: "IncidentSelectorSubArea",
  props: {
    defaultSubArea: {
      type: String
    }
  },
  setup(props) {
    const store = useStore();

    store.dispatch("fetchSubAreas").then(res => {
      const index = res.find(e => e.subAreaText === props.defaultSubArea);
      if (index) {
        store.commit(AT.setMainArea, index.masMainAreaId);
        store.commit(AT.setSubArea, index.id);
      }
    });

    const incidentMainArea = computed(() => store.state.incidentData.mainArea);

    const incidentSubArea = computed(() => store.state.incidentData.subArea);

    const valid1 = computed(() => store.state.validation.subAreaValid);

    const subAreas = computed(() => store.getters.subAreas);

    const selectSubArea = e => store.dispatch("setSubArea", e.target.value);
    return {
      subAreas,
      incidentMainArea,
      incidentSubArea,
      valid1,
      selectSubArea
    };
  }
};
</script>

<style>
</style>