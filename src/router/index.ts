import { createRouter, createWebHistory, } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Login from "../views/Login.vue";
import Authentication from "../views/Authentication.vue";
import Reports from "../views/Reports.vue";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
    meta: { layout: "empty"},
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;