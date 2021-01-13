import { AT } from '../../constants/action-types';

const getDefaultState = () => {
  return {
    injurySpots: [],
    injuryTypes: [],
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setInjurySpots]: (state, value) => (state.injurySpots = value),
  [AT.setInjuryTypes]: (state, value) => (state.injuryTypes = value),
  [AT.resetInjuryData]: (state) => {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  setInjurySpots: ({ commit }, e) => commit(AT.setInjurySpots, e),

  setInjuryTypes: ({ commit }, e) => commit(AT.setInjuryTypes, e),

  resetInjuryData: ({ commit }) => commit(AT.resetInjuryData),
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
