<!-- 左侧侧边栏logo -->
<template>
  <div class="logo">
    <div>
      <img src="~@/assets/img/logo1.png" />
      <h1 v-if="showTitle">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * logo文字
     */
    title: {
      type: String,
      default: "最强 LGT",
      required: false
    },
    /**
     *  控制是否显示 logo文字
     */
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  transition: all 0.3s;
  user-select: none;
  img,
  svg,
  h1 {
    display: inline-block;
    vertical-align: middle;
  }

  img,
  svg {
    height: 32px;
    width: 32px;
  }
  h1 {
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}
</style>

