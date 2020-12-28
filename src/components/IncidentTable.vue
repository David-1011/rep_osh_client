<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col" class="text-end">Eintrag erstellt am</th>
        <th scope="col">Bereich</th>
        <th scope="col">Unterkategorie</th>
        <th scope="col">OSH Kategorie</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">Bearbeiten</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in incidents" :key="entry.id">
        <td>{{ type(entry.type) }}</td>
        <td class="text-end">{{ createdAt(entry.createdAt) }}</td>
        <td>{{ entry.mainArea.mainAreaText }}</td>
        <td>{{ entry.subArea.subAreaText }}</td>
        <td>{{ entry.oshCategorie }}</td>
        <td>offen</td>
        <td class="text-center">
          <router-link :to="{ name: 'EditIncident', params: { id: entry.id } }"
            ><font-awesome-icon icon="edit"
          /></router-link>
        </td>
      </tr>
    </tbody>
  </table>

  {{ incidents }}
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";
export default {
  name: "IncidentTable",
  computed: {
    incidents() {
      return this.$store.state.adminData.incidents;
    }
  },
  methods: {
    ...mapActions(["fetchIncidents"]),
    type(id) {
      if (id == "I") {
        return "Verbandsbucheintrag";
      } else {
        return "Unsicherer Zustand";
      }
    },
    createdAt(timestamp) {
      return moment(timestamp).format("HH:mm DD.MM.YYYY");
    }
  },
  created() {
    this.fetchIncidents();
  }
};
</script>

<style>
</style>