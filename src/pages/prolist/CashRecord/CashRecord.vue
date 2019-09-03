<!--首页 右侧中间内容块  收银单记录-->
<template>
  <div class="pro-content">
    <div class="op-section">
      <a-row type="flex" justify="end" align="top">

        <a-col :span="8" pull="10">
         <route-name />
        </a-col>

        <a-col :span="6" >
          <a-col :span="12" pull="1">
            <a-button type="primary" icon="plus" @click="$refs.createModal.add()" block >新建</a-button>
          </a-col>
          <a-col :span="12">
            <a-button type="danger" icon="delete" @click="deleteCrashItem" block>删除</a-button>
          </a-col>
        </a-col>

      </a-row>
    </div>


    <a-table
      :columns="columns"
      :dataSource="data"
      :locale="locale"
      :loading="loading"
      @change="handlePage"
      :rowSelection="rowSelection"
    >
      <span slot="action">
        <a href="javascript:;">修改</a>
        <a-divider type="vertical" />
        <a href="javascript:;">删除</a>
      </span>
    </a-table>


    <!-- 新建表单 -->
    <create-form  ref="createModal"/>

  </div>
</template>

<script>
import data from "./store.js";
import methods from "./action.js";
import CreateForm from "../components/CreateForm";
import RouteName from "../components/RouteName";

export default {
  components: {
    CreateForm,
    RouteName
  },
  data() {
    return data;
  },

  methods
};
</script>

<style lang="less" scoped>
.pro-content {
  min-height: 360px;
  padding: 24px;
  background: #fff;
}
.ant-table td {
  white-space: nowrap;
}

.op-section {
  margin-bottom: 20px;
}


</style>

