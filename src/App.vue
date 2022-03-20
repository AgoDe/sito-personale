<template>
  <div class="window">

    <enter-container 
    class="enter"
    v-if="enterVisible" 
    @returnTransition="returnTransition" 
    />
    <menu-container
     class="home"
     v-if="menuVisible" 
    :menuItem="menuItem"
    />

    <chisono-container
    class="chi-sono"
    v-if="chisonoVisible"
    />

    <curriculum-container
    class="curriculum"
    v-if="curriculumVisible"
    />

    <contatti-container
    class="contatti"
    v-if="contattiVisible"
    />


  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

import EnterContainer from './components/enterContainer.vue'
import MenuContainer from './components/menuContainer.vue'
import CurriculumContainer from './components/curriculumContainer.vue';
import ContattiContainer from './components/contattiContainer.vue';
import ChisonoContainer from '../chisonoContainer.vue';


export default {
  name: 'App',
  components: {
    MenuContainer,
    EnterContainer,
    CurriculumContainer,
    ContattiContainer,
    ChisonoContainer,
  },
  data() {
    return {
      enterVisible: false,
      menuVisible: false,
      chisonoVisible: true,
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
