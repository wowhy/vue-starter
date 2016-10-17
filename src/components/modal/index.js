import Vue from 'vue'
import Modal from './Modal'

export default {
  show(props, content) {
    if (!content) {
      content = ''
    }

    let modal = new Vue({
      el: document.createElement('div'),
      render(h) {
        if (typeof content !== 'object') {
          content = h('div', content)
        } else {
          content = h(content)
        }
        return h(Modal, { props }, [content])
      }
    })
    return modal
  }
}
