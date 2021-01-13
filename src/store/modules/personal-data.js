import { AT } from '../../constants/action-types';

const getDefaultState = () => {
  return {
    people: [
      {
        firstName: '',
        lastName: '',
        type: 'Injured',
      },
      {
        firstName: '',
        lastName: '',
        type: 'Witness',
      },
    ],
    noWitness: false,
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setFirstName1]: (state, name) => (state.people[0].firstName = name),
  [AT.setLastName1]: (state, name) => (state.people[0].lastName = name),
  [AT.setFirstName2]: (state, name) => {
    state.people[1].firstName = name;
    if (
      state.people[1].lastName.length + state.people[1].firstName.length >
      0
    ) {
      state.noWitness = false;
    }
  },
  [AT.setLastName2]: (state, name) => {
    state.people[1].lastName = name;
    if (
      state.people[1].lastName.length + state.people[1].firstName.length >
      0
    ) {
      state.noWitness = false;
    }
  },
  [AT.setNoWitness]: (state, noWitness) => {
    state.noWitness = noWitness;
    if (state.noWitness) {
      state.people[1].firstName = '';
      state.people[1].lastName = '';
    }
  },
  [AT.resetPersonalData]: (state) => Object.assign(state, getDefaultState()),
};

const actions = {
  setFirstName1: ({ commit }, value) => commit(AT.setFirstName1, value),
  setLastName1: ({ commit }, value) => commit(AT.setLastName1, value),
  setFirstName2: ({ commit }, value) => commit(AT.setFirstName2, value),
  setLastName2: ({ commit }, value) => commit(AT.setLastName2, value),
  setNoWitness: ({ commit }, value) => commit(AT.setNoWitness, value),
  resetPersonalData: ({ commit }) => commit(AT.resetPersonalData),
};

const getters = {
  AllNames: (state) => state.names,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
