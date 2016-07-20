<template>
  <div>
    <h1>This is Home Page</h1>

    <button class="btn btn-default" @click="showModal = true">Show modal</button>
    <modal :show.sync="showModal">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div slot="modal-body" class="modal-body">...</div>
    </modal>

    <button class="btn btn-primary waves-effect waves-light" @click="showAlert">添加提示信息</button>
    <button class="btn btn-primary waves-effect waves-light" @click="clearToasts">清除提示信息</button>
</template>

<script>
  import { alert, modal } from 'vue-strap'
  import {
    addToast,
    clearToasts
  } from '../../vuex/actions'

  export default {
    name: 'Home',
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      showAlert() {
        this.addToast('测试提示信息！！！')
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