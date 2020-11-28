<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <h5 class="card-title">1. Persönliche Informationen</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Angaben zur verletzten Person
          </h6>
          <div>
            <label for="input1" class="form-label">Vorname</label>
            <input
              type="text"
              class="form-control"
              id="input1"
              autocomplete="off"
              v-model="firstName1"
            />
          </div>
          <div>
            <label for="input2" class="form-label">Nachname</label>
            <input
              type="text"
              class="form-control"
              id="input2"
              autocomplete="off"
              v-model="lastName1"
            />
          </div>
          <h6 class="card-subtitle mb-2 mt-3 text-muted" @click="validateInput">
            Zeuge
          </h6>
          <div>
            <label for="input3" class="form-label">Vorname</label>
            <input
              type="text"
              class="form-control"
              id="input3"
              autocomplete="off"
              v-model="firstName2"
            />
          </div>
          <div>
            <label for="input4" class="form-label">Nachname</label>
            <input
              type="text"
              class="form-control"
              id="input4"
              autocomplete="off"
              v-model="lastName2"
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="input5"
              v-model="noWitness"
            />
            <label class="form-check-label" for="input5"> Kein Zeuge </label>
          </div>
        </div>
        <div class="col-12" v-if="errors.length > 0">
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
import { mapActions, mapState } from "vuex";
export default {
  name: "PersonalData",
  computed: {
    firstName1: {
      get() {
        return this.$store.state.personalData.injured.firstName;
      },
      set(value) {
        this.setFirstName1(value);
      }
    },
    lastName1: {
      get() {
        return this.$store.state.personalData.injured.lastName;
      },
      set(value) {
        this.setLastName1(value);
      }
    },
    firstName2: {
      get() {
        return this.$store.state.personalData.witness.firstName;
      },
      set(value) {
        this.setFirstName2(value);
      }
    },
    lastName2: {
      get() {
        return this.$store.state.personalData.witness.lastName;
      },
      set(value) {
        this.setLastName2(value);
      }
    },
    noWitness: {
      get() {
        return this.$store.state.personalData.witness.noWitness;
      },
      set(value) {
        this.setNoWitness(value);
      }
    },
    ...mapState({
      errors: state => state.personalData.errors
    })
  },
  methods: {
    ...mapActions([
      "setFirstName1",
      "setLastName1",
      "setFirstName2",
      "setLastName2",
      "setNoWitness"
    ])
  }
};
</script>

<style>
</style>