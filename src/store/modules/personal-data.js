import { ACTION_TYPES } from '../../constants/action-types';

const state = {
  injured: {
    firstName: '',
    lastName: '',
  },
  witness: {
    firstName: '',
    lastName: '',
    noWitness: false,
  },
  errors: [],
};

const mutations = {
  [ACTION_TYPES.setFirstName1]: (state, name) =>
    (state.injured.firstName = name),
  [ACTION_TYPES.setLastName1]: (state, name) => (state.injured.lastName = name),
  [ACTION_TYPES.setFirstName2]: (state, name) => {
    state.witness.firstName = name;
    if (state.witness.lastName.length + state.witness.firstName.length > 0) {
      state.witness.noWitness = false;
    }
  },
  [ACTION_TYPES.setLastName2]: (state, name) => {
    state.witness.lastName = name;
    if (state.witness.lastName.length + state.witness.firstName.length > 0) {
      state.witness.noWitness = false;
    }
  },
  [ACTION_TYPES.setNoWitness]: (state, noWitness) => {
    state.witness.noWitness = noWitness;
    if (state.witness.noWitness) {
      state.witness.firstName = '';
      state.witness.lastName = '';
    }
  },
  [ACTION_TYPES.setErrors]: (state, errors) => (state.errors = errors),
};

const actions = {
  setFirstName1: ({ commit }, value) => {
    commit(ACTION_TYPES.setFirstName1, value);
  },
  setLastName1: ({ commit }, value) => {
    commit(ACTION_TYPES.setLastName1, value);
  },
  setFirstName2: ({ commit }, value) => {
    commit(ACTION_TYPES.setFirstName2, value);
  },
  setLastName2: ({ commit }, value) => {
    commit(ACTION_TYPES.setLastName2, value);
  },
  setNoWitness: ({ commit }, value) => {
    commit(ACTION_TYPES.setNoWitness, value);
  },
  setPerErrors: ({ commit }, data) => {
    commit(ACTION_TYPES.setErrors, data);
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
