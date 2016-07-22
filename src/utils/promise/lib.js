/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

/* eslint no-useless-call: "off" */

const RESOLVED = 0
const REJECTED = 1
const PENDING = 2

import Vue from 'vue'

const nextTick = Vue.util.nextTick

export default function Promise(executor) {
  this.state = PENDING
  this.value = undefined
  this.deferred = []

  let promise = this

  try {
    executor(function(x) {
      promise.resolve(x)
    }, function(r) {
      promise.reject(r)
    })
  } catch (e) {
    promise.reject(e)
  }
}

Promise.reject = function(r) {
  return new Promise(function(resolve, reject) {
    reject(r)
  })
}

Promise.resolve = function(x) {
  return new Promise(function(resolve, reject) {
    resolve(x)
  })
}

Promise.all = function all(iterable) {
  return new Promise(function(resolve, reject) {
    let count = 0
    let result = []

    if (iterable.length === 0) {
      resolve(result)
    }

    function resolver(i) {
      return function(x) {
        result[i] = x
        count += 1

        if (count === iterable.length) {
          resolve(result)
        }
      }
    }

    for (let i = 0; i < iterable.length; i += 1) {
      Promise.resolve(iterable[i]).then(resolver(i), reject)
    }
  })
}

Promise.race = function race(iterable) {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < iterable.length; i += 1) {
      Promise.resolve(iterable[i]).then(resolve, reject)
    }
  })
}

let p = Promise.prototype

p.resolve = function resolve(x) {
  let promise = this

  if (promise.state === PENDING) {
    if (x === promise) {
      throw new TypeError('Promise settled with itself.')
    }

    let called = false

    try {
      let then = x && x['then']

      if (x !== null && typeof x === 'object' && typeof then === 'function') {
        then.call(x, function(x) {
          if (!called) {
            promise.resolve(x)
          }
          called = true
        }, function(r) {
          if (!called) {
            promise.reject(r)
          }
          called = true
        })
        return
      }
    } catch (e) {
      if (!called) {
        promise.reject(e)
      }
      return
    }

    promise.state = RESOLVED
    promise.value = x
    promise.notify()
  }
}

p.reject = function reject(reason) {
  let promise = this

  if (promise.state === PENDING) {
    if (reason === promise) {
      throw new TypeError('Promise settled with itself.')
    }

    promise.state = REJECTED
    promise.value = reason
    promise.notify()
  }
}

p.notify = function notify() {
  let promise = this

  nextTick(function() {
    if (promise.state !== PENDING) {
      while (promise.deferred.length) {
        let deferred = promise.deferred.shift()
        let onResolved = deferred[0]
        let onRejected = deferred[1]
        let resolve = deferred[2]
        let reject = deferred[3]

        try {
          if (promise.state === RESOLVED) {
            if (typeof onResolved === 'function') {
              resolve(onResolved.call(undefined, promise.value))
            } else {
              resolve(promise.value)
            }
          } else if (promise.state === REJECTED) {
            if (typeof onRejected === 'function') {
              resolve(onRejected.call(undefined, promise.value))
            } else {
              reject(promise.value)
            }
          }
        } catch (e) {
          reject(e)
        }
      }
    }
  })
}

p.then = function then(onResolved, onRejected) {
  let promise = this

  return new Promise(function(resolve, reject) {
    promise.deferred.push([onResolved, onRejected, resolve, reject])
    promise.notify()
  })
}

p.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}
