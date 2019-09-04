import Vue from 'vue'
import Vuex from 'vuex'
import vuexForever from './vuexForever'

Vue.use(Vuex)

const state = {
    nickname:'超级管理员',
    user:'',
    avatar:'',
    /**
     * 控制左边布局 侧边栏菜单收缩
     */
    collapsed:false,
    TOKEN:''
}
const getters = {}

const mutations = {
    changeCollapsed(state, collapsed) {
        state.collapsed = collapsed
    },
    keepUser(state, user) {
        state.user = user
    },
    
}

const actions = {
    Logout({ commit, state }) {

    },
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexForever.persistedstate('sessionStorage', ['user'])]
})