<template>
  <div class="about">
    <h1>qiniu sdk</h1>
    <input type="file" accept="image/*" name="file" @change="fileInputOnChange($event)" />
  </div>
</template>
<script>
import * as qiniu from "qiniu-js";
export default {
  name: "QiniuSdk",
  data() {
    return {
      token:
        "eaD5kIlApsS-lfxa9-0ktE2enUkUzJm9NG4Czvga:z6LdAORty3KWfpRBBTcIT2EYVbM=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTUyNDIzODkzNH0="
    };
  },
  methods: {
    fileInputOnChange(event) {
      const el = event.currentTarget;
      const file = el.files[0];
      if (file !== null) {
        const observable = qiniu.upload(file, "test123", this.token);
        observable.subscribe({
          next(res) {
            console.log(res);
          },
          error(err) {
            console.log(err);
          },
          complete(res) {
            console.log(res);
          }
        });
      }
    }
  }
};
</script>
