let win = (typeof window !== 'undefined' ? window : global)
let storageName = 'localStorage'

const store = {
  get(key, defaultVal) {
    let val = win[storageName].getItem(key)
    return val !== undefined ? val : defaultVal
  },
  set(key, val) {
    win[storageName].setItem(key, val)
  },
  has(key) {
    return this.get(key) !== undefined
  },
  remove(key) {
    win[storageName].removeItem(key)
  },
  clear() {
    win[storageName].clear()
  }
}

export default store
