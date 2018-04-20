import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import QiniuSdk from "./views/QiniuSdk.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/qiniu-sdk",
      name: "QiniuSdk",
      component: QiniuSdk
    }
  ]
});
