
import router from './index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
    NProgress.start();
    console.log(to.path);
    
    if (to.path === '/') {
        next();
    } else {
        const vuexData = sessionStorage.getItem('vuex') && JSON.parse(sessionStorage.getItem('vuex'))
        const user = vuexData && vuexData.user
        console.log(sessionStorage.getItem('vuex'));
        
        
        if (sessionStorage.getItem('vuex')) {
            // 跳转到目的路由
            next()
        } else {
            next('/')
            NProgress.done();
        }
    }
})


router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})