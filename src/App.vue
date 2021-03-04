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
  background-color: #b48484;
  color: white;
 font-weight: bold;
 margin: 10px 10px 20px 10px;
}
h1 {
  color: #b48484;
}
img {
  padding: 15px;
}
</style>