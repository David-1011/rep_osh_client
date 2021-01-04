import { ACTION_TYPES } from '../../constants/action-types';
import ModeratorService from '../../services/moderator.service';

const getDefaultState = () => {
  const initialState = {
    incidents: [],
  };
  return initialState;
};

const state = getDefaultState();

const mutations = {
  [ACTION_TYPES.fetchIncidents]: (state, value) => (state.incidents = value),
};

const actions = {
  fetchIncidents: async ({ commit }) => {
    return ModeratorService.getIncidents().then(
      (incidents) => {
        commit(ACTION_TYPES.fetchIncidents, incidents.data);
        return Promise.resolve('Success');
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  },
};

const getters = {
  getIncident: (state) => (id) => {
    return state.incidents.find((inc) => inc.id === id);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
