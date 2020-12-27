<template>
  <div class="container">
    <form class="row g-3 mt-1">
      <div class="col-12">
        <div class="card bg-success text-white">
          <div class="card-body">
            <h3 class="mb-0">Verbandsbucheintrag</h3>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <PersonalData />
      </div>
      <div class="col-sm-12 col-md-8">
        <IncidentData />
      </div>
      <div class="col-12">
        <InjuryData />
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <button @click="test" type="button" class="btn btn-success">
              Absenden
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import PersonalData from "../components/PersonalData";
import IncidentData from "../components/IncidentData";
import InjuryData from "../components/InjuryData";
import { mapActions } from "vuex";
export default {
  name: "Incident",
  components: {
    PersonalData,
    IncidentData,
    InjuryData
  },
  methods: {
    ...mapActions(["postIncident"]),
    test() {
      this.postIncident();
    }
  }
};
</script>

<style>
</style>