<!-- 加载中的按钮 用于提交，登陆等 -->
<template>
    <div>
        <a-button
            :loading="loading"
            v-bind="$attrs"
            v-on="$listeners"
            :disabled="loading"
        >登录</a-button>
    </div>
</template>

<script>
export default {
    //可以传入 ant-vue  a-button的配置项 (v-bind="$attrs" v-on="$listeners" 可进行接收属性和事件)
    //另外可再传入loading 用于显示加载动画和禁用按钮
    //@example  <a-button :loading="true" type="danger" @click="event"></a-button>
    props: {
        loading: {
            type: Boolean,
            value: false
        }
    }
};
</script>

<style lang="less" scoped>
</style>