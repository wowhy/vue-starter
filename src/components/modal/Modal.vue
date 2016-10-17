<template>
  <transition mode="in-out">
    <div class="modal" :class="{'is-active': show}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{title}}</p>
          <button class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot is-right">
          <a class="button is-primary" @click="ok">确定</a>
          <a class="button" @click="close">取消</a>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  import ModalBase from './ModalBase'

  export default {
    mixins: [ModalBase]
  }
</script>

<style lang="scss">
  .modal-card-foot {
    &.is-right {
      justify-content: flex-end;
    }
  }
</style>