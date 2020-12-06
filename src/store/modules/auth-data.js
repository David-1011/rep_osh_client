import { ACTION_TYPES } from '../../constants/action-types';
import AuthService from '../../services/auth.service';

const getDefaultState = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };
  return initialState;
};

const state = getDefaultState();

const mutations = {
  [ACTION_TYPES.loginSuccess]: (state, user) => {
    (state.status.loggedIn = true), (state.user = user);
  },
  [ACTION_TYPES.loginFailure]: (state) => {
    (state.status.loggedIn = false), (state.user = null);
  },
  [ACTION_TYPES.logout]: (state) => {
    (state.status.loggedIn = false), (state.user = null);
  },
  [ACTION_TYPES.registerSuccess]: (state) => (state.status.loggedIn = false),
  [ACTION_TYPES.registerFailure]: (state) => (state.status.loggedIn = false),
};

const actions = {
  login({ commit }, user) {
    return AuthService.login(user)
      .then((user) => {
        commit(ACTION_TYPES.loginSuccess, user);
        return Promise.resolve(user);
      })
      .catch((err) => {
        commit(ACTION_TYPES.loginFailure);
        return Promise.reject(err);
      });
  },
  logout({ commit }) {
    AuthService.logout();
    commit(ACTION_TYPES.logout);
  },
  register({ commit }, user) {
    return AuthService.register(user)
      .then((res) => {
        commit(ACTION_TYPES.registerSuccess);
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        commit(ACTION_TYPES.registerFailure);
        return Promise.resolve(err);
      });
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
