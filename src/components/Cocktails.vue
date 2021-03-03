<template>
  <div class="Cocktails" v-if="drinks.length">
      <div v-for="drink in drinks" v-bind:key="drink[index]">
        <img alt="Cocktail image" :src="imgUrl({drink})" /> 
        <h4 id="{{drink.idDrink}}">Name: {{ drink.strDrink }}</h4>
        <router-link :to="{ name: 'DetailsView', params: { id: drink.idDrink }}">
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


