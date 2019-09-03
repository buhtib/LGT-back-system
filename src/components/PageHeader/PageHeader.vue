<!-- 右侧顶部布局 -->
<template>
  <div id="page-header" class="user-wapper">
    <a-layout-header class="user-wapper-header">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggle" />

      <!-- 个人管理 -->
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar
            class="avatar"
            size="small"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567513343557&di=c35f59bccbd4869c86fa9dd37e7f81c4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F22%2F20171222223729_d8HCB.jpeg"
          />
          <span>{{ nickname }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="user">
            <div>
              <a-icon type="user" />
              <span>团队中心</span>
            </div>
          </a-menu-item>
          <a-menu-item key="setting">
            <div>
              <a-icon type="setting" />
              <span>个人设置</span>
            </div>
          </a-menu-item>
          <a-menu-divider />

          <a-menu-item key="logout">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout" />
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["avatar", "nickname", "collapsed"])
  },
  methods: {
    ...mapMutations(["changeCollapsed"]),
    handleLogout() {
      this.$confirm({
        title: "提示",
        content: "真的要注销登录吗 ?",
        cancelText: "取消",
        okText: "确定"
      });
    },
    toggle() {
      this.$store.commit("changeCollapsed", !this.collapsed);
    }
  }
};
</script>

<style lang="less" scoped>
#page-header {
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-sizing: border-box;
  .user-wapper-header {
    padding: 0;
    background: #fff;
  }
  .nickname {
    line-height: 1;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  // 右侧顶部布局
  .action {
    cursor: pointer;
    padding: 0 30px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
    }

    .icon {
      font-size: 16px;
      padding: 4px;
    }
  }
}
// 右侧顶部布局
// 外置的样式控制
.user-dropdown-menu {
  span {
    user-select: none;
  }
}
.ant-dropdown-link {
  float: right;
  height: 100%;
}
.user-dropdown-menu-wrapper.ant-dropdown-menu {
  padding: 4px 0;

  .ant-dropdown-menu-item {
    width: 160px;
  }

  .ant-dropdown-menu-item > a {
    min-width: 12px;
    margin-right: 8px;
  }
}
</style>

