<template>

    <div class="window">

        <enter-page
        class="enter"
        @returnTransition="returnTransition"
        />

        <div class="big-container home">
            
            <div class="container">
    
                <div class="row">
                    <div class="title">
                        <h1>Agostino De Felice</h1>
                        <h3>Full Stack Web Developer</h3>
                    </div>

                    <div 
                    class="menu col-11"
                    v-for="item in menuItem"
                    :key="item.id"
                    >

                        <!-- menu for desk -->
                        <menu-item-box
                        v-if="isDesktop == true"
                        :item="item"
                        :rowIndex="rowIndex"
                        :columnIndex="columnIndex"
                        :columnNumber="columnNumber"
                        :activeItem="activeItem"
                        @pressBtn="pressBtn"
                        />

                        <!-- menu for mobile -->
                        <button 
                        v-else
                        class="col-12 item"
                        @click="pagePush(item.path)"
                        >
                            {{ item.title}}
                        </button> 
                         <!-- end of menu for mobile -->

                    </div>

                </div>
            </div> <!-- end of container -->
        </div>
    </div>
</template>

<script>
import EnterPage from '../components/enterPage.vue'
import menuItemBox from '../components/menuItemBox.vue'

import anime from 'animejs/lib/anime.es.js';

import Router from '../router';

export default {
  components: { 
    menuItemBox,
    EnterPage 
  },
   
    data() {
        return {
            enterVisible: true,
            menuItem: [
          {
            id:0,
            path: 'chisono',
            title:'Chi sono',
            window_status: false,
            menu_status: true,
          },
          {
            id:1,
            path: 'curriculum',
            title: 'Curriculum',
            window_status: false,
            menu_status: false,
          },
          {
            id:2,
            path: 'contatti',
            title: 'Contatti',
            window_status: false,
            menu_status: false,
          },

            ],
            rowIndex: 0,
            columnIndex: 1,
            columnNumber: 9,
            activeItem: 0,
            isDesktop: true,
            windowSize: '',
        }
    },
     mounted() {

         // window width
          this.windowSize = window.innerWidth;
            if (this.windowSize < 600) {
             this.isDesktop = false;
      }
         // move pacman up and down
        document.addEventListener('keydown', (event) => {
            
            console.log(event)
            
            if(event.code === 'ArrowUp') {
                 if(this.activeItem <= 0) {
                    this.activeItem = this.menuItem.length - 1
                } else {
                    this.activeItem--
                }   
                this.itemUp(this.activeItem)

            } else if  (event.code ==='ArrowDown') {
                if(this.activeItem >= this.menuItem.length - 1) {
                    this.activeItem = 0
                } else {
                    this.activeItem++
                }
                this.itemDown(this.activeItem)

            } else if (event.code === 'Enter') {
                
               if(this.enterVisible) {
                   
                    this.returnTransition()
               } else {
                   this.movePacman()
               }
                 
             }
        }) // end of move pacman up and down (addeventListener)
        
    },
    methods: {
        pagePush: function(page) {
            Router.push(page)
        },
        returnTransition: function() {

            anime({
            targets: ['.enter', '.home'],
            translateY: '-100%',
            easing: 'steps(8)',
            duration: 1500,
            });

            setInterval(() => {

                this.enterVisible = false
            }, 1000);
             
        },
        pressBtn: function(item) {
             this.menuItem.forEach(element => {
                element.menu_status = false
            });
            item.menu_status = true

            this.activeItem = item.id
            
            this.movePacman()
        },
        movePacman: function() {
            console.log('movePacman')

             setInterval(()=> {

                    if(this.columnIndex <= this.columnNumber - 1) {
                    this.columnIndex++
                    console.log('dopo: ', this.columnIndex)
                    } else if (this.columnIndex == this.columnNumber) {
                        this.columnIndex++
                        this.pagePush(this.menuItem[this.activeItem].path)
                    }

                }, 250)

        },
        itemDown: function(index) {
            this.menuItem.forEach(element => {
                element.menu_status = false
            });
            this.menuItem[index].menu_status = true
        },
        itemUp: function(index) {
            this.menuItem.forEach(element => {
                element.menu_status = false
            });
            this.menuItem[index].menu_status = true  
        },
    }
    
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

    .big-container {
        background-color: $bg_blue;
        font-family: $start;

        display: flex;
        align-items: center;

        .container {
            height: 90%;
            padding: 10px;

            .row {
                height: 100%;
                margin: 0 auto;
                border: 4px solid $yellow;
                border-radius: 15px;

                align-items: center;

                .title {
                    h1 {
                    color: $yellow;
                    padding: 30px 0;
                    text-align: center;
                    }
                    h3 {
                        color: white;
                        text-align: center;
                        font-size: 20px;
                    }
                }
                .menu {
                    margin: 0 auto;

                    .item {
                    background-color: $yellow;
                    border-radius: 10px;
                    padding: 8px 0;
                    color: $bg_blue;
                    font-size: 18px;
                    text-align: center;
                    }
                }


            }// end of row
        } // end of container
    } // end of big-container

</style>