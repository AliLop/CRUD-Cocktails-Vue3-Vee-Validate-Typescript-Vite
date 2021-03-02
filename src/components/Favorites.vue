<template>
  <div class="Favorites">
    <h1>Favorite Cocktails </h1>
    <div v-for="drink in drinks" v-bind:key="drink[index]">
    <img alt="Cocktail image" :src="imgUrl({drink})" /> 
    <h4 id="{{drink.idDrink}}">Name: {{ drink.strDrink }}</h4>
    <button @click="details">See details</button>
    <button @click="remove">Remove from favorites</button>
    </div>
  </div>
 
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
 export default defineComponent({
 name: 'Favorites',
 data() {
   return {
     favorites: []
   }
 },
 mounted() {
   fetch('http://localhost:8000/favorites')
    .then(() => {

    })
 }
})
</script>