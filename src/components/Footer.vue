<template>
  <footer class="footer">
    <div>
      <div>
        <div class="icon">
          <a>
            <i class="fab social-media-i fa-facebook-f fa-lg white-text mr-4">
            </i>
          </a>
          <a>
            <i class="fab social-media-i fa-linkedin-in fa-lg white-text mr-4">
            </i>
          </a>
          <a>
            <i class="fab social-media-i fa-instagram fa-lg white-text mr-4">
            </i>
          </a>
        </div>
      </div>
    </div>
    <div>© 2021 Copyright</div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Footer',
  });
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    padding: 15px;
    background-color: var(--bgLight);
    margin-top: 10px;
    right: 0;
    left: 0;
    font-size: small;
    color: var(--titleColor);
  }
  @media screen and (max-width: 360px) {
    .footer {
      display: none;
    }
  }
  .social-media-i {
    display: inline-block;
    text-align: center;
    margin: 20px 30px;
  }
  .icon a:hover {
    cursor: pointer;
  }
</style>
