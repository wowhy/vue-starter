import Promise from 'utils/promise'

export default {
  install(Vue) {
    Vue.msg = new MessageBox()
  }
}

class MessageBox {
  constructor() {
    this.swal = window.swal
  }

  custom(config) {
    return new Promise((resolve, reject) => {
      this.swal(config, (result) => {
        if (result === false) {
          reject(result)
        } else {
          resolve(result)
        }
      })
    })
  }

  alert(text, title) {
    title = title || '提示'

    return new Promise((resolve) => {
      this.swal({
        title: title,
        text: text
      }, () => {
        resolve()
      })
    })
  }

  confirm(text, title) {
    title = title || '提示'

    return new Promise((resolve, reject) => {
      this.swal({
        title: title,
        text: text,
        showCancelButton: true,
        confirmButtonClass: 'btn-danger waves-effect waves-light'
      }, (result) => {
        if (result === false) {
          reject(result)
        } else {
          resolve(result)
        }
      })
    })
  }

  prompt(text, title, config) {
    title = title || '提示'
    config = config || {}

    return new Promise((resolve, reject) => {
      this.swal({
        type: 'input',
        title: title,
        text: text,
        showCancelButton: true,
        inputPlaceholder: config.inputPlaceholder,
        closeOnConfirm: !config.required
      }, (inputValue) => {
        if (inputValue === false) {
          reject(inputValue)
        } else {
          if (config.required && inputValue.trim() === '') {
            this.swal.showInputError(config.requiredMsg)
          } else {
            this.swal.close()
            resolve(inputValue)
          }
        }
      })
    })
  }
}
