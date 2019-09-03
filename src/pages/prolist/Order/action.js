/**
 * methods 事件管理
 */


export default {
    //设置表头
    setTh() {
        let columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                align:'center'
            },
        
            {
                title: '公司',
                dataIndex: 'company',
                align:'center'
            },
        
            {
                title: '手机号码',
                dataIndex: 'phone',
                align:'center'
            },
        
            {
                title: '服务项目',
                dataIndex: 'service_item',
                align:'center'
            },
            // {
            //     title: '消费者',
            //     dataIndex: 'xfz',
            //     filters: [{
            //         text: 'vip用户',
            //         value: 'vip',
            //     }, {
            //         text: '普通用户',
            //         value: '普通',
            //     }],
            //     filterMultiple: false,
            //     /**
            //      * 消费者类型筛选
            //      * @param {string} value为filters中的值
            //      * @param {object} record为每行的列表对象
            //      * @return  筛选出列表项显示在表格中
            //      */
            //     onFilter: (value, record) => {
            //         return record.xfz.indexOf(value) === 0
            //     }
            // },
            {
                title: '邮箱',
                dataIndex: 'email',
                align:'center'
            },
            {
                title: '补充说明',
                dataIndex: 'instructions',
                align:'center'
        
            },
            {
                title: '操作',
                scopedSlots: {
                    customRender: 'action'
                },
                align:'center'
            }
        ];
        this.table.columns = columns
    },
    //数据插入表中
    setTableListData() {
        let data = [];
        for (var i = 1; i < 100; i++) {
            data.push({
                key: i,
                name: '开开',
                company: '开司',
                phone: '18011111111',
                email: '456321@tt.com',
                instructions: 'Hello, word',
                service_item: '网站开发'
            })
        }
        this.table.data = data
    },
    //设置表格筛选功能
    setRowSelection() {
        let rowSelection = {
            // 选中项发生变化时的回调
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            // 用户手动选择/取消选择某列的回调
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            // 用户手动选择/取消选择所有列的回调
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            hideDefaultSelections: false
        };
        this.table.rowSelection = rowSelection
    },
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