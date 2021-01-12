<template>
  <div>
    <label for="addInfo1" class="form-label">Weitere Ortsangaben</label>
    <input
      type="text"
      class="form-control"
      id="addInfo1"
      autocomplete="off"
      placeholder="Optional"
      v-model="locationInfo"
      :disabled="incidentMainArea.length == 0"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "IncidentInputLocationInfo",
  props: {
    defaultInfo: {
      type: String
    }
  },
  setup(props) {
    const store = useStore();

    const incidentMainArea = computed(() => store.state.incidentData.mainArea);

    if (props.defaultInfo.length > 0) {
      store.dispatch("setLocationInfo", props.defaultInfo);
    }

    const locationInfo = computed({
      get: () => {
        return store.state.incidentData.locationInfo;
      },
      set: value => {
        store.dispatch("setLocationInfo", value);
      }
    });

    return {
      incidentMainArea,
      locationInfo
    };
  }
};
</script>

<style>
</style>