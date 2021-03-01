<template>
    <header> 
      <!-- <img alt="Vue logo" src="./assets/logo.png" />  -->
      <router-link to="/">Cocktails</router-link> |
      <router-link to="/favorites">Favorites</router-link> |
      <router-link to="/contact-us">Contact us</router-link>    
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header',
})
</script>