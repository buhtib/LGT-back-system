<!--首页 右侧中间内容块 -->
<template>
  <div class="pro-content">
    VIP客户
  </div>
</template>

<script>
import data from "./store.js";
import methods from "./action.js";

export default {
 
  data() {
    return data;
  },
  created() {
  },
  methods
};
</script>

<style lang="less" scoped>
  .pro-content {
    min-height: 360px;
    padding: 24px;
    background: #fff;
  }
</style>

