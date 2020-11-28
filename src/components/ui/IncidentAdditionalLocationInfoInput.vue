<template>
  <div>
    <label for="addInfo1" class="form-label">Weitere Ortsangaben</label>
    <input
      type="text"
      class="form-control"
      id="addInfo1"
      autocomplete="off"
      placeholder="Optional"
      v-model="additionalLocationInfo"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "IncidentAddtionalLocationInfoInput",
  computed: {
    additionalLocationInfo: {
      get() {
        return this.$store.state.incidentData.additionalLocationInfo;
      },
      set(value) {
        this.setAdditionalLocationInfo(value);
      }
    }
  },
  methods: {
    ...mapActions(["setAdditionalLocationInfo"])
  }
};
</script>

<style>
</style>