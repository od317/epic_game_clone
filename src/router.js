import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import('./views/Home.vue')
    },
    {
        path:'/browse',
        name:'browse',
        component:()=> import('./views/browse.vue')
    },
    {
        path:'/game/:id',
        component:()=> import('./views/game.vue'),
        props: true
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;
