export default {
  init() {
    _initToast()
    _initSweetAlert()

    window.$.Components.init()
    window.$.App.init()
  }, initSidemenu() {
    window.$.Sidemenu.init()
  }
}

function _initToast() {
  window.toastr.options = {
    'closeButton': true,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': 'toast-top-center',
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '2000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  }
}

function _initSweetAlert() {
  window.swal.setDefaults({
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    allowEscapeKey: false
  })
}
