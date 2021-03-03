<template>
    <h1>Favorite Cocktails</h1>
    <Favorites />
</template>

<script lang="ts">
import Favorites from "../components/Favorites.vue";
export default {
  name: "FavoritesView",
  components: {
    Favorites
  }
};
</script>