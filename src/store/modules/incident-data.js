import { AT } from '../../constants/action-types';
import moment from 'moment';

const getDefaultState = () => {
  return {
    incidentDate: moment().format('YYYY-MM-DD'),
    incidentTime: moment().format('HH:mm:ss'),
    incidentDescription: '',
    mainArea: '',
    subArea: '',
    locationInfo: '',
  };
};

const state = getDefaultState();

const mutations = {
  [AT.setIncidentDate]: (state, date) => (state.incidentDate = date),
  [AT.setIncidentTime]: (state, time) => (state.incidentTime = time),
  [AT.setIncidentDescription]: (state, description) =>
    (state.incidentDescription = description),
  [AT.setMainArea]: (state, mainArea) => {
    state.mainArea = mainArea;
    state.subArea = '';
  },
  [AT.setSubArea]: (state, subArea) => (state.subArea = subArea),
  [AT.setLocationInfo]: (state, info) => (state.locationInfo = info),
  [AT.resetIncidentData]: (state) => Object.assign(state, getDefaultState()),
};

const actions = {
  setIncidentDate: ({ commit }, value) => commit(AT.setIncidentDate, value),

  setIncidentTime: ({ commit }, value) => commit(AT.setIncidentTime, value),

  setMainArea: ({ commit }, value) => commit(AT.setMainArea, value),

  setSubArea: ({ commit }, value) => commit(AT.setSubArea, value),

  setLocationInfo: ({ commit }, value) => commit(AT.setLocationInfo, value),

  setIncidentDescription: ({ commit }, value) =>
    commit(AT.setIncidentDescription, value),
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
