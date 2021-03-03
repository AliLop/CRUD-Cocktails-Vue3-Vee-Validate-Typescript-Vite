<template>
    <header> 
      <nav>
        <router-link to="/">Cocktails</router-link>
        <router-link to="/favorites">Favorites</router-link>
        <router-link to="/contact-us">Contact us</router-link>    
      </nav>
      <div class="routing">
        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forward</button>
      </div>
    </header>
    <hr/>
</template>

<script lang="ts">

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
    }
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
.routing {
  display: flex;
}
@media screen and (max-width: 360px) {
  .routing {
    display: none;
}
}
</style>