import { ACTION_TYPES } from '../../constants/action-types';
import axios from 'axios';

const state = {
  mainAreas: [],
  subAreas: [],
  injurySpots: [],
  injuryTypes: [],
};

const mutations = {
  [ACTION_TYPES.fetchAreas]: (state, mainAreas) =>
    (state.mainAreas = mainAreas),
  [ACTION_TYPES.fetchSubAreas]: (state, subAreas) =>
    (state.subAreas = subAreas),
  [ACTION_TYPES.fetchInjurySpot]: (state, injurySpots) =>
    (state.injurySpots = injurySpots),
  [ACTION_TYPES.fetchInjuryType]: (state, injuryTypes) =>
    (state.injuryTypes = injuryTypes),
};

const actions = {
  fetchMainAreas: async ({ commit }) => {
    if (state.mainAreas.length === 0) {
      axios
        .get('https://osh-restapi.azurewebsites.net/api/masterdata/mainAreas/')
        .then((res) => {
          commit(ACTION_TYPES.fetchAreas, res.data);
        })
        .catch((err) => console.log(err.message));
    }
  },
  fetchSubAreas: async ({ commit }) => {
    if (state.subAreas.length === 0) {
      axios
        .get('https://osh-restapi.azurewebsites.net/api/masterdata/subAreas/')
        .then((res) => {
          commit(ACTION_TYPES.fetchSubAreas, res.data);
        })
        .catch((err) => console.log(err.message));
    }
  },
  fetchInjurySpot: async ({ commit }) => {
    if (state.injurySpots.length === 0) {
      const response = await axios.get(
        'https://osh-restapi.azurewebsites.net/api/masterdata/injurySpots/'
      );
      commit(ACTION_TYPES.fetchInjurySpot, response.data);
    }
  },
  fetchInjuryType: async ({ commit }) => {
    if (state.injuryTypes.length === 0) {
      const response = await axios.get(
        'https://osh-restapi.azurewebsites.net/api/masterdata/injuryTypes/'
      );
      commit(ACTION_TYPES.fetchInjuryType, response.data);
    }
  },
};

const getters = {
  AllMainAreas: (state) => state.mainAreas,
  SubAreas: (state) => (picked, mainAreas) => {
    const filter = picked === '' ? mainAreas : picked;
    return state.subAreas.filter((sub) => sub.mainAreaParentId === filter);
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
