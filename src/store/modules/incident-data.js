import { ACTION_TYPES } from '../../constants/action-types';
import moment from 'moment';

const getDefaultState = () => {
  return {
    incidentDate: moment().format('YYYY-MM-DD'),
    incidentTime: moment().format('HH:mm:ss'),
    incidentDescription: '',
    mainArea: '',
    subArea: '',
    additionalLocationInfo: '',
    errors: [],
  };
};

const state = getDefaultState();

const mutations = {
  [ACTION_TYPES.setIncidentDate]: (state, date) => (state.incidentDate = date),
  [ACTION_TYPES.setIncidentTime]: (state, time) => (state.incidentTime = time),
  [ACTION_TYPES.setIncidentDescription]: (state, description) =>
    (state.incidentDescription = description),
  [ACTION_TYPES.setMainArea]: (state, mainArea) => {
    state.mainArea = mainArea;
    state.subArea = '';
    state.additionalLocationInfo = '';
  },
  [ACTION_TYPES.setSubArea]: (state, subArea) => (state.subArea = subArea),
  [ACTION_TYPES.setAdditionalLocationInfo]: (state, info) =>
    (state.additionalLocationInfo = info),
  [ACTION_TYPES.setIncErrors]: (state, errors) => (state.errors = errors),
  [ACTION_TYPES.resetIncidentData]: (state) =>
    Object.assign(state, getDefaultState()),
};

const actions = {
  setIncidentDate: ({ commit }, value) => {
    commit(ACTION_TYPES.setIncidentDate, value);
  },
  setIncidentTime: ({ commit }, value) => {
    commit(ACTION_TYPES.setIncidentTime, value);
  },
  setIncidentDescription: ({ commit }, value) => {
    commit(ACTION_TYPES.setIncidentDescription, value);
  },
  setMainArea: ({ commit }, value) => {
    commit(ACTION_TYPES.setMainArea, value);
  },
  setSubArea: ({ commit }, value) => {
    commit(ACTION_TYPES.setSubArea, value);
  },
  setAdditionalLocationInfo: ({ commit }, value) => {
    commit(ACTION_TYPES.setAdditionalLocationInfo, value);
  },
  setIncErrors: ({ commit }, data) => {
    commit(ACTION_TYPES.setIncErrors, data);
  },
  resetIncidentData: ({ commit }) => {
    commit(ACTION_TYPES.resetIncidentData);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
