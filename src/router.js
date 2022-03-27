import Vue from "vue";
import VueRouter from "vue-router";

import Home from './pages/homeContainer.vue';
import ChiSono from './pages/chisonoContainer.vue';
import Curriculum from './pages/curriculumContainer.vue';
import Contatti from './pages/contattiContainer.vue';

Vue.use(VueRouter);

const router =  new VueRouter({
    mode: "history",
    routes: [
        {
            path: '//',
            component: Home,
            name: 'home',
        },
        {
            path: '/chisono',
            component: ChiSono,
            name: 'chisono',
        },
        {
            path: '/curriculum',
            component: Curriculum,
            name: 'curriculum',
        },
        {
            path: '/contatti',
            component: Contatti,
            name: 'contatti',
        },
    ]
});

export default router