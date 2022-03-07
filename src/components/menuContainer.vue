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
            columnIndex: 2,
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

    .big-container {
        background-color: $bg_blue;
        font-family: 'Press Start 2P', cursive;

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