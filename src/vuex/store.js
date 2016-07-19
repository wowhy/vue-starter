import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  amount: 1,
  authenticated: false
}

const mutations = {
  INCREMENT(state, amount) {
    state.count = state.count + amount
  },

  UPDATE_AMOUNT(state, amount) {
    state.amount = amount
  },

  UPDATE_AUTHED(state, value) {
    state.authenticated = value
  }
}

export default new Vuex.Store({
  state,
  mutations
})
