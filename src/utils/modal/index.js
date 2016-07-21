import Vue from 'vue'
import Modal from 'components/modal'
import extend from 'extend'

export default {
  install(Vue) {
    Vue.modal = modal
  }
}

function modal(config, target) {
  target = target || document.body

  config = extend({}, config, {
    title: '',
    autoDestroy: true,
    force: true
  })

  let divEl = document.createElement('div')
  let vm = new Vue({
    template: '<modal :show="show" :title="title" :force="force" @ok="handle(\'ok\')" @cancel="handle(\'cancel\')"><modal-body></modal-body></modal>',
    replace: true,
    data() {
      return {
        title: config.title,
        show: false,
        force: config.force
      }
    },
    methods: {
      open() {
        this.show = true
      },
      close() {
        this.show = false
        if (config.autoDestroy) {
          setTimeout(this.destroy.bind(this), 300)
        }
      },
      destroy() {
        if (this.show) {
          this.show = false
          setTimeout(this.destroy.bind(this), 300)
        } else {
          this.$remove()
          this.$destroy()
        }
      },
      update(data) {
        for (let key in data) {
          this.$set(key, data[key])
        }
      },
      handle(btn) {
        this.close()
      }
    },
    components: {
      Modal,
      ModalBody: config
    }
  })

  vm.$mount(divEl).$appendTo(target)

  return vm
}
