<template>
    <div class="big-container">

        <div class="container">
            <h1>Agostino De Felice</h1>

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
        background-color: $bg_blue;
        font-family: 'Press Start 2P', cursive;

        display: flex;
        align-items: center;

        .container {
            height: 90%;
            border: 4px solid $yellow;
            border-radius: 15px;

            h1 {
                color: $yellow;
                padding: 20px 0;
                text-align: center;
    
            }
        }

    }

</style>