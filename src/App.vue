<template>
<a-locale-provider :locale="locale">
  <div id="app">
     <router-view :key="$route.fullpath"></router-view>
  </div>
</a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';

export default {
  name: 'app',
  data() {
    return {
      locale: zhCN
    }
  },
}
</script>

<style lang="less">
@import "./style/base";
@import "./style/global";
#app {
 
}
</style>
