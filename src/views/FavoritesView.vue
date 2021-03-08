<template>
  <h1>Favorite Cocktails</h1>
  <br />
  <div class="cocktails-comp" v-if="favorites.length">
    <Card v-for="drink in favorites" :drink="drink" :key="drink.idDrink" />
  </div>
  <div v-else>
    <p>No favorites cocktails added yet!</p>
  </div>
</template>

<script lang="ts">
  import Card from '../components/Card.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'FavoritesView',
    components: {
      Card,
    },
    computed: {
      ...mapState(['favorites']),
    },
  };
</script>
