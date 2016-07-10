<template>
  <Display></Display>
  <Increment-Amount></Increment-Amount>
  <Increment></Increment>
</template>

<script>
  import Display from './Display'
  import Increment from './Increment'
  import IncrementAmount from './IncrementAmount'

  export default {
    name: 'example',
    components: {
      Display,
      Increment,
      IncrementAmount
    }
  }
</script>