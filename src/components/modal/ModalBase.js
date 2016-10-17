  export default {
    props: {
      title: String,
      closeMode: {
        type: String,
        default: 'destroy' // destroy | hide
      },
      closable: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show: this.visible
      }
    },
    methods: {
      open() {
        this.show = true
      },
      ok() {
        this.close()
      },
      close() {
        if (this.closeMode === 'destroy') {
          this.$destroy()
        } else {
          this.show = false
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        document.body.appendChild(this.$el)
      })
    },
    destroyed() {
      this.$el.remove()
    }
  }
