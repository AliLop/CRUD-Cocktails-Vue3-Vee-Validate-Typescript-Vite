<template>
  <Header />
  <div class="views">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: #eee;
}
button {
 padding: 10px;
 border: none;
 border-radius: 4px;
  background-color:  #7a5656; 
  background-image: linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,0));
  color: white;
 font-weight: bold;
 margin: 10px 10px 20px 10px;
}
h1 {
  color: #7a5656; 
}
.cocktails-comp {
  display: flex;
  flex-wrap: wrap;
  margin: 0 5% 10%;
  justify-content: center;
}
.card {
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: -4px 0 2px -2px rgba(44, 62, 80, 0.4)
}
.fav-button {
  margin-left: 0px;
  background-color: #b48484;
}
img {
  padding: 15px;
}
.title {
  padding: 5%;
  max-width: 200px;
  margin: auto;
  min-height: 36px;
}
</style>