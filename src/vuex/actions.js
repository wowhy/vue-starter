export const incrementCounter = function ({
  dispatch,
  state
}) {
  dispatch('INCREMENT', state.amount)
}

export const updateAmount = function ({
  dispatch
}, value) {
  dispatch('UPDATE_AMOUNT', value)
}

export const updateAuthed = function ({ dispatch }, value) {
  dispatch('UPDATE_AUTHED', value)
}
