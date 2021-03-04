<template>
  <div class="cocktails" v-if="drinks.length">
      <div class="card" v-for="drink in drinks" v-bind:key="drink[index]">
          <img alt="Cocktail image" :src="imgUrl({drink})" /> 
          <h4 class="title" id="{{drink.idDrink}}">{{ drink.strDrink }}</h4>
          <router-link :to="{ name: 'DetailsView', params: { id: drink.idDrink } }">
            <button>See details</button>
          </router-link>
          <!-- <button @click="add">Add to favorites</button> -->
      </div>
     </div>
    <div v-else>
        <p> Loading cocktails... </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Cocktails',
  props: {
    drinks: Array,
    index: Number,
  },
  methods: {
    imgUrl({drink}) {
      return `${drink.strDrinkThumb}/preview`
    },
    // add({drink}) {
    //   const favorites = "@data/db.json"
    //   favorites.push({drink})
    // }
  }
})
</script>

<style scoped>
.cocktails {
  display: flex;
  flex-wrap: wrap;
  margin: 0 5%;
  justify-content: center;
}
.card {
  margin: 20px;
  background-color: white;
  border-radius: 10px;
}
.title {
  padding: 5%;
  max-width: 200px;
}
</style>


