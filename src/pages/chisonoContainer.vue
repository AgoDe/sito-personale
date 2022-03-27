<template>
    <div class="big-container">
        <header>
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-4 d-none d-lg-block">
                        <h2>Agogram</h2>
                    </div>

                    <nav class="col-12 col-md-3">
                        <!-- home icon -->
                        <svg
                        @click="pagePush('/')" 
                        aria-label="Home" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>

                        <!-- icona bussola -->
                        <svg 
                        @click="pagePush('curriculum')" 
                        aria-label="Trova persone" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                            <polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                            <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                        </svg>

                        <!-- contatti icon -->
                        <svg 
                        @click="pagePush('contatti')" 
                        aria-label="Direct" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>

                        <img class="img-round" src="/images/ago_leo.jpg" alt="img profile">
                    </nav>
                </div>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="row profile">

                    <div class="col text-center">
                        <img class="img-round" src="/images/ago_leo.jpg" alt="img profile">
                    </div>

                    <div class="col-12 col-md-7">
                        <h2>Agostino De Felice</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at accusantium rem labore dignissimos incidunt, similique tenetur molestias? Deleniti labore doloribus velit sint! Eveniet vitae fuga quos voluptas voluptatem magni?</p>
                    </div>

                </div>

                <div class="row gallery">
                    <div class="col-4">
                        <div class="square">

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="square">

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="square">

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="square">

                        </div>
                    </div>
                  
                </div>
            </div>
        </main>

    </div> <!-- end of big-container -->
</template>

<script>
import Router from '../router';

export default {
    data() {
        return {
            gallery:[
                {
                    path: 'ago_boolean.jpg',
                    description:'grazie a Boolean è iniziato il mio Amore per il coding',
                }
            ]
        }
    }, // end of data
    methods: {
        pagePush: function(page) {
            Router.push(page)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

    .big-container {
        background-color: rgb(250, 250, 250);

        header {
            background: white;
            border-bottom: $border_grey 1px solid;

            nav {
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #888;

                img {
                    width: 30px;
                    height: 30px;
                }
            }
        } // end of header

        main {
            height: 100%;
            .container {
                height: 100%;
                .profile {
                    margin-top: 30px;
                    border-bottom: $border_grey 1.5px solid;
                    padding-bottom: 20px;

                    img {
                        width: 250px;
                        height: 250px;
                    }

                    h2 {
                        font-weight: 300;
                    }
                } // end of profile

                .gallery {
                    flex-wrap: wrap;
                    .col-4 {
                        padding: 15px;
                        
                        .square {
                            border: 2px blue solid;
                            width: 100%;
                            height: 200px;
                        }
                    }
                }
            }
        }
    }
</style>