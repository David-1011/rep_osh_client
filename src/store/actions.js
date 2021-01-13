import { AT } from '../constants/action-types';
import { API_URL } from '../constants/api';

export default {
  postIncident({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit(AT.inciRequest);

      const fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      fetch(`${API_URL}/event/incident/`, fetchData)
        .then((res) => {
          if (res.ok) {
            return res;
          }
          throw res;
        })
        .then((res) => {
          commit(AT.inciSuccess);
          resolve(res);
        })
        .catch((err) => {
          if (err.status === 422) {
            err.json().then((res) => {
              commit(AT.inciError, res);
              reject(err);
            });
          } else {
            reject(err);
          }
        });
    });
  },

  resetValidation: ({ commit }) => commit(AT.resetValidation),
};
