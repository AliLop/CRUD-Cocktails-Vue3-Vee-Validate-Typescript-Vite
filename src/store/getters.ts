import { Drink } from '../models/drink';

export default {
  favoritesCount: (state) => {
    return state.favorites.length;
  },
  isDrinkFavorite: (state) => (id: number) => {
    return state.favorites.map((drink: Drink) => drink.idDrink).includes(id);
  },
};
