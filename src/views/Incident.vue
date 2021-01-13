<template>
  <div class="container">
    <form class="row g-3 mt-1">
      <div class="col-12">
        <div class="card bg-tkTurquoise text-white">
          <div class="card-body">
            <h3 class="mb-0">Verbandsbucheintrag</h3>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4">
        <PersonalData />
      </div>
      <div class="col-sm-12 col-md-8">
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
              class="btn btn-tkTurquoise text-white"
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
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

  setup() {
    const store = useStore();

    const router = useRouter();

    let loading = false;

    const submitIncident = () => {
      const data = {
        personalData: store.state.personalData,
        incidentData: store.state.incidentData,
        injuryData: store.state.injuryData
      };

      loading = true;

      store.dispatch("resetValidation");
      store
        .dispatch("postIncident", data)
        .then(() => {
          store.dispatch("resetPersonalData");
          store.dispatch("resetIncidentData");
          store.dispatch("resetInjuryData");
          router.push("/message/1");
        })
        .catch(err => {
          loading = false;
          console.log(err.statusText);
        });
    };

    return {
      loading,
      submitIncident
    };
  }
};
</script>

<style>
</style>