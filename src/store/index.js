import { createStore } from 'vuex';
import axios from 'axios';
import masterData from './modules/master-data';
import personalData from './modules/personal-data';
import incidentData from './modules/incident-data';
import injuryData from './modules/injury-data';
import authData from './modules/auth-data';
import { ACTION_TYPES } from '../constants/action-types';

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
  [ACTION_TYPES.setErrors]: (state, validation) => {
    console.log(validation);
    state.validation.injuredValid1 = validation.injuredValid1;
    state.validation.injuredValid2 = validation.injuredValid2;
    state.validation.witnessValid1 = validation.witnessValid1;
    state.validation.mainAreaValid = validation.mainAreaValid;
    state.validation.subAreaValid = validation.subAreaValid;
    state.validation.descriptionValid = validation.descriptionValid;
    state.validation.spotsValid = validation.spotsValid;
    state.validation.typesValid = validation.typesValid;
  },
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
      commit(ACTION_TYPES.setErrors, response.data.validation);
    } else {
      router.push('/about');
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
  modules: { masterData, personalData, incidentData, injuryData, authData },
});

export default store;
