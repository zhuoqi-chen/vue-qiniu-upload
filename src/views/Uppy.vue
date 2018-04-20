<template>
    <div>
        <div id="select-files"></div>
    </div>
</template>

<script>
import "uppy/dist/uppy.css";
import Uppy from "uppy/lib/core";
import Dashboard from "uppy/lib/plugins/Dashboard";
import FileInput from "uppy/lib/plugins/FileInput";
import zh_CN from "uppy/lib/locales/zh_CN";
import Qiniu from "./UppyQiniu";
Object.assign(zh_CN.strings, {
  dropPaste: "拖拽或者从",
  browse: "浏览器"
});
window.token =
  "eaD5kIlApsS-lfxa9-0ktE2enUkUzJm9NG4Czvga:sXSctVuGZqTziIA1c0U36mRD1-E=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTUyNDI0NTkxNH0=";
export default {
  name: "Uppy",
  mounted() {
    this.$nextTick(() => {
      const uppy = Uppy({
        autoProceed: false
      });
      uppy
        .use(Dashboard, {
          target: "#select-files",
          inline: true,
          proudlyDisplayPoweredByUppy: false,
          locale: zh_CN
        })
        .use(Qiniu, {
          host: "http://p7fl7t6sj.bkt.clouddn.com",
          getToken() {
            return window.token;
          }
        })
        .run();
      uppy.on("complete", result => {
        console.log(
          `Upload complete! We’ve uploaded these files: ${result.successful}`
        );
      });
    });
  }
};
</script>

<style scoped>
</style>
