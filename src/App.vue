<template>
  <Header />
  <div class="views">
    <router-view />
  </div>
  <hr/>
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
 margin: 0px 10px;
 padding: 15px;
 border: none;
 border-radius: 4px;
 color: #2c3e50;
 background-color: white;
 font-weight: bold;
}
h1 {
 color: #2c3e50;
}
hr {
  margin: 0
}
</style>