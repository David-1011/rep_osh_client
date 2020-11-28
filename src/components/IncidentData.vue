<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h5 class="card-title">Unfalldaten</h5>
          <div>
            <label for="date1" class="form-label">Datum</label>
            <input
              type="date"
              class="form-control"
              id="date1"
              v-model="incidentDate"
              :max="maxDate"
            />
          </div>
          <div>
            <label for="time1" class="form-label">Uhrzeit</label>
            <input
              type="time"
              class="form-control"
              id="time1"
              v-model="incidentTime"
              :max="maxTime"
            />
          </div>
          <div>
            <label for="description1" class="form-label"
              >Unfallbeschreibung</label
            >
            <textarea
              class="form-control"
              id="description1"
              rows="4"
              v-model="incidentDescription"
            ></textarea>
          </div>
          <div>
            <fieldset>
              <div class="row">
                <legend class="col-form-label col-sm-12">Bereich</legend>
                <div class="col-sm-12">
                  <div
                    class="form-check"
                    v-for="area in AllMainAreas"
                    :key="area.mainAreaId"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      :value="area.mainAreaId"
                      :id="area.mainAreaId"
                      :checked="incidentMainArea === area.mainAreaId"
                      v-model="incidentMainArea"
                    />
                    <label class="form-check-label" :for="area.mainAreaId">{{
                      area.mainAreaText
                    }}</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="col-12" v-if="incidentMainArea !== ''">
            <fieldset>
              <div class="row">
                <legend class="col-form-label col-sm-12">Unterkategorie</legend>
                <div class="col-sm-12">
                  <div
                    class="form-check"
                    v-for="sub in SubAreas(incidentMainArea)"
                    :key="sub.subAreaId"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      :value="sub.subAreaId"
                      :id="sub.subAreaId"
                      v-model="incidentSubArea"
                      :checked="incidentSubArea === sub.subAreaId"
                    />
                    <label class="form-check-label" :for="sub.subAreaId">{{
                      sub.subAreaText
                    }}</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="col-12" v-if="incidentMainArea !== ''">
            <label for="locationInfo1" class="form-label"
              >Optionale Ortsbeschreibung</label
            >
            <input
              type="text"
              class="form-control"
              id="locationInfo1"
              autocomplete="off"
              placeholder="Optional"
              v-model="additionalLocationInfo"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6" v-if="errors.length > 0">
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
            v-for="(err, index) in errors"
            :key="index"
          >
            {{ err.msg }}
            <button
              type="button"
              class="btn-close"
              data-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import moment from "moment";
export default {
  name: "IncidentData",
  data() {
    return {
      maxDate: moment().format("YYYY-MM-DD"),
      maxTime: moment().format("HH:mm")
    };
  },
  computed: {
    incidentDate: {
      get() {
        return this.$store.state.incidentData.incidentDate;
      },
      set(value) {
        this.setIncidentDate(value);
      }
    },
    incidentTime: {
      get() {
        return this.$store.state.incidentData.incidentTime;
      },
      set(value) {
        this.setIncidentTime(value);
      }
    },
    incidentDescription: {
      get() {
        return this.$store.state.incidentData.incidentDescription;
      },
      set(value) {
        this.setIncidentDescription(value);
      }
    },
    incidentMainArea: {
      get() {
        return this.$store.state.incidentData.mainArea;
      },
      set(value) {
        this.setMainArea(value);
      }
    },
    incidentSubArea: {
      get() {
        return this.$store.state.incidentData.subArea;
      },
      set(value) {
        this.setSubArea(value);
      }
    },
    additionalLocationInfo: {
      get() {
        return this.$store.state.incidentData.additionalLocationInfo;
      },
      set(value) {
        this.setAdditionalLocationInfo(value);
      }
    },
    ...mapGetters(["AllMainAreas", "SubAreas"]),
    ...mapState({
      errors: state => state.incidentData.errors
    })
  },
  methods: {
    ...mapActions([
      "setIncidentDate",
      "setIncidentTime",
      "setIncidentDescription",
      "setMainArea",
      "setSubArea",
      "setAdditionalLocationInfo",
      "fetchMainAreas",
      "fetchSubAreas"
    ])
  },
  created() {
    this.fetchMainAreas();
    this.fetchSubAreas();
  }
};
</script>

<style scoped>
</style>