/**
 * methods 事件管理
 */


export default {
    /**
     * 分页回调
     * @param {Object：pagination} ｛ current 当前页数,  pageSize 当前页数所有个数｝
     * @param {Object}  filters 过滤条件
     * @param {Object} sorter 排序条件
     */
    handlePage(pagination, filters, sorter) {
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 1000)

    },
    deleteCrashItem() {
        this.$confirm({
            title: "提示",
            content: "确定删除吗 ?",
            cancelText: '取消',
            okText: '确定',
            //确定回调
            onOk() {

            },
            //删除回调
            onCancel() {

            }
        });
    }

}