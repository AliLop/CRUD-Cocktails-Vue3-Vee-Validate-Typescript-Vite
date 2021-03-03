<template>
    <div class="Details" v-if="drink">
        <img alt="Cocktail image" :src="imgUrl({drink})" />
        <h4>Name: {{ drink.strDrink }}</h4>
        <h5>Category: {{ drink.strCategory }}</h5>
        <h5>Glass: {{ drink.strGlass }}</h5>
        <h5>Instructions: {{ drink.strInstructions }}</h5>
    </div>
    <div v-else>
        <p>Loading details...</p>
        <p>The drink id is {{ $route.params.id }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: "Details",
    data() {
        return {
            id: this.$route.params.id,
            drink: null,
        }
    },
    methods: {
        imgUrl({drink}) {
            return `${drink.strDrinkThumb}/preview`
        },
     },
    beforeMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.id, {
        method: 'get'
        })
        .then((response) => {
        return response.json()
        })
        .then((jsonData) => {
        this.drink = jsonData.drinks[0];
        // console.log(this.drink)
        })
        .catch((error) => {
        console.log('error: ', error.message)
        });
    }
});
</script>