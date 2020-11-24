import { createStore } from 'vuex';
import axios from 'axios';
import masterData from './modules/master-data';
import personalData from './modules/personal-data';
import incidentData from './modules/incident-data';
import injuryData from './modules/injury-data';

const state = {};

const mutations = {
  test: (state, value) => {
    console.log(state);
    console.log(value);
  },
};

const actions = {
  postIncident: async ({ commit }) => {
    const params = {
      message: 'Hi',
      personalData: personalData.state,
      incidentData: incidentData.state,
      injuryData: injuryData.state,
    };
    console.log(params);
    const response = await axios.post(
      'http://localhost:8080/api/incidents/',
      params
    );
    commit('test', response);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  modules: { masterData, personalData, incidentData, injuryData },
});

export default store;
