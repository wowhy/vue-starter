const actions = {
  showSidebar({ commit }) {
    commit('sidebar', true)
  },
  hideSidebar({ commit }) {
    commit('sidebar', false)
  },
  toggleSidebar({ commit, state }) {
    commit('sidebar', !state.config.sidebar)
  }
}

export default actions
