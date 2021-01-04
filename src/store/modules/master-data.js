import axios from 'axios';

import { AT } from '../../constants/action-types';
import { API_URL } from '../../constants/api';

const state = {
  mainAreas: [],
  subAreas: [],
  injurySpots: [],
  injuryTypes: [],
};

const mutations = {
  [AT.fetchAreas]: (state, mainAreas) => (state.mainAreas = mainAreas),
  [AT.fetchSubAreas]: (state, subAreas) => (state.subAreas = subAreas),
  [AT.fetchInjurySpot]: (state, injurySpots) =>
    (state.injurySpots = injurySpots),
  [AT.fetchInjuryType]: (state, injuryTypes) =>
    (state.injuryTypes = injuryTypes),
};

const actions = {
  fetchMainAreas: async ({ commit }) => {
    if (state.mainAreas.length === 0) {
      axios
        .get(`${API_URL}/mast/mainAreas/`)
        .then((res) => {
          commit(AT.fetchAreas, res.data);
        })
        .catch((err) => console.log(err.message));
    }
  },
  fetchSubAreas: async ({ commit }) => {
    if (state.subAreas.length === 0) {
      axios
        .get(`${API_URL}/mast/subAreas/`)
        .then((res) => {
          commit(AT.fetchSubAreas, res.data);
        })
        .catch((err) => console.log(err.message));
    }
  },
  fetchInjurySpot: async ({ commit }) => {
    if (state.injurySpots.length === 0) {
      const response = await axios.get(`${API_URL}/mast/injurySpots/`);
      commit(AT.fetchInjurySpot, response.data);
    }
  },
  fetchInjuryType: async ({ commit }) => {
    if (state.injuryTypes.length === 0) {
      const response = await axios.get(`${API_URL}/mast/injuryTypes/`);
      commit(AT.fetchInjuryType, response.data);
    }
  },
};

const getters = {
  AllMainAreas: (state) => state.mainAreas,
  SubAreas: (state) => (picked, mainAreas) => {
    const filter = picked === '' ? mainAreas : picked;
    return state.subAreas.filter((sub) => sub.masMainAreaId === filter);
  },
  AllInjurySpots: (state) => state.injurySpots,
  AllInjuryTypes: (state) => state.injuryTypes,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
