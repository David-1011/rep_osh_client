import { createStore } from 'vuex';
import axios from 'axios';
import masterData from './modules/master-data';
import personalData from './modules/personal-data';
import incidentData from './modules/incident-data';
import injuryData from './modules/injury-data';
import authData from './modules/auth-data';
import adminData from './modules/admin-data';
import moderatorData from './modules/moderator-data';
import { AT } from '../constants/action-types';

import router from '../router';

const getDefaultState = () => {
  return {
    validation: {
      injuredValid1: 0,
      injuredValid2: 0,
      witnessValid1: 0,
      mainAreaValid: 0,
      subAreaValid: 0,
      descriptionValid: 0,
      spotsValid: 0,
      typesValid: 0,
    },
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setErrors]: (state, validation) => (state.validation = validation),
};

const actions = {
  postIncident: async ({ commit }) => {
    const { injured, witness } = personalData.state;
    const params = {
      personalData: [injured, witness],
      incidentData: incidentData.state,
      injuryData: injuryData.state,
    };

    const response = await axios.post(
      'https://osh-restapi.azurewebsites.net/api/event/incident/',
      params
    );

    if (response.data.msg == 'Validation failed') {
      commit(AT.setErrors, response.data.validation);
    } else {
      router.push('/message/1');
      store.dispatch('resetPersonalData');
      store.dispatch('resetIncidentData');
      store.dispatch('resetInjuryData');
    }
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  modules: {
    masterData,
    personalData,
    incidentData,
    injuryData,
    authData,
    moderatorData,
    adminData,
  },
});

export default store;
