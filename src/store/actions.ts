import { Drink } from '../models/drink';

export default {
  addFav: ({ commit }, payload: Drink) => {
    commit('appendFav', payload);
  },
  removeFav: ({ commit }, payload: number) => {
    console.log('removefav', payload);
    commit('excludeFav', payload);
  },
};
