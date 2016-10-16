const mutations = {
  sidebar(state, show = true) {
    state.config.sidebar = show
  },
  addTab(state, tab) {
    state.tabs.push(tab)
  },
  removeTab(state, tab) {}
}

export default mutations
