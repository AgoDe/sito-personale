<template>
  <div>

    <menu-container
    :menuItem="menuItem"
    />

  </div>
</template>

<script>

import MenuContainer from './components/menuContainer.vue'


export default {
  name: 'App',
  components: {
    MenuContainer,
    
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
  }
}
</script>

<style lang="scss">
@import 'bootstrap';



</style>
