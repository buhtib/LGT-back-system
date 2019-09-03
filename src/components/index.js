
import publicFn from '@/public'

/**
 * 存放公共组件位置
 */

import MultiTab from './MultiTab/MultiTab'
import PageHeader from './PageHeader/PageHeader'

//使用阿里图标库 的IconFont组件
import { Icon } from 'ant-design-vue';
import { scriptUrl } from '@/utils/utils';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl
})

export default {
    install(Vue) {
      Vue.component('MultiTab',MultiTab)
      Vue.component('PageHeader',PageHeader)
      Vue.component('IconFont',IconFont)
      
      publicFn(Vue)
    },
}