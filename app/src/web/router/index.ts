import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";

import NotFound from "../views/NotFound.vue";

import Login from "../views/Pages/User/Login.vue";
import Register from "../views/Pages/User/Register.vue";
import ResetPassword from "../views/Pages/User/ResetPassword.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/catalog",
        name: "Catalog",
        component: Catalog
    },
    {
        path: "/catalog/:slug/:subSlug?",
        name: "Category",
        component: Category
    },
    {
        path: "/catalog/:slug/:subSlug?/:slugProduct",
        name: "Product",
        component: Product
    },
    /*{
        path: '*',
        name: 'NotFound',
        component: NotFound
    },*/

    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        component: ResetPassword
    },
    {
        path: '/about',
        name: "About",
        component: () => import("../views/About.vue")
    },
    /*{
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/!* webpackChunkName: "about" *!/ "../views/About.vue"),
    },*/
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
