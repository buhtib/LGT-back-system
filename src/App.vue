<template>
<a-locale-provider :locale="locale">
  <div id="app">
     <router-view :key="$route.fullpath"></router-view>
  </div>
</a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import {isMobile} from '@/utils/utils'

export default {
  name: 'app',
  data() {
    return {
      locale: zhCN
    }
  },
  beforeCreate() {
    if (isMobile()) {
      this.$router.replace('/mobile');
    }
  }
}
</script>

<style lang="less">
@import "./style/base";
@import "./style/global";
#app {
 
}
</style>
