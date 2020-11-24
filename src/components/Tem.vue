<template>
  <h2>Current</h2>
  {{ personalInformation.injured.firstName }}
  {{ personalInformation.injured.lastName }}
  <br />
  {{ personalInformation.witness.firstName }}
  {{ personalInformation.witness.lastName }}
  <br />
  {{ incidentSubArea }}
  <hr />
  <h2>History</h2>
  <div v-for="name in AllNames" :key="name">
    {{ name }}
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
 name: "Tem",
 computed: {
     ...mapGetters(['AllNames']),
     ...mapState({
       personalInformation: state => state.personalData, 
        incidentSubArea: state => state.incidentData.subarea,})
 },

}
</script>

<style>
</style>