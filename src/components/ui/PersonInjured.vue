<template>
  <div>
    <div>
      <label for="input1" class="form-label">Verletzte/r - Vorname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        id="input1"
        autocomplete="off"
        v-model="firstName1"
      />
      <div class="invalid-feedback">
        Bitte geben Sie den Vornamen der verletzten Person an.
      </div>
    </div>
    <div>
      <label for="input2" class="form-label">Verletzte/r - Nachname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid2 == 1, 'is-invalid': valid2 == -1 }"
        id="input2"
        autocomplete="off"
        v-model="lastName1"
      />
      <div class="invalid-feedback">
        Bitte geben Sie den Nachnamen der verletzten Person an.
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PersonInjured",
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
    valid1() {
      return this.$store.state.validation.injuredValid1;
    },
    valid2() {
      return this.$store.state.validation.injuredValid2;
    }
  },
  methods: {
    ...mapActions(["setFirstName1", "setLastName1"])
  }
};
</script>

<style>
</style>