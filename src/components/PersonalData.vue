<template>
  <div class="card">
    <div class="card-header text-white bg-tkTurquoise">
      1. Persönliche Informationen
    </div>
    <div class="card-body">
      <div class="d-flex flex-column">
        <div class="flex-fill"><PersonInjured /></div>
        <div class="flex-fill"><PersonWitness /></div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonInjured from "./ui/PersonalInputInjured";
import PersonWitness from "./ui/PersonalInputWitness";

export default {
  name: "PersonalData",
  components: {
    PersonInjured,
    PersonWitness
  }
};
</script>

<style>
</style>