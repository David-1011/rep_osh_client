<template>
  <div class="container">
    <EditPersonData
      v-for="e in getPeopleIds"
      :key="e"
      :incidentId="id"
      :personId="e"
    />
  </div>
</template>

<script>
import EditPersonData from "../components/ui/EditPersonData";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditIncident",
  components: {
    EditPersonData
  },
  data() {
    return {
      id: ""
    };
  },
  methods: {
    ...mapActions(["fetchIncidents", "setIncident"])
  },
  created() {
    this.id = this.$route.params.id;
    const moderatorStore = this.$store.state.moderatorData.incidents.length;
    if (moderatorStore != 0) {
      const p = this.$store.getters.getIncident(this.id);
      if (p !== undefined) {
        this.setIncident(p);
      }
    } else {
      this.fetchIncidents().then(() => {
        const p = this.$store.getters.getIncident(this.id);
        if (p !== undefined) {
          this.setIncident(p);
        }
      });
    }
  },
  computed: {
    ...mapGetters(["getPeopleIds"])
  }
};
</script>

<style>
</style>