<!-- 表单 -->
<template>
  <a-modal
    title="新建收银单"
    :width="400"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel"
    cancelText="取消"
    okText="确定"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-form-item label="编号" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['num', {rules: [{required: true,  message: '请输入完整！'}]}]" />
        </a-form-item>

        <a-form-item label="技师" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <!-- <a-input v-decorator="['jishi', {rules: [{required: true,  message: '请输入完整！'}]}]" /> -->
          <a-input-group>
            <a-select  :defaultValue="canSelectDataList.jishi[0]" style="width:100%">
              <a-select-option 
                :value="selectName" 
                v-for="(selectName, i) in canSelectDataList.jishi" 
                :key="i"
              >{{selectName}}</a-select-option>
            </a-select>
          </a-input-group>
        </a-form-item>

        <a-form-item label="类型" :labelCol="labelCol" :wrapperCol="wrapperCol">
           <a-input-group>
            <a-select  :defaultValue="canSelectDataList.type[0]" style="width:100%">
              <a-select-option 
                :value="selectName" 
                v-for="(selectName, i) in canSelectDataList.type" 
                :key="i"
              >{{selectName}}</a-select-option>
            </a-select>
          </a-input-group>
        </a-form-item>

        <a-form-item label="工种" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['gz']" disabled/>
        </a-form-item>

        <a-form-item label="消卡" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['xk', {rules: [{required: true,  message: '请输入完整！'}]}]" />
        </a-form-item>

        <a-form-item label="消费者" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input v-decorator="['xfz', {rules: [{required: true,  message: '请输入完整！'}]}]" />
        </a-form-item>

          <a-form-item label="价格" :labelCol="labelCol" :wrapperCol="wrapperCol" >
              <a-input-number  :defaultValue=100 style="width:100%" step=10   />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      visible: false,
      confirmLoading: false,

      form: this.$form.createForm(this),
      //可选的数据
      canSelectDataList:{
          jishi:['Home', 'Company'],
          type:['Home', 'Company'],
      },
    };
  },
  methods: {
    add() {
      this.visible = true;
    },
    //提交
    handleSubmit() {
      const {
        form: { validateFields }
      } = this;

      this.confirmLoading = true;
      validateFields((errors, values) => {
        console.log(values);

        if (!errors) {
          setTimeout(() => {
            this.visible = false;
            this.confirmLoading = false;
            this.$emit("ok", values);

            _deleteFormData(this.form);
          }, 1500);
        } else {
          this.confirmLoading = false;
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
  }
};
</script>

<style lang="less" scoped>
</style>

