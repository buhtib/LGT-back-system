<!--包含头部和尾部的 布局组件   -- 登录页-->
<template>
    <div
        id="userLayout"
        :class="['user-layout-wrapper']"
    >
        <div class="video-bg">
            <video
                muted=""
                data-autoplay=""
                loop="loop"
                autoplay="autoplay"
                src="../../static/bg.mp4"
                class="video-tvc"
                id="video-tvc"
                data-object-fit=""
            >抱歉，您的浏览器不支持内嵌视频</video>
        </div>
        <div class="container">
            <div class="top">
                <div class="header">
                    <img
                        src="~@/assets/img/logo1.png"
                        class="logo"
                        alt="logo"
                    >
                    <span class="title">登录</span>
                </div>
                <div class="desc">
                    欢迎进入LGT后台管理系统
                </div>
            </div>

            <slot />

            <div class="footer">
                <div class="copyright">
                    Copyright &copy; 2019 LGT后台管理系统
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
    height: 100%;
   

    &.mobile {
        .container {
            .main {
                max-width: 368px;
                width: 98%;
            }
        }
    }
    .video-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        .video-tvc {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
    .container {
        width: 100%;
        min-height: 100%;
        // background: #f0f2f5 url(~@/assets/img/background.svg) no-repeat 50%;
        background-size: 100%;
        padding: 110px 0 144px;
        position: relative;
        overflow: hidden;

        a {
            text-decoration: none;
        }

        .top {
            text-align: center;

            .header {
                height: 44px;
                line-height: 44px;

                .badge {
                    position: absolute;
                    display: inline-block;
                    line-height: 1;
                    vertical-align: middle;
                    margin-left: -12px;
                    margin-top: -10px;
                    opacity: 0.8;
                }

                .logo {
                    height: 44px;
                    vertical-align: top;
                    margin-right: 16px;
                    border-style: none;
                }

                .title {
                    font-size: 33px;
                    color: rgba(0, 0, 0, 0.85);
                    font-family: Avenir, "Helvetica Neue", Arial, Helvetica,
                        sans-serif;
                    font-weight: 600;
                    position: relative;
                    top: 2px;
                }
            }
            .desc {
                margin-top: 12px;
                margin-bottom: 40px;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.45);
            }
        }

        .main {
            min-width: 260px;
            width: 368px;
            margin: 0 auto;
        }

        .footer {
            position: absolute;
            width: 100%;
            bottom: 0;
            padding: 0 16px;
            margin: 48px 0 24px;
            text-align: center;

            .links {
                margin-bottom: 8px;
                font-size: 14px;
                a {
                    color: rgba(0, 0, 0, 0.45);
                    transition: all 0.3s;
                    &:not(:last-child) {
                        margin-right: 40px;
                    }
                }
            }
            .copyright {
                color: rgba(0, 0, 0, 0.45);
                font-size: 14px;
            }
        }
    }
}
</style>



