export default {
  init() {
    _initToast()
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
