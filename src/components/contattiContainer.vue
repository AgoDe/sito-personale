<template>
    <!-- finestra applicazione -->
    <div class="contatti big-container">
        <div class="container">
           <div class="row justify-content-center">
               <!-- colonna sinistra (info) -->
               <div class="col-12 col-lg-5 info-container">
                    <header class="d-flex align-items-end">
                        <div class="d-flex align-items-center mx-3 my-1">
                            <i class="icon-arrow-left"></i>
                            <div class="mx-3">Profilo</div>
                        </div>
                   </header>

                   <div class="user-container d-flex flex-column align-items-center">

                       <img class="m-3" src="/images/ago_leo.jpg" alt="logo">

                       <div class="info-box my-2">
                           <h5>
                               Info
                           </h5>

                           <div class="info">
                               Agostino De Felice
                           </div>
                           <div class="info">
                               Via della Ninfa, 14 - 06132, Perugia PG
                           </div>
                           <div class="info">
                               375 5357258
                           </div>
                           <div class="info">
                               ago.defelice@gmail.com
                           </div>
                       </div>

                       <div class="info-box social my-2">
                           <h5>
                               Social
                           </h5>

                           <ul>
                                <li class="linkedin-logo">
                                    <a href="https://www.linkedin.com/in/agostino-de-felice-29b600aa/">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>
                                            <i class="icon-linkedin"></i>
                                        </span> 
                                    </a>
                                </li>
                    
                                <li class="github-logo">
                                    <a href="https://github.com/AgoDe">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>
                                            <i class="icon-github"></i>
                                        </span> 
                                    </a>
                                </li>

                                <li class="instagram-logo">
                                    <a href="">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span>
                                            <i class="icon-instagram"></i>
                                        </span> 
                                    </a>
                                </li>
                    
                            </ul>

                       </div>

                       <div class="info-box my-2">
                           <h5>
                               Crediti
                           </h5>

                           <div class="info">
                               progettato con Figma, sviluppato con VueJs, realizzato con il &hearts;
                           </div>
                       </div>

                   </div>
               </div>
               <!-- end of colonna sinistra (info) -->

               <!-- colonna destra (chat) -->
               <div class="col-12 col-lg-7 chat-container"></div>
               <!-- end of colonna destra (chat) -->

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

    .contatti {
        font-family: $roboto;
        // background: linear-gradient(to bottom, #128C7E 20%, #f0eae3 20% );
        background-color: #f0eae3;
        .container {
            height: 100%;
            .row {
                height: 100%;
                .info-container {
                    height: 100%;
                    header {
                        height: 80px;
                        background: $green_contatti;
                        color: white;
                        font-size: 19px;
                        vertical-align: center;
                    }

                    .user-container {
                        background: $bg_contatti;
                        height: 100%;

                        img {
                            width: 200px;
                            height: 200px;
                            border-radius: 50%;
                            object-fit: cover;
                        }

                        .info-box {
                            background: white;
                            width: 100%;
                            box-shadow: 0 1px 3px rgba(11, 10, 26, 0.08);
                            padding: 14px 30px;
                            
                            h5 {
                                font-size: 14px;
                                color: $green_contatti;
                            }
                        }
                        ul {
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 0;

                            li {
                                list-style: none;
                                position: relative;
                                margin: 0 30px;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                &:hover span {
                                    color: white;
                                    transition: 0.5;
                                }
                                span {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    background: #fff;
                                    border-radius: 50%;
                                    width: 100%;
                                    height: 100%;
                                    display: flex !important;
                                    justify-content: center;
                                    align-items: center;
                                    font-size: 30px;
                                    color: black;
                                    transition:0.5s;
                                }

                                &:hover span:nth-child(5) {
                                    transform: translate(10px, 0px);
                                    opacity: 1;
                                    width: 50px;
                                    height: 50px;
                                    font-size: 35px;
                                }
                                &:hover span:nth-child(4) {
                                    transform: translate(8px, 0px);
                                    opacity: 0.8;
                                    width: 45px;
                                    height: 45px;
                                }

                                &:hover span:nth-child(3) {
                                    transform: translate(6px, 0px);
                                    opacity: 0.6;
                                    width: 40px;
                                    height: 40px;
                                }

                                &:hover span:nth-child(2) {
                                    transform: translate(4px, 0px);
                                    opacity: 0.4;
                                    width: 35px;
                                    height: 35px;
                                }

                                &:hover span:nth-child(1) {
                                    transform: translate(2px, 0px);
                                    opacity: 0.2;
                                    width: 30px;
                                    height: 30px;
                                }
                                
                            } // end of li
                            .linkedin-logo:hover span {
                                background: #0e76a8;
                            }
                            .github-logo:hover span {
                            background: #211F1F;
                            }
                            .instagram-logo:hover span {
                                background: rgb(81,91,212);
                                background: linear-gradient(167deg, rgba(81,91,212,1) 0%, rgba(129,52,175,1) 35%, rgba(221,42,123,1) 100%);
                            }
                        } // end of ul
                    } // end of info-container
                } // end of info-container
            } // end of row
        }// end of container
    } // end of contatti
</style>