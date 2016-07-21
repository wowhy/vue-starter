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
        let modal = Vue.modal({
          title: 'My Dialog',
          full: true,
          template: '<h1>Hello, World!</h1>'
        })

        modal.open()
      }
    },
    vuex: {
      actions: {
        addToast,
        clearToasts
      }
    }
  }
</script>