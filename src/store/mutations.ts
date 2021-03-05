export default {
    appendFav: (state, drink) => {
        state.favorites.push(drink)
    },
    excludeFav: (state, id) => {
        console.log('excludeFav', id)
        state.favorites = state.favorites.filter(
            (drink) => drink.idDrink !== id,
        )
    },
}