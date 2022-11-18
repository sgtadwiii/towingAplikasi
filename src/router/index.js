import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import adminpage from "../views/adminpage";
import Register from "../views/Register";
import Login from "../views/Login";
import Posts from "../views/Posts";
import Order from "../views/Order";



Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: false },
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { guest: false },
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: { requiresAuth: false },
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin",
    name: "adminpage",
    component: adminpage,
    meta: { requiresAuth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/order");
      return;
    }
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/admin");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
