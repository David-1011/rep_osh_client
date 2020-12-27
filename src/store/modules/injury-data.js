import { ACTION_TYPES } from '../../constants/action-types';

const defaultState = {
  spots: [],
  types: [],
};

const state = defaultState;

const mutations = {
  [ACTION_TYPES.setInjurySpots]: (state, value) => (state.spots = value),
  [ACTION_TYPES.setInjuryTypes]: (state, value) => (state.types = value),
  [ACTION_TYPES.resetInjuryData]: (state) => Object.assign(state, defaultState),
};

const actions = {
  setInjurySpots: ({ commit }, e) => {
    commit(ACTION_TYPES.setInjurySpots, e);
  },
  setInjuryTypes: ({ commit }, e) => {
    commit(ACTION_TYPES.setInjuryTypes, e);
  },
  resetInjuryData: ({ commit }) => {
    commit(ACTION_TYPES.resetInjuryData);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
