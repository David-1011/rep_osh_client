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
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "PersonalInputInjured",

  setup() {
    const store = useStore();

    const valid1 = computed(() => store.state.validation.injuredValid1);

    const valid2 = computed(() => store.state.validation.injuredValid2);

    const firstName1 = computed({
      get: () => {
        return store.state.personalData.people[0].firstName;
      },
      set: value => {
        store.dispatch("setFirstName1", value);
      }
    });

    const lastName1 = computed({
      get: () => {
        return store.state.personalData.people[0].lastName;
      },
      set: value => {
        store.dispatch("setLastName1", value);
      }
    });

    return {
      firstName1,
      lastName1,
      valid1,
      valid2
    };
  }
};
</script>

<style>
</style>