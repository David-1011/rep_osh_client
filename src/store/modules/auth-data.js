import axios from 'axios';

import { AT } from '../../constants/action-types';
import { API_URL } from '../../constants/api';

const getDefaultState = () => {
  return {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  };
};

const state = getDefaultState();

const mutations = {
  [AT.authRequest](state) {
    state.status = 'loading';
  },
  [AT.authSuccess](state, payload) {
    state.status = 'success';
    state.token = payload.token;
    state.user = payload.user;
  },
  [AT.authError](state) {
    state.status = 'error';
  },
  [AT.logout](state) {
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit(AT.authRequest);
      axios({ url: `${API_URL}/auth/login`, data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.accessToken;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          commit(AT.authSuccess, { token, user });
          resolve(resp);
        })
        .catch((err) => {
          commit(AT.authError);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit(AT.authRequest);
      axios({ url: `${API_URL}/auth/register`, data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit(AT.authSuccess, token, user);
          resolve(resp);
        })
        .catch((err) => {
          commit(AT.authError, err);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      commit(AT.logout);
      resolve();
    });
  },
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
