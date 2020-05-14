<template>
  <div>
    <x-button type="primary" @click.native="gotoOption('more')">更多测评</x-button>
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
      console.log(1111)
      this.$router.push({name: val})
    }
  }
}
</script>
