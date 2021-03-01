<template>
  <Header />
  <router-view />
  <!-- <Home msg="Hello World" /> -->
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import ContactUsView from './views/ContactUsView.vue';
// import HomeView from './views/HomeView.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    // HomeView,
    // ContactUsView,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>