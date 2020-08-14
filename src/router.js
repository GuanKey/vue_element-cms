import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import navs from "@/utils/navs";
const Login = () => import("./components/login/login.vue");

const routes = [];
navs.map((ele) => {
  if (ele.children) {
    ele.children.map((ele) => {
      routes.push({ path: ele.path, component: ele.comm });
    });
  }
});

// 防止重复点击导航报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes: [
    ...routes,
    { path: "/login", components: { login: Login } },
    { path: "/", redirect: "/home" }
  ]
})

router.beforeEach(function(to, from, next) {
  if (to.path !== "/login") {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
