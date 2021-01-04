import axios from 'axios';
import authHeader from '../../services/auth-header';

import { AT } from '../../constants/action-types';
import { API_URL } from '../../constants/api';

const getDefaultState = () => {
  const initialState = {
    status: '',
    incidents: [],
  };
  return initialState;
};

const state = getDefaultState();

const mutations = {
  [AT.inciRequest](state) {
    state.status = 'loading';
  },
  [AT.inciSuccess](state, value) {
    (state.incidents = value), (state.status = 'success');
  },
  [AT.inciError](state) {
    state.status = 'error';
  },
};

const actions = {
  fetchIncidents: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AT.inciRequest);
      axios
        .get(`${API_URL}/event/incidents`, { headers: authHeader() })
        .then((resp) => {
          commit(AT.inciSuccess, resp.data);
          resolve(resp);
        })
        .catch((err) => {
          commit(AT.inciError);
          reject(err);
        });
    });
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
