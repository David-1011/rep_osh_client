import { createStore } from 'vuex';
import masterData from './modules/master-data';
import personalData from './modules/personal-data';
import incidentData from './modules/incident-data';
import injuryData from './modules/injury-data';
import authData from './modules/auth-data';
import adminData from './modules/admin-data';
import moderatorData from './modules/moderator-data';
import { state } from './state';
import { mutations } from './mutations';
import actions from './actions';
import plugins from './plugins';

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
  plugins,
});

export default store;
