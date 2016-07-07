<template>
  <div>
    <button @click="increment">Increment + {{ amountValue }}</button>
  </div>
</template>

<script>
  import {
    incrementCounter
  } from '../../vuex/actions'

  import {
    getAmount
  } from '../../vuex/getters'

  export default {
    vuex: {
      getters: {
        amountValue: getAmount
      },
      actions: {
        increment: incrementCounter
      }
    }
  }
</script>