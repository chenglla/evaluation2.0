<template>
  <div class="eval_info">
    <div class="eval_wrapper" ref="evalWrapper">
      <div style="padding-bottom: 15px">
        <first0518></first0518>
        <!--    <first></first>-->
        <second></second>
        <third></third>
        <four></four>
      </div>
    </div>
  </div>
</template>
<script>
import first0518 from './first0518'
import first from './first'
import second from './second'
import third from './third'
import four from './four'
import BScroll from 'better-scroll'
export default {
  components: {first0518, first, second, third, four},
  data () {
    return {
      evalScroll: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$nextTick(() => {
        this.evalScroll = new BScroll(this.$refs.evalWrapper, {
          click: true,
          bounce: false
        })
        console.log(this.resultScroll)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .eval_info {
    height: 100%;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .eval_wrapper {
    height: calc(100% - 53px);
    overflow: hidden;
  }
</style>
