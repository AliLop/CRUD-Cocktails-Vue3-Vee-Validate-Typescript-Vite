export default {
    favoritesCount: (state) => {
      console.log('favoritesCount', state.favorites)
      return state.favorites.length;
    },
    isDrinkFavorite: (state) => (id) => {
      console.log('isDrinkFavorite', id)
      return state.favorites.map((drink) => drink.idDrink).includes(id);
    },
};