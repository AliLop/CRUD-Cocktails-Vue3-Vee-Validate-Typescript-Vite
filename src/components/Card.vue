<template>
        <div class="card">
            <img alt="Cocktail image" :src="imgUrl(drink)" /> 

            <h4 class="title">{{ drink.strDrink }}</h4>
          
            <router-link 
                :to="{ name: 'DetailsView', params: { id: drink.idDrink } }"
            >
            <button>See details</button>
            </router-link>

            <button class="fav-button"
                v-if="!isDrinkFavorite(drink.idDrink)"
                @click.prevent="addFav(drink)"
                type="button"
            >Add to favorites</button>
            <button class="fav-button"
                v-if="isDrinkFavorite(drink.idDrink)"
                @click.prevent="removeFav(drink.idDrink)"
                type="button"
            >Remove favorite</button>
        </div>
</template>

<script lang="ts">
import { Drink } from '../../models/drink';
import { PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Card',
    props: { drink: { type: Object as PropType<Drink> } },
    methods: {
        imgUrl(drink) {
        return `${drink.strDrinkThumb}/preview`
        },
        ...mapActions([
            'addFav',
            'removeFav'
        ]),
    },
    computed: {
        ...mapGetters([
            'isDrinkFavorite'
        ])
    },
}
</script>
