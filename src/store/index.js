import Vue from 'vue'
import Vuex from 'vuex'

import config from './config'

Vue.use(Vuex)

const state = {
  config,
  authed: true,
  menus: [{
    name: 'UI组件',
    icon: 'laptop',
    children: [{
      name: 'Buttons',
      url: '/buttons'
    }]
  }, {
    name: '页面',
    icon: 'edge',
    url: '/pages'
  }]
}

const mutations = {}

const getters = {
  authed: state => state.authed,
  config: state => state.config,
  menus: state => state.menus
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
