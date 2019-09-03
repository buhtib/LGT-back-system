<!--主页面： 基础页面布局，包含了头部导航，侧边栏和通知栏 -->
<template>
  <a-layout id="components-layout-responsive">

  <!-- 侧边栏 -->
     <multi-tab  />

    <!-- 右边布局 -->
    <a-layout  :style="{ marginLeft: widthCalc }" >
      <!-- 右边顶部布局 -->
       <!-- layout header -->
      <page-header  :style="{ position: 'fixed', zIndex: 1,  top:0, width: '100%', height: '64px', paddingRight:widthCalc }"/>

      <!-- 右边中间布局 -->
      <a-layout-content :style="{ margin: '80px 16px 0 ' }">
        
          <router-view > </router-view>
       
      </a-layout-content>

      <!-- 右边底部布局 -->
      <!-- <a-layout-footer style="textAlign: center">{{footerText}}</a-layout-footer> -->
    </a-layout>

<!-- 置顶组件 -->
    <div class="back-top">
      <!-- visibilityHeight 滚动高度达到此参数值才出现 BackTop -->
      <a-back-top  :visibilityHeight="400"/>
      <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
    </div>

  </a-layout>
</template>
<script>

import {  mapState } from 'vuex'
import { timeFix } from '@/utils/utils'


export default {
  name: "BasicLayout",
  data() {
    return {
      footerText:'美发管理系统',
      
    }
  },
  created() {
    this.loginSuccess()
  },
  methods:{
    loginSuccess() {
        this.$notification.success({
            message: '欢迎',
            description: `${timeFix()}，欢迎回来`
        })
    }
  },
  computed:{
    ...mapState(['collapsed']),
     /**
     * 动态变化 宽度
     */
    widthCalc() {
      if( this.collapsed ) {
        return ' 80px '
      }else {
        return  ' 260px '
      }
    }
  },
};
</script>

<style lang="less" scoped>
#components-layout-responsive {
  min-height: 100%;
}

  .back-top  .ant-back-top {
    bottom: 50px;
    right: 20px;
  }

</style>



