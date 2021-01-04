<template>
  <div class="card">
    <div class="card-header bg-success text-white">
      <div class="d-inline me-auto">Verletzte Person</div>
      <div
        v-if="locked && !loading"
        class="d-inline float-end px-1"
        @click="unlockInput"
      >
        <font-awesome-icon icon="edit" />
      </div>

      <div v-if="edit" class="d-inline float-end px-1" @click="undoChanges">
        <font-awesome-icon icon="window-close" />
      </div>
      <div v-if="edit" class="d-inline float-end px-1" @click="saveChanges">
        <font-awesome-icon icon="save" />
      </div>
      <div v-if="loading" class="d-inline float-end px-1" @click="undoChanges">
        <font-awesome-icon icon="spinner" pulse />
      </div>
    </div>
    <div class="card-body row">
      <div class="col-4">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="firstName1"
            v-model="person.firstName"
            :disabled="locked"
          />
          <label for="firstName1">Vorname</label>
        </div>
      </div>
      <div class="col-4">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="lastName1"
            v-model="person.lastName"
            :disabled="locked"
          />
          <label for="lastName1">Nachname</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EditPersonData",
  props: ["personId", "incidentId"],
  data() {
    return {
      id: this.incidentId,
      locked: true,
      edit: false,
      loading: false,
      person: {
        firstName: "",
        lastName: "",
        id: this.personId
      }
    };
  },
  created() {
    const p = this.$store.getters.PersonDataById(this.id, this.person.id);
    this.person.firstName = p.firstName;
    this.person.lastName = p.lastName;
  },
  methods: {
    ...mapActions(["setPersonData"]),
    unlockInput() {
      this.edit = true;
      this.locked = false;
    },
    undoChanges() {
      this.edit = false;
      this.locked = true;
      const p = this.$store.getters.PersonDataById(this.id, this.person.id);
      this.person.firstName = p.firstName;
      this.person.lastName = p.lastName;
    },
    saveChanges() {
      this.edit = false;
      this.locked = true;
      this.loading = true;
      const p = this.$store.getters.PersonDataById(this.id, this.person.id);
      if (
        p.firstName != this.person.firstName ||
        p.lastName != this.person.lastName
      ) {
        this.setPersonData(this.person, this.id)
          .then(res => {
            console.log(res);
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style>
</style>