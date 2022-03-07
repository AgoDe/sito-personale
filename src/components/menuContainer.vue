<template>
    <div class="big-container">

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
                   <menu-item-box
                    :item="item"
                    :rowIndex="rowIndex"
                    :columnIndex="columnIndex"
                    :columnNumber="columnNumber"
                    :activeItem="activeItem"
                    @pressBtn="pressBtn"
                   />
                </div>

            </div>
        </div> <!-- end of container -->
    </div>
</template>

<script>
import menuItemBox from './menuItemBox.vue'
export default {
  components: { menuItemBox },
    props: {
        menuItem: Array,
    },
    data() {
        return {
            rowIndex: 0,
            columnIndex: 1,
            columnNumber: 9,
            activeItem: 0
        }
    },
     mounted() {
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
                
               this.movePacman()
                 
             }
        }) // end of move pacman up and down (addeventListener)
        
    },
    methods: {
        pressBtn: function(item) {
             this.menuItem.forEach(element => {
                element.menu_status = false
            });
            item.menu_status = true
            

            this.movePacman()
        },
        movePacman: function() {
             setInterval(()=> {

                    if(this.columnIndex <= this.columnNumber - 1) {
                    this.columnIndex++
                    
                    }

                }, 300)
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
                }


            }// end of row
        } // end of container
    } // end of big-container

</style>