import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router=createRouter({
    history : createWebHistory(),
    routes : [
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/about',
            name:'about',
            component: AboutView
        },
        {
            path:"/post/:id",
            name:"post",
            component: ()=> import("../views/PostView.vue")
        },
        {
            path:"/categorie/:id",
            name:"categorie",
            component: ()=> import("../views/CategorieView.vue")
        },
        {
            path:"/CategoriePostView/:id/:cat",
            name:"CategoriePostView",
            component: ()=> import("../views/CategoriePostView.vue")
        }

    ]
});

export default router;