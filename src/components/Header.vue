<template>
    <header> 
      <nav>
        <router-link to="/">Cocktails</router-link>
        <router-link to="/favorites">Favorites ({{ favoritesCount() }})</router-link>
        <router-link to="/contact-us">Contact us</router-link>    
      </nav>
      <div class="routing">
        <button @click="redirect">Home</button>
        <button @click="back">Back</button>
        <button @click="forward">Forward</button>
      </div>
    </header>
</template>

<script lang="ts">
import { mapGetters} from 'vuex'; 

export default {
  name: 'Header',
  methods: {
    redirect() {
      this.$router.push({ name: 'HomeView' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(+1)
    },
    ...mapGetters([
      'favoritesCount'
    ])
  },
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2vh 0; 
  background-color:wheat;
}
nav {
  display: flex;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 20px;
  border-radius: 4px;
}
nav a.router-link-active {
    color: #b48484
}
.routing {
  display: flex;
}
@media screen and (max-width: 360px) {
  .routing {
    display: none;
  }
}
button {
  color: #2c3e50;
  margin: 0px 10px;
  background-color: white;
}
</style>