import { Drink } from "../models/drink";

export default {
    favoritesCount: (state) => {
      console.log('favoritesCount', state.favorites)
      return state.favorites.length;
    },
    isDrinkFavorite: (state) => (id: number) => {
      console.log('isDrinkFavorite', id)
      return state.favorites.map((drink: Drink) => drink.idDrink).includes(id);
    },
};