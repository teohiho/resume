import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from "./router/index";

const app = createApp(App)
  .use(store)
  .use(VueRouter);
  
  app.mount("#app");