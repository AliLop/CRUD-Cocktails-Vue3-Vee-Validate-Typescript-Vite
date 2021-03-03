<template>
  <div class="favorites-view">
    <div class="favorites">
      <div class="card" v-for="favorite in favorites" v-bind:key="favorite[index]">
      <img alt="Favorite cocktail image" :src="imgUrl({favorite})" /> 
      <h4 id="{{favorite.idDrink}}">Name: {{ favorite.strDrink }}</h4>
      <router-link :to="{ name: 'DetailsView', params: { id: favorite.idDrink }}">
            <button>See details</button>
      </router-link>
      <!-- <button @click="remove">Remove from favorites</button> -->
      </div>
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

<style scoped>
.favorites-view {
  min-height: 78vh;
}
.favorites {
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
button {
    margin: 20px 0;
    background-color: #eee;
}
</style>