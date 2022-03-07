<template>
  <div class="window">

    <enter-container v-if="enterVisible" class="enter"
    @returnTransition="returnTransition" 
    />
    <menu-container v-if="menuVisible" class="home"
    :menuItem="menuItem"
    />

    <!-- <div class="enter">float left</div>

    <div class="home">
      float right
    </div> -->

  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

import EnterContainer from './components/enterContainer.vue'
import MenuContainer from './components/menuContainer.vue'


export default {
  name: 'App',
  components: {
    MenuContainer,
    EnterContainer
  },
  data() {
    return {
      enterVisible: true,
      menuVisible: false,
      chisonoVisible: false,
      curriculumVisible: false,
      contattiVisible:false,

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
