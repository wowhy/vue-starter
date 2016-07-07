import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  amount: 1
}

const mutations = {
  INCREMENT(state, amount) {
    state.count = state.count + amount
  },

  UPDATE_AMOUNT(state, amount) {
    state.amount = amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
