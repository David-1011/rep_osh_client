import { AT } from '../constants/action-types';
import { getDefaultState } from './state';

export const STORAGE_KEY = 'osh';

export const mutations = {
  [AT.inciRequest](state) {
    state.status = 'loading';
  },
  [AT.inciSuccess](state) {
    state.status = 'success';
  },
  [AT.inciError](state, validation) {
    (state.status = 'error'), (state.validation = validation);
  },
  [AT.resetValidation](state) {
    Object.assign(state, getDefaultState());
  },
};
