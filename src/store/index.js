import Vue from 'vue'
import Vuex from 'vuex'
import vuexForever from './vuexForever'

Vue.use(Vuex)

const state = {
    nickname:'李嘉诚',
    avatar:'~@/assets/img/logo.svg',
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
    }
}

const actions = {
    Logout({ commit, state }) {
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexForever.persistedstate('localStorage', ['TOKEN'])]
})