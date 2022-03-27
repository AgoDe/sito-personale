<template>
  <div class="window">

      <router-view></router-view>

  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';



export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {

      menuItem: [
          {
            id:0,
            title:'Chi sono',
            window_status: false,
            menu_status: true,
          },
          {
            id:1,
            title: 'Curriculum',
            window_status: false,
            menu_status: false,
          },
          {
            id:2,
            title: 'Contatti',
            window_status: false,
            menu_status: false,
          },

        ]
    }
  }, // end of data
  methods: {
    returnTransition: function() {

      this.menuVisible = true
      setTimeout( function() {

        anime({
          targets: ['.enter', '.home'],
          translateY: '-100%',
          easing: 'steps(8)',
          duration: 1500,
        });

        this.enterVisible = false
      }, 500)
    },
  } // end of methods
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
