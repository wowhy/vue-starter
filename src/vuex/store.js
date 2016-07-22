import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  amount: 1,
  authenticated: false,
  toasts: []
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
  },

  ADD_TOAST(state, message, type) {
    let toastr
    state.toasts.push((toastr = window.toastr[type || 'info'](message, '', {
      onHidden() {
        state.toasts.$remove(toastr)
      }
    })))
  },

  CLEAR_TOASTS(state) {
    state.toasts.forEach((toast) => {
      window.toastr.clear(toast)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
