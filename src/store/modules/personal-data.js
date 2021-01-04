import { AT } from '../../constants/action-types';

const getDefaultState = () => {
  return {
    injured: {
      firstName: '',
      lastName: '',
      type: 'Injured',
    },
    witness: {
      firstName: '',
      lastName: '',
      type: 'Witness',
      noWitness: false,
    },
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setFirstName1]: (state, name) => (state.injured.firstName = name),
  [AT.setLastName1]: (state, name) => (state.injured.lastName = name),
  [AT.setFirstName2]: (state, name) => {
    state.witness.firstName = name;
    if (state.witness.lastName.length + state.witness.firstName.length > 0) {
      state.witness.noWitness = false;
    }
  },
  [AT.setLastName2]: (state, name) => {
    state.witness.lastName = name;
    if (state.witness.lastName.length + state.witness.firstName.length > 0) {
      state.witness.noWitness = false;
    }
  },
  [AT.setNoWitness]: (state, noWitness) => {
    state.witness.noWitness = noWitness;
    if (state.witness.noWitness) {
      state.witness.firstName = '';
      state.witness.lastName = '';
    }
  },
  [AT.resetPersonalData]: (state) => Object.assign(state, getDefaultState()),
};

const actions = {
  setFirstName1: ({ commit }, value) => {
    commit(AT.setFirstName1, value);
  },
  setLastName1: ({ commit }, value) => {
    commit(AT.setLastName1, value);
  },
  setFirstName2: ({ commit }, value) => {
    commit(AT.setFirstName2, value);
  },
  setLastName2: ({ commit }, value) => {
    commit(AT.setLastName2, value);
  },
  setNoWitness: ({ commit }, value) => {
    commit(AT.setNoWitness, value);
  },
  resetPersonalData: ({ commit }) => {
    commit(AT.resetPersonalData);
  },
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
