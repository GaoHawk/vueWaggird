import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  count: 10,
  history: ['page4', '主页', 'Table', 'page5']
}

// 定义所需的 mutations
const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  },
  REMOVETAG(state, tag) {
    state.history.splice(state.history.indexOf(tag), 1);
  },
  ADDTAG(state, currentTag) {
    if (state.history.indexOf(currentTag) == -1) {
      state.history.push(currentTag)
    }
  },
  RESETHIS(state) {
    state.history.splice(0)
  }
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
