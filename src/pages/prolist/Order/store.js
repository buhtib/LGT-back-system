/**
 * data 数据管理
 */

export default {
    table:{
        // 总数据
        data:[],
        // 每列的头部文字
        columns:[],
        /**
         * 默认文案设置，目前包括排序、过滤、空数据文案
         */
        locale: {
            filterConfirm: '确定',
            filterReset: '重置',
            emptyText: '暂无数据'
        },
        // 选择功能的配置。
        rowSelection:{},
        //分页设置
        pagination:{
            showSizeChanger:true,
            showQuickJumper:true,
            total:100
        }
    },
    //加载loading
    loading: false
}