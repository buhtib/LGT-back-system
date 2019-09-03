<!-- 左侧侧边栏 -->
<template>
  <a-layout-sider 
      :trigger="null" 
      breakpoint="lg" 
      width="260"
      :collapsed="collapsed"
       @breakpoint="onBreakpoint"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0,zIndex: 2, 'background-color': '#fff' }"
    >
    <!-- 侧边栏顶部logo  -->
    <logo :showTitle="showTitle" title="LGT后台系统"/>

    <a-menu
      :defaultSelectedKeys="defaultSelectedKeys"
      :defaultOpenKeys="tabKeysArr"
      mode="inline"
      theme="light"
    >

      <a-sub-menu :key="leftTabItem.meta.key" v-for="leftTabItem in leftTabList"  >
        <span slot="title">
          <icon-font :type="leftTabItem.meta.icon" />
          <span>{{leftTabItem.meta.text}}</span>
        </span>

        <a-menu-item :key="leftTabItemChild.meta.key" v-for="leftTabItemChild in leftTabItem.children">
          <router-link :to="{name:leftTabItemChild.name}">
            {{leftTabItemChild.meta.text}}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>

  </a-layout-sider>
</template>
<script>

import logo from "../tools/Logo";
import { mapMutations, mapState } from 'vuex'
//引入 路由数组进行循环
import { routes } from '@/router'

export default {
    components: {
        logo
    },
    data() {
        return {
            showTitle: true,
            leftTabList:routes[1].children,
        };
    },
    computed:{
        ...mapState(['collapsed']),
        //展开全部 子菜单的key集合
        tabKeysArr() {
            return this.leftTabList.map(item=>  item.meta.key)
        },
        //保持选中菜单项的选中状态
        defaultSelectedKeys() {
            return [this.$route.meta.key]
        }
    },

    methods: {
        ...mapMutations(['changeCollapsed']),
        /**
         * 响应式收缩
         */
        onBreakpoint(collapsed, type) {
            this.$store.commit('changeCollapsed', collapsed)
        },
    }
};
</script>

<style lang="less" scoped>
    /deep/ .ant-layout-sider{
        background-color: #fff;
    }
</style>