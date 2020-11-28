<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">3. Verletzungsbeschreibung</h5>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div>
            <label for="injurySpot1" class="form-label"
              >Verletzungsbereich</label
            >
            <select
              id="injurySpot1"
              size="8"
              class="form-select"
              multiple
              v-model="spots"
            >
              <option
                v-for="spot in AllInjurySpots"
                :key="spot.injurySpotId"
                :value="spot.injurySpotId"
              >
                {{ spot.injurySpotText }}
              </option>
            </select>
          </div>
          <div>
            <label for="injuryType1" class="form-label">Verletzungsart</label>
            <select
              id="injuryType1"
              size="8"
              class="form-select"
              multiple
              v-model="types"
            >
              <option
                v-for="type in AllInjuryTypes"
                :key="type.injuryTypeId"
                :value="type.injuryTypeId"
              >
                {{ type.injuryTypeText }}
              </option>
            </select>
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
      <p @click="test" class="d-none d-md-block mt-2">
        <small>
          Zur Mehrfachauswahl auf Desktop-PCs "Strg"-Taste gedrückt halten.
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "InjuryData",
  computed: {
    types: {
      get() {
        return this.$store.state.injuryData.types;
      },
      set(value) {
        this.setInjuryTypes(value);
      }
    },
    spots: {
      get() {
        return this.$store.state.injuryData.spots;
      },
      set(value) {
        this.setInjurySpots(value);
      }
    },

    ...mapGetters(["AllInjurySpots", "AllInjuryTypes"]),
    ...mapState({
      errors: state => state.injuryData.errors
    })
  },
  methods: {
    ...mapActions([
      "fetchInjurySpot",
      "fetchInjuryType",
      "setInjurySpots",
      "setInjuryTypes"
    ]),
    test() {
      console.log(this.$store.state);
    }
  },
  created() {
    this.fetchInjurySpot();
    this.fetchInjuryType();
  }
};
</script>

<style>
</style>