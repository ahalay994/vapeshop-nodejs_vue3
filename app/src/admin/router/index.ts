import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "dashboard",
    component: () => import("../views/DashBoard.vue"),
  },
  {
    path: "/admin/users",
    name: "users",
    component: () => import("../views/Users/Users.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: "exact-active",
  routes,
});

export default router;
