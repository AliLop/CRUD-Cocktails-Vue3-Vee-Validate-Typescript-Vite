<template>
  <h1>Cocktail Details</h1>
  <br/>
    <div class="details-comp">
    <div class="details" v-if="drink">
        <img alt="Cocktail image" :src="imgUrl({drink})" />
        <div class="description">
            <h4>{{ drink.strDrink }}</h4>
            <h5>Category: {{ drink.strCategory }}</h5>
            <h5>Best in {{ drink.strGlass }}</h5>
            <h5>Instructions</h5><p>{{ drink.strInstructions }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading details...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { detailsById } from '../services/Drinks.service';

export default {
    name: "DetailsView",
    data() {
        return {
            id: this.$route.params.id,
            drink: null,
        }
    },
    methods: {
        imgUrl({ drink }) {
            return `${drink.strDrinkThumb}/preview`
        },
     },
    async mounted() {
        const one = await detailsById(this.id);
        if (one.data.drinks.length) this.drink = one.data.drinks[0]
    }
 };
</script>

<style scoped>
.details-comp {
      min-height: 78vh;
}
.details {
  margin: auto;
  background-color: white;
  border-radius: 10px;
  max-width: 30%;
  min-width: 400px;
  display: flex;
}
.description {
    text-align: left;
    margin: 2%;
}
button {
    margin: 20px 0;
    background-color: #eee;
}
</style>
