import * as vueRouter from "vue-router";
import Home from "../pages/Home.vue"
import Resume from "../pages/Resume.vue"
import Basic from "../pages/Basic.vue"

const routes = [
  {
    name: "Home",
    path: "/",
    component: Basic,
    meta: {title: 'Home'}
  },
  {
    name: "Resume",
    path: "/1119",
    component: Resume,
    meta: {title: 'Resume'}
  },
  {
    name: "Basic",
    path: "/basic",
    component: Basic,
    meta: {title: 'Teo | Basic Info'}
  },

];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router;
