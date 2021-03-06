
import router from './index.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    NProgress.start();
    
    if (to.path === '/' || to.path === '/mobile') {
        next();
    } else {
        const vuexData = sessionStorage.getItem('vuex') && JSON.parse(sessionStorage.getItem('vuex'))
        const user = vuexData && vuexData.user
        
        if (user == 'admin') {
            // 跳转到目的路由
            next()
        } else {
            _message(2).error('请先进行登陆好吧')
            next('/')
            NProgress.done();
        }
    }
})


router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})