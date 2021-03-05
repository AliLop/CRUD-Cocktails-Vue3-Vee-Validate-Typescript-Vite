import { Drink } from "../models/drink"

export default {
    appendFav: (state, drink: Drink) => {
        state.favorites.push(drink)
    },
    excludeFav: (state, id: number) => {
        console.log('excludeFav', id)
        state.favorites = state.favorites.filter(
            (drink) => drink.idDrink !== id,
        )
    },
}