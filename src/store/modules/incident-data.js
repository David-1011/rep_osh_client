import { AT } from '../../constants/action-types';
import moment from 'moment';

const getDefaultState = () => {
  return {
    incidentDate: moment().format('YYYY-MM-DD'),
    incidentTime: moment().format('HH:mm:ss'),
    incidentDescription: '',
    mainArea: '',
    subArea: '',
    additionalLocationInfo: '',
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
    state.additionalLocationInfo = '';
  },
  [AT.setSubArea]: (state, subArea) => (state.subArea = subArea),
  [AT.setAdditionalLocationInfo]: (state, info) =>
    (state.additionalLocationInfo = info),
  [AT.resetIncidentData]: (state) => Object.assign(state, getDefaultState()),
};

const actions = {
  setIncidentDate: ({ commit }, value) => {
    commit(AT.setIncidentDate, value);
  },
  setIncidentTime: ({ commit }, value) => {
    commit(AT.setIncidentTime, value);
  },
  setIncidentDescription: ({ commit }, value) => {
    commit(AT.setIncidentDescription, value);
  },
  setMainArea: ({ commit }, value) => {
    commit(AT.setMainArea, value);
  },
  setSubArea: ({ commit }, value) => {
    commit(AT.setSubArea, value);
  },
  setAdditionalLocationInfo: ({ commit }, value) => {
    commit(AT.setAdditionalLocationInfo, value);
  },
  resetIncidentData: ({ commit }) => {
    commit(AT.resetIncidentData);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
