<template>
  <h1>Cocktail Details</h1>
  <br/>
    <div class="details-comp">
    <div class="details" v-if="drink">
        <img alt="Cocktail image" :src="imgUrl({drink})" />
        <div class="description">
            <h4>{{ drink.strDrink }}</h4>
            <h5>Category: {{ drink.strCategory }}</h5>
            <h5>Glass: {{ drink.strGlass }}</h5>
            <h5>Instructions</h5><p>{{ drink.strInstructions }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading details...</p>
    </div>
  </div>
</template>

<script lang="ts">


export default {
    name: "DetailsView",
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
        })
        .catch((error) => {
        console.log('error: ', error.message)
        });
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
