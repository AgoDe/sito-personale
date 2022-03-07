<template>
    <div class="big-container">
        <div class="container">
            <div class="row">

                <div class="col-10 col-lg-8 box">

                    <button class="d-flex flex-column flex-lg-row">
                        <div class="mx-4 my-2">Enter to Website</div>
                        <img class="mx-4 my-2" src="/images/enter-icon.png" alt="enter icon">
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

.big-container {
    background-color: $bg-blue;
    font-family: $start;

    .container{
        height: 100%;
        .row {
            height: 100%;

            justify-content: center;
            align-items: center;

            .box {
                height: 350px;
                border: 4px solid $yellow;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;


                button {
                    // width: 70%;
                    background-color: $yellow;
                    border-radius: 15px;
                    padding: 15px 0;
                    font-size: 24px;
                    color: $bg_blue ;

                    justify-content: center;
                    align-items: center;

                    img {
                        width: 30px;
                        fill: $bg_blue;
                    }
                } // end of button
            } // end of box
        } // end of row
    } // end of container
} // end of big-container
</style>