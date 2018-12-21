/*
 * @Description: Vuex
 * @Author: Arivn
 * @Date: 2018-12-13 16:40:48
 * @Github: https://github.com/973749104
 * @Blog: http://www.liuhgxu.space/
 * @LastEditors: Arivn
 * @LastEditTime: 2018-12-18 15:46:54
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nodelist: []
  },
  getters: {
    getnode: state => {
      return state.nodelist
    }
  },
  mutations: {
    SETNODE: (state, nodelist) => {
      state.nodelist = nodelist
    }
  },
  actions: {
    setnode: ({commit}, nodelist) => {
      commit('SETNODE', nodelist)
    }
  }
})

export default store