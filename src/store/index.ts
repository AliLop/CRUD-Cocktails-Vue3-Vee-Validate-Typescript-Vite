
import { useFormValues } from 'vee-validate';
import { createStore } from 'vuex';
import favs from '../../data/db.json';

export const store = createStore({
    state: {
            favorites: favs.favorites,
            count: favs.favorites.length,
    },
    mutations: {
        appendFav(state, newFav) {
            let found = false;
            for (let i = state.favorites.length -1; i >= 0; i--) {
                if (state.favorites[i].idDrink == newFav.idDrink) {
                    found = true;
                    alert('already a favorite!')
                    break;
                }
            }
            if(!found) {
                state.favorites.push(newFav)
                state.count++
            }
        },
        excludeFav(state, drink) {
            state.count--
            for (let i = state.favorites.length -1; i >= 0; i--) {
                if (state.favorites[i].idDrink === drink.idDrink) {
                    state.favorites.splice([i], 1);
                }
            }
            
        }
     },
    actions: {
        addFav({ commit }, { drink }) {
            commit("appendFav", drink);
        },
        removeFav({ commit }, { favorite }) {
            commit("excludeFav", favorite)
        }
    }

//     getters: {
//         counter(state) {
//             return state.counter;
//         }
//     },
//     modules: {}
 });