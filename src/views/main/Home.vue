<template>
  <div>
    <h1>This is Home Page</h1>

    <button class="btn btn-default" @click="showModal">Show modal</button>

    <button class="btn btn-primary waves-effect waves-light" @click="showAlert">添加提示信息</button>
    <button class="btn btn-primary waves-effect waves-light" @click="clearToasts">清除提示信息</button>

    <ul>
      <li>
        <a class="btn btn-primary waves-effect waves-light" @click="showMsg1">Alert Example</a>
      </li>
      <li>
        <a class="btn btn-primary waves-effect waves-light" @click="showMsg2">Confirm Example</a>
      </li>
      <li>
        <a class="btn btn-primary waves-effect waves-light" @click="showMsg3">Prompt Example</a>
      </li>
    </ul>
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
          template: '<h1>Hello, World!</h1>'
        })

        modal.open()
      },
      showMsg1() {
        Vue.msg.alert('Hello, World!').then(() => {
          console.log('You clicked!')
        })
      },
      showMsg2() {
        Vue.msg.confirm('是否删除当前选择项？').then((result) => {
          console.log('You clicked: ', result)
        }, (result) => {
          console.log('You clicked: ', result)
        })
      },
      showMsg3() {
        Vue.msg.prompt('请输入点什么', undefined, {
          required: true,
          requiredMsg: '必须输入内容！'
        }).then((result) => {
          console.log('You input: ', result)
        }, (result) => {
          console.log('You clicked: ', result)
        })
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