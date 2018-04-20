import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import QiniuSdk from "./views/QiniuSdk.vue";
import Uppy from "./views/Uppy.vue";

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
    },
    {
      path: "/uppy",
      name: "Uppy",
      component: Uppy
    }
  ]
});
