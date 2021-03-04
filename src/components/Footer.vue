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
  padding: 30px;
  background-color:wheat;
  margin-top: 10px;
  right: 0;
  left: 0;
}
</style>