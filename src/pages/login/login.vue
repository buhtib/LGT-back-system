<!-- 登录 -->
<template>
  <userLayout>
    <div class="main">
        <a-form :form="form" @submit.prevent="_handleSubmit" class="user-layout-login">
            <a-form-item>
                <a-input
                placeholder="账户:"
                v-decorator="[
                'user',
                {rules: [{ required: true, message: '请输入你的账户名' }]}
                ]"
                >
                <icon-font slot="prefix" type="icon-zhanghu" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                type="password"
                placeholder="密码:"
                v-decorator="[
                    'psd',
                    {rules: [{ required: true, message: '请输入你的密码' }]}
                ]"
                >
                <icon-font slot="prefix" type="icon-mima" />
                </a-input>
            </a-form-item>

            <a-form-item>
                <a-button
                :type="buttonIsLoading ? 'default' : 'primary'"
                size="large"
                html-type="submit"
                :loading="buttonIsLoading"
                class="login-button"
                >登录</a-button>
            </a-form-item>
        </a-form>
    </div>

  </userLayout>
</template>

<script>
import data from "./store.js";
import methods from "./action.js";

// 包含头部和尾部的 布局组件
import userLayout from "@/components/UserLayout.vue";

export default {
  components: {
    userLayout
  },
  data() {
    return data;
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  computed: {

    /**
     * 防抖登陆
     */
    _handleSubmit() {
      return _.debounce(this.handleSubmit, 500);
    }
  },
  methods: {
    /**
     * 登录成功请求后的回调
     * @param {object} data请求得到的数据
     */
    _callBackLogin(data) {
      // if (data.status === 0) {

      //   window.location.href = "/waiting.html";
      // }else {
      //   _message().error('账号名或密码错误或验证码')
      // }
          this.buttonIsLoading = false;

      this.$router.replace({
        name: "prolist"
      });
    },
    ...methods
  },

  destroyed() {
    window.removeEventListener("keyup", this.handleKeyup);
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 110px 0 144px;
  background: #f0f2f5 url(../../assets/img/background.svg) no-repeat 50%;
  background-size: 100%;

  .main {
    .user-layout-login {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;

      .code-img {
        margin-top: 3px;
      }
      button.login-button {
        height: 40px;
        width: 100%;
        padding: 0 15px;
        font-size: 16px;
      }
    }
    /deep/ .ant-input-prefix {
      left: 8px;
    }
  }
}
</style>

