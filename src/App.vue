<template>
  <Header />
  <div class="views">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Footer,
    },
  });
</script>

<style>
  :root {
    --bgColor: #c9e0df;
    --bgLight: wheat;
    --lightColor: #b48484;
    --titleColor: #7a5656;
    --dark: #2c3e50;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark);
  }
  body {
    margin: 0;
    background: var(--bgColor);
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--titleColor);
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
    color: white;
    font-weight: bold;
    margin: 10px 10px 20px 10px;
  }
  button:hover {
    cursor: pointer;
  }
  h1 {
    color: var(--titleColor);
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
    box-shadow: -4px 0 2px -2px rgba(44, 62, 80, 0.4);
  }
  .fav-button {
    margin-left: 0px;
    background-color: var(--lightColor);
  }
  img {
    min-width: -webkit-fill-available;
  }
  .title {
    padding: 5%;
    max-width: 200px;
    margin: auto;
    min-height: 36px;
  }
  input:focus {
    outline: none;
    border-radius: 6px;
  }
  input:hover {
    border-color: var(--bgLight);
  }
</style>
