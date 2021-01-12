import { AT } from '../../constants/action-types';
import { API_URL } from '../../constants/api';

const state = {
  mainAreas: [],
  subAreas: [],
  injurySpots: [],
  injuryTypes: [],
};

const mutations = {
  [AT.fetchMainAreas]: (state, mainAreas) => (state.mainAreas = mainAreas),
  [AT.fetchSubAreas]: (state, subAreas) => (state.subAreas = subAreas),
  [AT.fetchInjurySpots]: (state, injurySpots) =>
    (state.injurySpots = injurySpots),
  [AT.fetchInjuryTypes]: (state, injuryTypes) =>
    (state.injuryTypes = injuryTypes),
};

const actions = {
  fetchMainAreas({ commit }) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/mast/mainAreas/`)
        .then((res) => res.json())
        .then((res) => {
          commit(AT.fetchMainAreas, res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },

  fetchSubAreas({ commit }) {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/mast/subAreas/`)
        .then((res) => res.json())
        .then((res) => {
          commit(AT.fetchSubAreas, res);
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject();
        });
    });
  },

  fetchInjurySpots({ commit }) {
    fetch(`${API_URL}/mast/injurySpots/`)
      .then((res) => res.json())
      .then((res) => {
        commit(AT.fetchInjurySpots, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  fetchInjuryTypes({ commit }) {
    fetch(`${API_URL}/mast/injuryTypes/`)
      .then((res) => res.json())
      .then((res) => {
        commit(AT.fetchInjuryTypes, res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const getters = {
  subAreas: (state) => (picked, mainAreas) => {
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
