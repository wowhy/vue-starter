<template>
  <div>
    IncrementAmount: <input type="text" name="amount" v-model="amount" number>
  </div>
</template>

<script>
  import {
    getAmount
  } from '../../vuex/getters'

  import {
    updateAmount
  } from '../../vuex/actions'

  export default {
    computed: {
      amount: {
        get() {
          return this.amountValue
        },

        set(value) {
          this.updateAmount(value)
        }
      }
    },

    vuex: {
      getters: {
        amountValue: getAmount
      },

      actions: {
        updateAmount: updateAmount
      }
    }
  }
</script>