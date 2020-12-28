<template>
  <div class="container">
    <EditPersonData
      v-for="e in peopleIds"
      :key="e"
      :incidentId="id"
      :personId="e"
    />
  </div>
</template>

<script>
import EditPersonData from "../components/ui/EditPersonData";
export default {
  name: "EditIncident",
  components: {
    EditPersonData
  },
  data() {
    return {
      id: "",
      peopleIds: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    const p = this.$store.getters.PeopleIds(this.id);
    this.peopleIds = p;
  }
};
</script>

<style>
</style>