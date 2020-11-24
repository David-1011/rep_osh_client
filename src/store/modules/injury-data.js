import { ACTION_TYPES } from '../../constants/action-types';

const state = {
  spots: [],
  types: [],
  errors: [],
};

const mutations = {
  [ACTION_TYPES.setInjurySpots]: (state, value) => (state.spots = value),
  [ACTION_TYPES.setInjuryTypes]: (state, value) => (state.types = value),
  [ACTION_TYPES.setInjErrors]: (state, errors) => (state.errors = errors),
};

const actions = {
  setInjurySpots: ({ commit }, e) => {
    commit(ACTION_TYPES.setInjurySpots, e);
  },
  setInjuryTypes: ({ commit }, e) => {
    commit(ACTION_TYPES.setInjuryTypes, e);
  },
  setInjErrors: ({ commit }, errors) => {
    commit(ACTION_TYPES.setInjErrors, errors);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
