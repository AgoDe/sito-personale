<template>
  <div class="window">

      <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style lang="scss">
@import 'bootstrap';
@import '/src/styles/main.scss';

.window {
  background: $bg_blue;
  overflow: hidden;
  max-height: 100vh;

}
</style>
