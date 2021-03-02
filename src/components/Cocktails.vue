<template>
  <div class="Cocktails">
    <h1>All Cocktails </h1>
    <div v-for="drink in drinks" v-bind:key="drink[index]">
    <img alt="Cocktail image" :src="imgUrl({drink})" /> 
    <h4 id="{{drink.idDrink}}">Name: {{ drink.strDrink }}</h4>
    <button @click="details">See details</button>
    <button @click="add">Add to favorites</button>
    </div>
  </div>
</template>

<script lang="ts">
 export default ({
 name: 'Cocktails',
 props: {
   drinks: Array,
 },
 methods: {
  imgUrl({drink}) {
    return `${drink.strDrinkThumb}/preview`
  },
  // details() {

  // },
  // add({drink}) {
  //   const favorites = "@data/db.json"
  //   favorites.push({drink})
  // }
 }
})
</script>


