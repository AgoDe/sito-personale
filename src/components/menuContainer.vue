<template>
    <div class="big-container">

        <div class="container">

            <div class="row">
                <h1>Agostino De Felice</h1>

                <h3>Full Stack Web Developer</h3>

               
            </div>
        </div> <!-- end of container -->
    </div>
</template>

<script>
export default {
    
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
                margin: 0 auto;
                border: 4px solid $yellow;
                border-radius: 15px;

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

                
            }// end of row
        } // end of container
    } // end of big-container

</style>