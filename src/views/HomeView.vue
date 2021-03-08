<template>
  <div>
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        v-model="searchInput"
        @keydown="searchInputUpdate"
        label="O"
      />
    </div>
  </div>
  <br />
  <div
    class="cocktails-comp"
    v-if="(searchResults && !searchResults.length) || !searchInput"
  >
    <Card v-for="drink in drinks" :drink="drink" :key="drink.idDrink" />
  </div>
  <div class="cocktails-comp" v-if="searchResults && searchResults.length">
    <Card v-for="drink in searchResults" :drink="drink" :key="drink.idDrink" />
  </div>
  <div v-else>
    <p>Loading cocktails...</p>
    <p>Cocktails not found</p>
  </div>
</template>

<script lang="ts">
  import Card from '../components/Card.vue';
  import { Drink } from '../models/drink';
  import { getAll, getBySearchInput } from '../services/Drinks.service';

  export default {
    name: 'HomeView',
    components: {
      Card,
    },
    data() {
      return {
        drinks: [] as Drink[],
        searchInput: '' as string,
        searchResults: [] as Drink[],
      };
    },
    methods: {
      searchInputUpdate: async function () {
        const results = await getBySearchInput(this.searchInput);
        this.searchResults = results.data.drinks;
      },
    },
    async mounted() {
      const all = await getAll();
      if (all.data.drinks.length) this.drinks = all.data.drinks;
    },
  };
</script>

<style scoped>
  input {
    margin-top: 2%;
    padding: 10px 15px;
    width: 40%;
    min-width: fit-content;
    max-width: 250px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: var(--dark);
    border-radius: 25px;
    box-shadow: -4px 0 2px -2px rgba(44, 62, 80, 0.4);
    background-color: #edf0f3;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
</style>
