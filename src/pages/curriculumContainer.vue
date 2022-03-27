<template>
    <div class="curriculum big-container">
        <div class="nav">
            <div class="container">
                <div class="row align-items-center align-items-lg-end">

                    <i @click="pagePush('/')" class="back icon-arrow-left col-2"></i>

                    <div class="box col-2 offset-lg-1" @click="pagePush('chisono')">
                        <i class="icon-user"></i>
                        <div class="d-none d-lg-block">Chi sono</div>
                    </div>

                    <div class="box col-2" @click="pagePush('curriculum')">
                        <i class="icon-briefcase"></i>
                        <div class="d-none d-lg-block">Curriculum</div>
                    </div>

                    <div class="box col-2" @click="pagePush('contatti')">
                        <i class="icon-comment-dots"></i>
                        <div class="d-none d-lg-block">Contatti</div>
                    </div>
                         
                    <a class="link col-2 offset-lg-1 box" href="https://www.linkedin.com/in/agostino-de-felice-29b600aa/">
                        <img src="/images/ago_boolean.jpg" alt="">
                        <div class="d-none d-lg-block">Profilo Linkedin</div>
                        
                    </a>
                </div> <!-- end of row -->
            </div> <!-- end of container -->
        </div> <!-- end of nav -->

        <div class="container">
            <div class="row justify-content-center">

                <competenze-box
                class="col-10 col-lg-6"
                />

                <esperienze-box
                class="col-10 col-lg-6"
                />
            </div>
        </div>

    </div> <!--  end of big-container -->
</template>

<script>
import CompetenzeBox from '../components/curriculum/competenzeBox.vue';
import esperienzeBox from '../components/curriculum/esperienzeBox.vue';

import Router from '../router';

export default {
  components: { 
    esperienzeBox,
    CompetenzeBox,
    
  },
  data() {
      return {

      }
  },
  methods: {
    pagePush: function(page) {
        Router.push(page)
    },
  }
    
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';

.curriculum {
    background-color:$bg_linkedin;
    font-family: $roboto;
    overflow-y: auto ;

    .nav {
        height: 60px;
        background: white;
        color: rgba($color: #000000, $alpha: 0.6);

        border-bottom: 2px $border_grey solid;

        .row {
            justify-content: space-between;
            .back {
                font-size: 30px;
                line-height: 60px;
                color: rgba($color: #000000, $alpha: 0.6);
                cursor: pointer;

                &:hover {
                    color: rgba($color: #000000, $alpha: 1.0);

                }
            }

            .box {
                text-align: center;
                cursor: pointer;

                i {
                    font-size: 20px;
                }

                &:hover {
                    color: rgba($color: #000000, $alpha: 1.0);
                }
            }
    
            .link {
                color: rgba($color: #000000, $alpha: 0.6);
                text-decoration: none;
                img {
                    height: 35px;
                    width: 35px;
                    border-radius: 50%;
                }
            }
        } // end of row
    } // end of nav

} // end of curriculum

</style>