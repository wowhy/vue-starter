<template>
  <div>
    IncrementAmount: <input type="text" name="amount" :value="amountValue" @input="updateAmount">
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
    vuex: {
      getters: {
        amountValue: getAmount
      },

      actions: {
        updateAmount: function(arg1, e) {
          updateAmount(arg1, parseInt(e.target.value))
        }
      }
    }
  }
</script>