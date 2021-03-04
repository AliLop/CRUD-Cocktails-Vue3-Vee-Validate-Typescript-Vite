<template>
  <div class="favorites-comp">
    <div class="favorites">
      <div class="card" v-for="favorite in favorites" v-bind:key="favorite[index]">
      <img alt="Favorite cocktail image" :src="imgUrl({favorite})" /> 
      <h4 id="{{favorite.idDrink}}">{{ favorite.strDrink }}</h4>
      <router-link :to="{ name: 'DetailsView', params: { id: favorite.idDrink }}">
            <button>See details</button>
      </router-link>
      <button @click="handleRemove({favorite})">Remove</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'; 
import { mapActions } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Favorites',
  data() {
    return {
      index: Number,
    }
  },
  methods: {
    imgUrl({favorite}) {
      return `${favorite.strDrinkThumb}/preview`
    },
    ...mapActions([
      'removeFav'
    ]),
    handleRemove({favorite}) {
      console.log({favorite})
      this.removeFav({favorite})
    }
  },
  computed: {
    ...mapState([
      'favorites'
    ])
  },
  // mounted() {
  //   fetch('http://localhost:8000/favorites', {
  //         method: 'get'
  //         })
  //     .then(response => response.json())
  //     .then(data => this.favs = data)
  //     .catch(err => console.log('Error: ', err.message))
  // }
})
</script>

<style scoped>
.favorites-comp {
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
</style>