import Promise from '../promise'
import storage from '../storage'

const sessionKey = 'user_session'
const sessionTimestampKey = 'user_session_timestamp'
const expiredDuration = 1000 * 60 * 120 // 2 hours

export default {
  authenticated: false,
  token: '',
  user: {},

  login(username, password) {
    return new Promise(function(resolve, reject) {
      if (username === 'admin' && password === 'admin') {
        this.authenticated = true
        this.token = '123456'
        this.user = {
          code: 'admin',
          name: '超级管理员',
          roles: ['admin'],
          jobs: []
        }

        updateTimestamp()
        saveSession({
          token: this.token,
          user: this.user
        })

        resolve()
      } else {
        reject({
          message: '用户名或密码错误!'
        })
      }
    }.bind(this))
  },

  logout() {
    return new Promise((resolve) => {
      this.authenticated = false
      clearSession()
      resolve()
    })
  },

  check() {
    return this.authenticated
  },

  sync() {
    if (!isExpired()) {
      let session = readSession()
      if (session) {
        this.token = session.token
        this.user = session.user
        this.authenticated = true
        return true
      }
    }

    return false
  },

  getAuthHeader() {
    return {
      'Authorization': this.token
    }
  }
}

function updateTimestamp() {
  storage.set(sessionTimestampKey, Date.now())
}

function isExpired() {
  let lastTimestamp = storage.get(sessionTimestampKey)
  if (!lastTimestamp) {
    return true
  }

  let now = Date.now()
  let diff = now - lastTimestamp
  return diff > expiredDuration
}

function clearSession() {
  storage.remove(sessionKey)
  storage.remove(sessionTimestampKey)
}

function readSession() {
  let data = storage.get(sessionKey)
  if (!data) {
    return null
  }

  try {
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
    return null
  }
}

function saveSession(session) {
  storage.set(sessionKey, JSON.stringify(session))
}
