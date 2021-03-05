<template>
  <footer class="footer">Copyright</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Footer',
})
</script>

<style scoped>
.footer {
  position:fixed;
  bottom:0;
  padding: 15px;
  background-color:wheat;
  margin-top: 10px;
  right: 0;
  left: 0;
}
@media screen and (max-width: 360px) {
  .footer {
    display: none;
  }
}
</style>