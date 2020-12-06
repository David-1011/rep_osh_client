import { createStore } from 'vuex';
import axios from 'axios';
import masterData from './modules/master-data';
import personalData from './modules/personal-data';
import incidentData from './modules/incident-data';
import injuryData from './modules/injury-data';
import authData from './modules/auth-data';

import router from '../router';

const state = {};

const mutations = {
  test: (state, value) => {
    console.log(state);
    console.log(value);
  },
};

const actions = {
  postIncident: async () => {
    const params = {
      personalData: personalData.state,
      incidentData: incidentData.state,
      injuryData: injuryData.state,
    };
    axios
      .post('https://osh-restapi.azurewebsites.net/api/incidents/', params)
      .then(() => {
        store.dispatch('resetPersonalData');
        store.dispatch('resetIncidentData');
        store.dispatch('resetInjuryData');
        router.push('/about');
      })
      .catch((err) => console.log(err));
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  modules: { masterData, personalData, incidentData, injuryData, authData },
});

export default store;
