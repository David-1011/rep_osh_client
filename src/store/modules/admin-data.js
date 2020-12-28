import { ACTION_TYPES } from '../../constants/action-types';
import UserService from '../../services/user.service';

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
    return UserService.getIncidents().then(
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
  PersonDataById: (state) => (incId, perId) => {
    const incident = state.incidents.find((inc) => inc.id === incId);
    const person = incident.people.find((per) => per.id === perId);
    return person;
  },
  PeopleIds: (state) => (id) => {
    const incident = state.incidents.find((inc) => inc.id === id);
    const ids = incident.people.map((peo) => peo.id);
    return ids;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
