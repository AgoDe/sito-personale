
<template>
    <div class="container">
        <div class="row">
            <div 
            class="col-lg-1"
            :class="[returnGhost(index),]"
            v-for="index in columnNumber"
            :key="index"
            >

                <div 
                :class="[returnPacman(index, item), returnDot(index, item)]"
                >
                    <div 
                    class="mouth"    
                    >
                    </div>
                </div>
            
            </div>    

            <!-- <div class="col-1"></div> -->
            <button class="col-lg-3 item">
                {{ item.title}}
            </button>    
              
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item:Object,
        rowIndex: Number,
        columnIndex: Number,
       
    },
    data() {
        return {
            columnNumber: 9,
        }
    },
    mounted() {
        
    },
    computed: {

    },
    methods: {
         returnPacman: function(index, item) {
            if(index === this.columnIndex && item.menu_status) {
                return 'pacman'
            }
        },
       
        returnDot: function(index, item) {
            if(index > this.columnIndex && item.menu_status && index != 1 && index != this.columnNumber) {
                return 'dot'
            }
        },
         returnGhost: function(index) {
            if (index === this.columnNumber && this.columnIndex === 1) {
                return 'ghost'
            } else if (index === this.columnNumber && this.columnIndex != 1 ) {
                return 'vulnerable'
            }
        },

    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

    .container {
        // border: 2px solid black;
        

        .row {

            .col-lg-1 {
                height: 60px;
                // border: solid 1px white;
                color: white;
                padding: 0;
                position: relative;
                
                
            }

            .item {
                background-color: $yellow;
                border-radius: 10px;
                padding: 8px 0;
                color: $bg_blue;
                text-align: center;

            }
        }
    }

    // classi funzioni
    .ghost {
        background: url('../assets/ghost.png') center center no-repeat;
        background-size: 80%;
    }
    .vulnerable {
        background: url('../assets/vulnerable_ghost.png') center center no-repeat;
        background-size: 80%;
    }
    .pacman {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: $yellow;
    position: relative;
    
    
        .mouth {
        background: $bg_blue; // deve essere il colore del background
        position: absolute;
        width: 101%;
        height: 101%;
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
        animation-duration: 300ms;
        animation-iteration-count: infinite;
        };
        .mouth.animate {
        animation-name: eat;
        }
    }
    .dot {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    @keyframes eat {
        0% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
        }
        25% {
        clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
        }
        
        50% {
        clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
        }
        
        75% {
        clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
        }
        
        100% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
        }
  }
  
</style>

