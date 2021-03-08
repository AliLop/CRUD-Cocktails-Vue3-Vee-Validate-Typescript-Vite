import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const store = createStore({
  state: {
    favorites: [],
  },
  mutations,
  actions,
  getters,
});
