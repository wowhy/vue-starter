<template>
  <div>
    <h1 class="title">Home</h1>
    <button class="button is-primary" type="button" @click="openModal">Open Modal</button>
  </div>
</template>

<script>
  import Modal from '../components/modal'
  // import ModalContent from './ModalContent'

  export default {
    methods: {
      openModal() {
        Modal.show({
          title: '测试'
        }, 'Hello, World!')
      }
    }
  }
</script>