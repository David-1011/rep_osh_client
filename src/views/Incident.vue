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
        {{ defMainArea }} {{ defSubArea }} {{ defInfo }}
        <IncidentData
          :default-value="{
            defMainArea,
            defSubArea,
            defInfo,
          }"
        />
      </div>
      <div class="col-12">
        <InjuryData />
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <button
              @click="submitIncident"
              type="button"
              class="btn btn-success"
              :disabled="loading"
            >
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
import { mapActions, mapMutations } from "vuex";
import { AT } from "../constants/action-types";
export default {
  name: "Incident",
  components: {
    PersonalData,
    IncidentData,
    InjuryData
  },
  props: {
    defMainArea: {
      type: String,
      default: ""
    },
    defSubArea: {
      type: String,
      default: ""
    },
    defInfo: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    params() {
      return this.$route.query;
    }
  },
  methods: {
    ...mapActions(["postIncident"]),
    ...mapMutations({
      resetPersonalData: AT.resetPersonalData,
      resetIncidentData: AT.resetIncidentData,
      resetInjuryData: AT.resetInjuryData,
      resetValidation: AT.resetValidation
    }),
    submitIncident() {
      this.loading = true;
      this.resetValidation();
      this.postIncident()
        .then(() => {
          this.resetPersonalData();
          this.resetIncidentData();
          this.resetInjuryData();
          this.$router.push("/message/1");
        })
        .catch(err => {
          this.loading = false;
          console.log(err.statusText);
        });
    }
  }
};
</script>

<style>
</style>