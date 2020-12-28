<template>
  <div class="card">
    <div class="card-header bg-success text-white">
      <div class="d-inline me-auto">Verletzte Person</div>
      <div v-if="!editing" class="d-inline float-end px-1" @click="unlockInput">
        <font-awesome-icon icon="edit" />
      </div>

      <div v-if="editing" class="d-inline float-end px-1" @click="saveChanges">
        <font-awesome-icon icon="save" />
      </div>
      <div v-if="editing" class="d-inline float-end px-1" @click="undoChanges">
        <font-awesome-icon icon="window-close" />
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
            :disabled="!editing"
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
            :disabled="!editing"
          />
          <label for="lastName1">Nachname</label>
        </div>
      </div>
      {{ id }} {{ person.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPersonData",
  props: ["personId", "incidentId"],
  data() {
    return {
      id: this.incidentId,
      editing: false,
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
    unlockInput() {
      this.editing = true;
    },
    undoChanges() {
      this.editing = false;
      const p = this.$store.getters.InjuredDataById(this.id);
      this.person.firstName = p.firstName;
      this.person.lastName = p.lastName;
    },
    saveChanges() {
      console.log(this.person);
      this.editing = false;
    }
  }
};
</script>

<style>
</style>