<template>
  <div class="card h-100">
    <div class="card-header text-white bg-tkTurquoise">2. Unfalldaten</div>
    <div class="card-body">
      <div class="d-flex flex-column flex-md-row">
        <div class="col d-flex flex-column me-md-3">
          <IncidentDate />
          <IncidentTime />
        </div>
        <div class="col d-flex flex-column ms-md-3">
          <IncidentMainArea />
          <IncidentSubArea :default-sub-area="defaultValue.defSubArea" />
          <IncidentLocationInfo :default-info="defaultValue.defInfo" />
        </div>
      </div>
      <IncidentDescription />
    </div>
  </div>
</template>

<script>
import IncidentDate from "./ui/IncidentInputDate";
import IncidentTime from "./ui/IncidentInputTime";
import IncidentMainArea from "./ui/IncidentSelectorMainArea";
import IncidentSubArea from "./ui/IncidentSelectorSubArea";
import IncidentLocationInfo from "./ui/IncidentInputLocationInfo";
import IncidentDescription from "./ui/IncidentTextAreaDescription";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "IncidentData",
  components: {
    IncidentDate,
    IncidentTime,
    IncidentMainArea,
    IncidentSubArea,
    IncidentLocationInfo,
    IncidentDescription
  },
  props: {
    defaultValue: {
      type: Object
    }
  },

  setup() {
    const store = useStore();

    return {
      incidentMainArea: computed(() => store.state.incidentData.mainArea)
    };
  }
};
</script>

<style scoped>
</style>