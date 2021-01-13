<template>
  <div>
    <div>
      <label for="input3" class="form-label">Zeuge - Vorname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        id="input3"
        autocomplete="off"
        v-model="firstName2"
      />
    </div>
    <div>
      <label for="input4" class="form-label">Zeuge - Nachname</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        id="input4"
        autocomplete="off"
        v-model="lastName2"
      />
    </div>
    <div class="form-check mt-2">
      <input
        class="form-check-input"
        :class="{ 'is-valid': valid1 == 1, 'is-invalid': valid1 == -1 }"
        type="checkbox"
        id="input5"
        v-model="noWitness"
      />
      <label class="form-check-label" for="input5"> Kein Zeuge</label>
      <div class="invalid-feedback">
        Bitte geben Sie Vor- und Nachnamen eines Zeugen an oder bestätigen Sie,
        dass kein Zeuge vorhanden ist.
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "PersonWitness",
  setup() {
    const store = useStore();

    const valid1 = computed(() => store.state.validation.witnessValid1);

    const firstName2 = computed({
      get: () => {
        return store.state.personalData.people[1].firstName;
      },
      set: value => {
        store.dispatch("setFirstName2", value);
      }
    });

    const lastName2 = computed({
      get: () => {
        return store.state.personalData.people[1].lastName;
      },
      set: value => {
        store.dispatch("setLastName2", value);
      }
    });

    const noWitness = computed({
      get: () => {
        return store.state.personalData.noWitness;
      },
      set: value => {
        store.dispatch("setNoWitness", value);
      }
    });

    return {
      firstName2,
      lastName2,
      noWitness,
      valid1
    };
  }
};
</script>

<style>
</style>