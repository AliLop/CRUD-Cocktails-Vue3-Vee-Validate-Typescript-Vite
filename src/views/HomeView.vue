<template>
    <h1>All Cocktails</h1>
    <br/>
    <Cocktails :drinks="drinks"/>
</template>

<script lang="ts">
import Cocktails from "../components/Cocktails.vue";
export default {
  name: "HomeView",
  components: {
    Cocktails
  },
  data() {
    return {
      drinks: [ ],
    }
  },
  beforeMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
      method: 'get'
    })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.drinks = jsonData.drinks;
    })
    .catch((error) => {
      console.log('error: ', error.message)
    });
  }
};
</script>