<!--首页 -->
<template>
  <div class="home">
    <a-button type="primary">首页</a-button>
    <a-button type="dashed" @click="$router.push({ path: '/404' })">404页面</a-button>
    <a-button type="dashed" @click="$router.push({ path: '/login' })">login页面</a-button>

    <div>{{msg}}</div>
  </div>
</template>

<script>
import data from "./store.js";
import methods from "./action.js";

export default {
  data() {
    return data;
  },
  methods
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/123.jpg");
  background-size: cover;
}
</style>

