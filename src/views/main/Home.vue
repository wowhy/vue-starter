<template>
  <div>
    <h1>This is Home Page</h1>

    <button class="btn btn-default" @click="showModal">Show modal</button>

    <button class="btn btn-primary waves-effect waves-light" @click="showAlert">添加提示信息</button>
    <button class="btn btn-primary waves-effect waves-light" @click="clearToasts">清除提示信息</button>

    <div v-el:modal>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { alert, modal } from 'vue-strap'
  import {
    addToast,
    clearToasts
  } from '../../vuex/actions'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    methods: {
      showAlert() {
        this.addToast('测试提示信息！！！')
      },
      showModal() {
        let MyComponent = Vue.extend({
          template: '<modal :show.sync="true" effect="fade" width="400"><div slot="modal-body" class="modal-body">Hello, World!</div></modal>',
          components: {
            modal
          }
        })

        let instance = new MyComponent()
        this.$els.modal.innerHTML = ''
        instance.$mount().$appendTo(this.$els.modal)
      }
    },
    vuex: {
      actions: {
        addToast,
        clearToasts
      }
    },
    components: {
      modal,
      alert
    }
  }
</script>