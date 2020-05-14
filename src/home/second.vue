<template>
  <div>
    <div @click="gotoOption('more')">更多测评</div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    gotoOption (val) {
      this.$router.push({name: val})
    }
  }
}
</script>
