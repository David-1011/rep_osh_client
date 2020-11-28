<template>
  <div class="container">
    <h1>Verbandsbucheintrag</h1>

    <form class="row g-3 mt-1">
      <div class="col-sm-12 col-md-4">
        <PersonalData />
      </div>
      <div class="col-sm-12 col-md-8">
        <IncidentData />
      </div>
      <div class="col-12">
        <InjuryData />
      </div>

      <div class="card">
        <div class="card-body">
          <button @click="test" type="button" class="btn btn-primary">
            Absenden
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
import PersonalData from "../components/PersonalData";
import IncidentData from "../components/IncidentData";
import InjuryData from "../components/InjuryData";
import { mapActions, mapState } from "vuex";
export default {
  name: "Incident",
  components: {
    PersonalData,
    IncidentData,
    InjuryData
  },
  computed: {
    ...mapState({
      personalData: state => state.personalData,
      incidentData: state => state.incidentData,
      injuryData: state => state.injuryData
    })
  },
  methods: {
    ...mapActions([
      "setPerErrors",
      "setIncErrors",
      "setInjErrors",
      "postIncident"
    ]),
    test() {
      const perErrors = [];
      this.setPerErrors(perErrors);
      if (
        this.personalData.injured.firstName.length == 0 ||
        this.personalData.injured.lastName.length == 0
      ) {
        perErrors.push({ msg: "Bitte geben Sie ihren Vor- und Nachnamen an." });
      }
      if (
        (this.personalData.witness.firstName.length == 0 ||
          this.personalData.witness.lastName.length == 0) &&
        !this.personalData.witness.noWitness
      ) {
        perErrors.push({
          msg:
            "Bitte geben Sie Vor- und Nachnamen eines Zeugen an oder bestätigen Sie, dass kein Zeuge vorhanden ist."
        });
      }
      if (perErrors.length > 0) {
        this.setPerErrors(perErrors);
      }

      const incErrors = [];
      this.setIncErrors(incErrors);
      const mom = moment(
        this.incidentData.incidentDate + " " + this.incidentData.incidentTime
      );
      if (mom.isAfter(moment())) {
        incErrors.push({ msg: "Bitte geben Sie ein gültigen Zeitpunkt an." });
      }
      if (this.incidentData.incidentDescription.length === 0) {
        incErrors.push({ msg: "Bitte geben Sie ein Unfallbeschreibung an." });
      }
      if (this.incidentData.subArea === "") {
        incErrors.push({
          msg: "Bitte machen Sie Angaben zu Bereich und Unterkategorie."
        });
      }
      if (incErrors.length > 0) {
        this.setIncErrors(incErrors);
      }

      const injErrors = [];
      this.setInjErrors(injErrors);
      if (this.injuryData.spots.length == 0) {
        injErrors.push({
          msg: "Bitte geben Sie mindestens einen Verletzungsbereich an."
        });
      }
      if (this.injuryData.types.length == 0) {
        injErrors.push({
          msg: "Bitte geben Sie mindestens eine Verletzungsart an."
        });
      }

      if (
        perErrors.length === 0 &&
        incErrors.length === 0 &&
        injErrors.length === 0
      ) {
        this.postIncident();
      }
    }
  }
};
</script>

<style>
</style>