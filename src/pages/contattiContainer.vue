<template>
    <!-- finestra applicazione -->
    <div class="contatti big-container">
        <div class="container">
           <div class="row justify-content-center">

               <!-- colonna sinistra (info) -->
               <div class="col-12 col-lg-5 info-container">
                    <header class="d-flex align-items-end">
                        <div class="d-flex align-items-center mx-3 my-1">
                            <i @click="pagePush('/')" class="icon-arrow-left mx-2"></i>
                            <div class="mx-3">Profilo</div>
                        </div>
                    </header>

                   <div class="user-container d-flex flex-column align-items-center">

                       <img class="m-3" src="/images/logo-circle.png" alt="logo">

                       <div class="info-box my-2">
                           <h5>
                               Info
                           </h5>

                           <div class="info">
                               Agostino De Felice
                           </div>
                           <div class="info">
                                Perugia (PG)
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

                            <!-- social icon -->
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
                                    <a href="https://www.instagram.com/agodef93/">
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
                               progettato con Figma, sviluppato con VueJs, realizzato con il 
                               <i class="icon-heart"></i>
                           </div>
                       </div>

                   </div>
               </div>
               <!-- end of colonna sinistra (info) -->

               <!-- colonna destra (chat) -->
               <div class="col-12 col-lg-7 chat-container">
                   <div class="title">
                       <h5>Contattami </h5>
                       <h6>compila il form con le informazioni richieste</h6>
                   </div>

                   <div class="chat-box">

                       <div class=""
                       v-for="(item, index) in itemsToSend"
                       :key="index"
                       >

                            <div class="d-flex">
                                <div class="chat">
                                    {{ item.title }}
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <div class="chat active">
                                    {{ item.content}}
                                    
                                </div>
                            </div>
                       </div>


                        <div class="d-flex justify-content-end">
                            <button class="chat active" v-if="sendButtonVisible" @click="sendEmail()">
                                 Invia la richiesta
                            </button>
                        </div>
                        <div class="d-flex">
                            <div class="chat" v-if="sentButtonVisible">
                                 Richiesta inviata
                            </div>
                        </div>
                       

                   </div>

                   <div class="chat-input d-flex align-items-center">

                       <input type="text" 
                       :placeholder="activeItem.placeholder"
                        v-model="activeItem.content"
                        @keydown.enter="pushItem(activeItem)"
                        >
                        

                        <i class="icon-send"></i>
                   </div>

               </div>
               <!-- end of colonna destra (chat) -->
                
           </div>
        </div>
    </div>
</template>

<script>
import Router from '../router';
// import emailJs from '@emailjs/browser'

export default {
    data() {
        return {
            sendButtonVisible: false,
            sentButtonVisible: false,
            forEmail: {
                name: '',
                email: '',
                message: '',
            },
            itemsToSend:[],
            activeIndex: 0,
            activeItem: {},
            contactItems: [
                {
                    title: 'Nome',
                    placeholder: 'Scrivi il tuo nome',
                    content: '',
                },
                {
                    title: 'E-mail',
                    placeholder: 'Scrivi la tua e-mail',
                    content: '',
                },
                {
                    title: 'Messaggio',
                    placeholder: 'Scrivi il tuo messaggio',
                    content: '',
                },
               
            ],
        }
    },
    computed: {
    },
    mounted() {
        this.activeItem = this.contactItems[this.activeIndex]
    },
    methods: {
        sendEmail: function() {
            this.forEmail.name = this.itemsToSend[0].content
            this.forEmail.email = this.itemsToSend[1].content
            this.forEmail.message = this.itemsToSend[2].content

            // emailJs.send("agostino_93","contatti_sito", this.forEmail, 'oPDejNpD1WDxc6I2O').then(function(response) {
            //     console.log('INVIATA', response.status, response.text)
            // }, function(error) {
            //     console.log('FAILED', error)
            // })

            this.sentButtonVisible = true
        },
        pagePush: function(page) {
            Router.push(page)
        },
        pushItem: function(item) {

            if (this.itemsToSend.length != this.contactItems.length) {

                this.itemsToSend.push(item)
                this.activeItem = []
                 if(this.itemsToSend.length == 3) {
                       this.sendButtonVisible = true
                }
                
               if(this.activeIndex < this.contactItems.length - 1) {
                   
                   this.activeIndex++
                   this.activeItem = this.contactItems[this.activeIndex]
                  
                }
            }
           
        }
    },
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';
@import '/src/styles/components/contatti-container.scss';

 .chat-container {
    background: url(../assets/mine.jpg);
    height: 100%;
}
    
</style>