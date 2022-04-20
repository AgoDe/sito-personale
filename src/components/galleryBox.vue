<template>
    <div class="gallery-box col-md-4 col-6">
            <img :src="`/images/${item.path}`" :alt="item.path"
            @click="setVisible(item)"
            >
                        
            <div class="details-window"
            v-if="item.visible"
            > 
                <i class="icon-xmark" @click="setNotVisible(item)"></i>

                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-8 img-box">
                            <img :src="`/images/${item.path}`" :alt="item.path">
                        </div>

                        <div class="col-12 col-md-4 text-box">
                            {{item.description}}
                        </div>
                    </div>

                </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,

    },
    data() {
        return{

        }
    }, // end of methods
    methods: {
        setVisible: function(item) {
            item.visible = true
        },
        setNotVisible: function(item) {
            item.visible = false
        }
    } // end of methods
    
}
</script>

<style lang="scss" scoped>

    
.gallery-box {
    padding: 15px;

    img {
        width: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    .details-window {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba($color: #333, $alpha: 0.5);
        backdrop-filter: blur(3px);
        
    
        width: 100%;
        height: 100vh;
    
        .icon-xmark {
            font-size: 40px;
            color: white;
            position: absolute;
            right: 30px;
            top: 30px;
        }
    
        .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
    
            .row {
                border-radius: 6px;
                background: white;
    
                .img-box {
                    padding: 0;
                    img {
                        
                        width: 100%;
                        object-fit: cover;
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                    }
                }

                .text-box {
                    padding: 10px;
                }
    
            }
            
        }
    }
}
</style>