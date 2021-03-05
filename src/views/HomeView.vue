<template>
  <div>
    <h1>All Cocktails</h1>
    <div class="mt-4 mb-4 relative mx-auto text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search"
        v-model="searchInput"
        @keydown="searchInputUpdate"
      />
    </div>
  </div>
  <br/>
  <div class="cocktails-comp" v-if="searchResults && !searchResults.length || !searchInput">
    <Card 
      v-for="drink in drinks"
      :drink="drink"
      :key="drink.idDrink" 
    />
  </div>
  <div class="cocktails-comp" v-if="searchResults && searchResults.length">
    <Card 
      v-for="drink in searchResults"
      :drink="drink"
      :key="drink.idDrink" 
    />
    </div>
  <div v-else>
        <p> Loading cocktails... </p>
        <p> Cocktails not found </p>
  </div>
</template>

<script lang="ts">
import Card from '../components/Card.vue';
import { Drink } from '../../models/drink';
import { getAll, getBySearchInput } from '../services/Drinks.service';

export default {
  name: "HomeView",
  components: {
    Card
  },
  data() {
    return {
      drinks: [] as Drink[],
      searchInput: '' as string,
      searchResults: [] as Drink[],
    }
  },
  methods: {
    searchInputUpdate: async function () {
      console.log(this.searchInput)
      const results = await getBySearchInput(this.searchInput);
      this.searchResults = results.data.drinks;
      console.log(this.searchResults)
    },
  },
  async mounted() {
    const all = await getAll();
    if (all.data.drinks.length) this.drinks = all.data.drinks;
  }
};
</script>

<style scoped>
input {
    padding: 10px 6px;
    width: 30%;
    max-width: 250px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    border-radius: 6px;
    box-shadow: -4px 0 2px -2px rgba(44, 62, 80, 0.4)
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>