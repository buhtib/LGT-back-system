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
                  class="input"
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
                  class="input"
                >
                    <icon-font slot="prefix" type="icon-mima" />
                </a-input>
            </a-form-item>
             <a-form-item>
                 <a-row type="flex">
                     <a-col :span="14">
                        <a-input
                            size="large"
                            type="text"
                            placeholder="验证码:"
                            v-decorator="[
                                'code',
                                {rules: [{ required: true, message: '请输入验证码' }]}
                            ]"
                            class="input"
                        >
                            <icon-font slot="prefix" type="icon-imgcode" />
                        </a-input>
                     </a-col>
                    <a-col :span="8" :offset="2" @click="hash++">
                         <a-tooltip>
                            <template slot='title'>
                                看不清,可以点击图片切换
                            </template>
                            <img :src="imgCode" alt="" class="img-code cursor_pointer">
                        </a-tooltip>
                    </a-col>
                 </a-row>
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
import { mapState } from 'vuex'

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
  mounted() {
      //赋值 输入账号input
    this.form.setFieldsValue({ user:this.user });
  },
  computed: {
    ...mapState(['user']),
    /**
     * 防抖登陆
     */
    _handleSubmit() {
      return _.debounce(this.handleSubmit, 500);
    },
    imgCode() {
        return  `http://120.79.160.28/img/vcode?${this.hash}`
    }
  },
  methods: {
    /**
     * 登录成功请求后的回调
     * @param {object} data请求得到的数据
     */
    _callBackLogin(data) {
        if (data.success) {
            this.$store.commit('keepUser', 'admin')
            this.$router.replace({
                name: "prolist"
            });
        }else {
            _message().error('账号名或密码错误或验证码')
        }
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
      .input {
        height: 50px;
      }
      button.login-button {
        height: 40px;
        width: 100%;
        padding: 0 15px;
        font-size: 16px;
      }
      .img-code {
        position: relative;
        height: 100%;
        width: 100%;
      }
    }
    /deep/ .ant-input-prefix {
      left: 8px;
    }
  }
}
</style>

