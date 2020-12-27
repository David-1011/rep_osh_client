<template>
  <div>
    <div>
      <label for="input3" class="form-label">Zeuge - Vorname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        id="input3"
        autocomplete="off"
        v-model="firstName2"
      />
    </div>
    <div>
      <label for="input4" class="form-label">Zeuge - Nachname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        id="input4"
        autocomplete="off"
        v-model="lastName2"
      />
    </div>
    <div class="form-check mt-2">
      <input
        class="form-check-input"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        type="checkbox"
        id="input5"
        v-model="noWitness"
      />
      <label class="form-check-label" for="input5"> Kein Zeuge</label>
      <div class="invalid-feedback">
        Bitte geben Sie Vor- und Nachnamen eines Zeugen an oder bestätigen Sie,
        dass kein Zeuge vorhanden ist.
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PersonWitness",
  computed: {
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
    valid1() {
      return this.$store.state.validation.witnessValid1;
    }
  },
  methods: {
    ...mapActions(["setFirstName2", "setLastName2", "setNoWitness"])
  }
};
</script>

<style>
</style>