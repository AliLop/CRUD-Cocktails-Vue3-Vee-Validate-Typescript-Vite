<template>
    <h1>All Cocktails</h1>
    <br/>
    <div class="cocktails-comp" v-if="drinks.length">
      <Card 
        v-for="drink in drinks"
        :drink="drink"
        :key="drink.idDrink" 
      />
    </div>
    <div v-else>
        <p> Loading cocktails... </p>
    </div>
</template>

<script lang="ts">
import Card from '../components/Card.vue';
import { Drink } from '../../models/drink';
import { getAll } from '../services/Drinks.service';

export default {
  name: "HomeView",
  components: {
    Card
  },
  data() {
    return {
      drinks: [] as Drink[],
    }
  },
  async mounted() {
    const all = await getAll();
    this.drinks = all.data.drinks;
  }
};
</script>