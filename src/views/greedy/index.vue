<template>
  <div>
    <ul>
      <li v-for="item in items">{{item.s}} ~ {{item.f}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },

    ready() {
      let s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12]
      let f = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16]

      let a = greedyActivitySelector(s, f)

      for (let i of a) {
        this.items.push({
          s: s[i],
          f: f[i]
        })
      }
    }
  }

  function greedyActivitySelector(starts, finishes) {
    let n = starts.length
    let activities = [0]

    let k = 0

    for (let m = 1; m < n; m++) {
      if (starts[m] > finishes[k]) {
        activities.push(m)
        k = m
      }
    }

    return activities
  }
</script>