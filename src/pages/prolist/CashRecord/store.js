import { log } from "util";

/**
 * data 数据管理
 */
const columns = [
{
  dataIndex: 'num',
  title: '编号',
},

{
  title: '技师',
  dataIndex: 'jishi',
}, 

{
  title: '类型',
  dataIndex: 'type',
}, 

{
  title: '工种',
  dataIndex: 'gz',
}, 

{
  title: '消费者',
  dataIndex: 'xfz',
  filters: [{
    text: 'vip用户',
    value: 'vip',
  }, {
    text: '普通用户',
    value: '普通',
  }],
  filterMultiple:false,
  /**
  * 消费者类型筛选
  * @param {string} value为filters中的值
  * @param {object} record为每行的列表对象
  * @return  筛选出列表项显示在表格中
  */
  onFilter: (value, record) => {
     return record.xfz.indexOf(value) === 0
    }
  },
{
  title: '消卡',
  dataIndex: 'xk',
},
{
  title: '价格',
  dataIndex: 'price',

},
{
  title: '操作',
  scopedSlots: {
    customRender: 'action'
  },
}
];


const data = [
 
];
for(var i = 1; i < 100; i ++) {
  data.push({
    key: i,
    num: i,
    jishi: 32,
    type: '王者',
    gz: 'adc',
    xfz: 'vip用户',
    xk: '已完成',
    price: i,
  })
  data.push({
    key: i *10,
    num: i * i,
    jishi: 32,
    type: '王者',
    gz: 'adc',
    xfz: '普通用户',
    xk: '已完成',
    price: i,
  })
}

const rowSelection = {
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
  hideDefaultSelections:false
};



export default {
  // 总数据
  data,
  // 每列的头部文字
  columns,
  /**
   * 默认文案设置，目前包括排序、过滤、空数据文案
   */
  locale:{
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText:'暂无数据'
  },
  //加载loading
  loading:false,
  // 选择功能的配置。
  rowSelection
}