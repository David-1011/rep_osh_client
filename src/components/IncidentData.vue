<template>
  <div class="card h-100">
    <div class="card-header text-white bg-success">2. Unfalldaten</div>
    <div class="card-body">
      <div class="d-flex flex-column flex-md-row">
        <div class="col d-flex flex-column me-md-3">
          <IncidentDateInput />
          <IncidentTimeInput />
        </div>
        <div class="col d-flex flex-column ms-md-3">
          <MainAreaSelector />
          <SubAreaSelector v-if="incidentMainArea !== ''" />
          <IncidentAdditionalLocationInfo v-if="incidentMainArea !== ''" />
        </div>
      </div>
      <IncidentDescriptionTextArea />

      <div class="row">
        <div class="col-sm-12 col-md-6"></div>
        <div class="col-sm-12 col-md-6"></div>
        <div class="col-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IncidentDateInput from "./ui/IncidentDateInput";
import IncidentTimeInput from "./ui/IncidentTimeInput";
import MainAreaSelector from "./ui/MainAreaSelector";
import SubAreaSelector from "./ui/SubAreaSelector";
import IncidentAdditionalLocationInfo from "./ui/IncidentAdditionalLocationInfoInput";
import IncidentDescriptionTextArea from "./ui/IncidentDescrpiontTextArea";
export default {
  name: "IncidentData",
  components: {
    IncidentDateInput,
    IncidentTimeInput,
    MainAreaSelector,
    SubAreaSelector,
    IncidentAdditionalLocationInfo,
    IncidentDescriptionTextArea
  },
  computed: {
    incidentMainArea: {
      get() {
        return this.$store.state.incidentData.mainArea;
      }
    }
  }
};
</script>

<style scoped>
</style>