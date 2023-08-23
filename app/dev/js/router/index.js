import * as vueRouter from "vue-router";
import Resume from "../pages/Resume.vue"

const routes = [
  {
    name: "Resume",
    path: "/",
    component: Resume,
    meta: {title: '[EN] Resume'}
  }
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router;
