<template>
  <div class="Favorites">
    <div v-for="favorite in favorites" v-bind:key="favorite[index]">
    <img alt="Favorite cocktail image" :src="imgUrl({favorite})" /> 
    <h4 id="{{favorite.idDrink}}">Name: {{ favorite.strDrink }}</h4>
    <router-link :to="{ name: 'DetailsView', params: { id: favorite.idDrink }}">
          <button>See details</button>
    </router-link>
    <!-- <button @click="remove">Remove from favorites</button> -->
    </div>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Favorites',
  data() {
    return {
      favorites: [],
      index: Number,
    }
  },
  methods: {
    imgUrl({favorite}) {
      return `${favorite.strDrinkThumb}/preview`
    },
  },
  mounted() {
    fetch('http://localhost:8000/favorites', {
          method: 'get'
          })
      .then(response => response.json())
      .then(data => this.favorites = data)
      .catch(err => console.log('Error: ', err.message))
  }
})
</script>