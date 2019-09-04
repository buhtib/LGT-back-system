/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

const Login = () =>
    import( /* webpackChunkName: "page" */ '@/pages/login/login.vue');
const NotFound = () =>
    import( /* webpackChunkName: "page" */ '@/pages/notFound.vue');
const BasicLayout = () =>
    import( /* webpackChunkName: "page" */ '@/components/BasicLayout.vue');
const RouterView = () =>
    import( /* webpackChunkName: "page" */ '@/components/RouterView.vue');

Vue.use(Router)

export const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/prolist',
        name: 'prolist',
        component: BasicLayout,
        redirect: '/order/order',
        children: [{
                path: '/order',
                name: 'orders',
                component: RouterView,
                meta: {
                    //key 为控制左侧菜单选中的key
                    key: 'orders',
                    icon: 'icon-shouyin',
                    text: '订单管理'
                },
                children: [{
                    path: 'order',
                    name: 'order',
                    component: () => import( /* webpackChunkName: "page" */ '@/pages/prolist/Order/Order'),
                    meta: {
                        key: 'order',
                        text: '订单管理'
                    },
                }]
            },
            {
                path: '/billSearch',
                name: 'billSearchs',
                component: RouterView,
                meta: {
                    key: 'billSearch',
                    icon: 'icon-zhangdan',
                    text: '账单查询'
                },
                children: [{
                    path: 'billSearch1',
                    name: 'billSearch',
                    component: () => import( /* webpackChunkName: "page" */ '@/pages/prolist/BillSearch/BillSearch'),
                    meta: {
                        key: 'billSearch1',
                        text: '账单查询'
                    },

                }, {
                    path: 'billSearch12',
                    name: 'billSearch2',
                    component: () => import( /* webpackChunkName: "page" */ '@/pages/prolist/BillSearch/BillSearch'),
                    meta: {
                        key: 'billSearch12',
                        text: '账单查询2'
                    },

                }, ]
            },
            {
                path: '/peopleList',
                name: 'peopleLists',
                component: RouterView,
                meta: {
                    key: 'peopleList',
                    icon: 'icon-mingdan',
                    text: '名单录入'
                },
                children: [{
                        path: 'peopleList1',
                        name: 'peopleList',
                        component: () => import( /* webpackChunkName: "page" */ '@/pages/prolist/PeopleList/PeopleList'),
                        meta: {
                            key: 'peopleList1',
                            text: '名单录入'
                        },
                    },

                ]
            },
            {
                path: '/vipPeopleList',
                name: 'vipPeopleLists',
                component: RouterView,
                meta: {
                    key: 'vipPeopleList',
                    icon: 'icon-vip',
                    text: 'VIP客户'
                },
                children: [{
                    path: 'vipPeopleList1',
                    name: 'vipPeopleList',
                    component: () => import( /* webpackChunkName: "page" */ '@/pages/prolist/VipPeopleList/VipPeopleList'),
                    meta: {
                        key: 'vipPeopleList1',
                        text: 'VIP客户'
                    },

                }, ]
            },
        ]
    },
    {
        name: '404',
        path: '/404',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]
const router = new Router({
    base: '/',
    mode: 'hash',
    routes
})

export default router;