import { ACTION_TYPES } from '../../constants/action-types';
import AdminService from '../../services/admin.service';

const getDefaultState = () => {
  const initialState = {
    incident: {
      eveEventPeople: [],
    },
    loading: [],
  };
  return initialState;
};

const state = getDefaultState();

const mutations = {
  [ACTION_TYPES.setIncident]: (state, incident) => (state.incident = incident),

  [ACTION_TYPES.setLoad]: (state, value) => {
    const i = state.loading.findIndex((x) => x.id == value.id);
    if (i != -1) {
      state.loading[i].loading = value.status;
    } else {
      state.loading.push({ id: value.id, loading: value.status });
    }
  },

  [ACTION_TYPES.setPersonData]: (state, value) => {
    const i = state.incident.eveEventPeople.findIndex((x) => x.id == value.id);
    state.incident.eveEventPeople[i].firstName = value.firstName;
    state.incident.eveEventPeople[i].lastName = value.lastName;
    console.log(state);
  },
};

const actions = {
  setIncident: async ({ commit }, incident) => {
    commit(ACTION_TYPES.setIncident, incident);
  },

  setPersonData: async ({ commit }, person) => {
    AdminService.patchPerson(person).then(
      () => {
        commit(ACTION_TYPES.setPersonData, person);
        return Promise.resolve('Success');
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    );
  },
};

const getters = {
  PersonDataById: (state) => (incId, perId) => {
    const person = state.incident.eveEventPeople.find(
      (per) => per.id === perId
    );
    return person;
  },
  LoadingById: (state) => (id) => {
    return state.loading.find((loa) => loa.id === id);
  },
  getPeopleIds: (state) => {
    return state.incident.eveEventPeople.map((peo) => peo.id);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
