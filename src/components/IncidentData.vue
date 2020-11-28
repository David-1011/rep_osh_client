<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h5 class="card-title">2. Unfalldaten</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <IncidentDateInput />
          <IncidentTimeInput />
        </div>
        <div class="col-sm-12 col-md-6">
          <MainAreaSelector />
          <SubAreaSelector v-if="incidentMainArea !== ''" />
          <IncidentAdditionalLocationInfo v-if="incidentMainArea !== ''" />
        </div>
        <div class="col-12">
          <IncidentDescriptionTextArea />
        </div>
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