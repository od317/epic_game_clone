import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name:'home',
        component:()=> import('./views/Home.vue')
    },
    {
        path:'/browse/:id?',
        name:'browse',
        props: true,
        component:()=> import('./views/browse.vue')
    },
    {
        path:'/news',
        component:()=> import('./views/new.vue'),
        props: true
    },
    {
        path:'/game/:id',
        component:()=> import('./views/game.vue'),
        props: true
    },
    {
        path:'/games/:id',
        component:()=> import('./views/games_type.vue'),
        props: true
    },
    {
        path:'/wishlist',
        component:()=> import('./views/wishList.vue'),
        props: true
    },
    {
        path:'/cart',
        component:()=> import('./views/cart.vue'),
        props: true
    },
    {
        path:'/collection/:id?',
        name:'collection',
        props: true,
        component:()=> import('./views/collection.vue')
    },
    {
        path:'/:pathMatch(.*)*',
        name:'not-found',
        props: true,
        component:()=> import('./views/404.vue')
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;
