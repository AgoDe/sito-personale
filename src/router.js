import Vue from "vue";
import VueRouter from "vue-router";

import Menu from './pages/menuContainer.vue';
import ChiSono from './pages/chisonoContainer.vue';
import Curriculum from './pages/curriculumContainer.vue';
import Contatti from './pages/contattiContainer.vue';

Vue.use(VueRouter);

const router =  new VueRouter({
    mode: "history",
    routes: [
        {
            path: '//',
            component: Menu,
            name: 'menu',
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