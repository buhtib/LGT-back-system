// ie polyfill
import '@babel/polyfill'
import Vue from 'vue'
/**
 * 挂载公共组件 及全局方法
 */
import commonComponents from '@/components'
Vue.use(commonComponents);
import App from './App.vue'
import router from './router'
import './router/permission'
import store from './store'
import './ui/antd-vue-ui'


Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')