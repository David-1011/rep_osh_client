import { AT } from '../../constants/action-types';

const getDefaultState = () => {
  return {
    spots: [],
    types: [],
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setInjurySpots]: (state, value) => (state.spots = value),
  [AT.setInjuryTypes]: (state, value) => (state.types = value),
  [AT.resetInjuryData]: (state) => {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  setInjurySpots: ({ commit }, e) => {
    commit(AT.setInjurySpots, e);
  },
  setInjuryTypes: ({ commit }, e) => {
    commit(AT.setInjuryTypes, e);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
