<template>
  <div class="eval_second_info">
    <div class="eval_second_item">
      <img src="../assets/img/taolun-3.png" alt="">
      <span>讨论圈</span>
    </div>
    <div class="eval_second_item">
      <img src="../assets/img/huaban.png" alt="">
      <span>看资讯</span>
    </div>
<!--    <x-button type="primary" @click.native="gotoOption('more')">更多测评</x-button>-->
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
<style scoped lang="scss">
  @media screen and (min-height: 320px) {
    .eval_second_info {
      padding-top: 10px;
      height: 70px;
    }
    .eval_second_item {
      font-size: 14px;
    }
  }
  @media screen and (min-height: 750px) {
    .eval_second_info {
      padding-top: 15px;
      height: 80px;
    }
    .eval_second_item {
      font-size: 16px;
    }
  }
  .eval_second_info {
    /*margin-top: 15px;*/
    margin: 0 15px;
    /*padding-top: 10px;*/
    /*height: 100%;*/
    display: flex;
    /*flex-direction: column;*/
    /*height: 70px;*/
    background: #fff;
    border-bottom: 1px solid #efefef;
  }
  .eval_second_item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #69c2ff;
    font-weight: bold;
    img {
      height: 40px;
      margin-right: 15px;
      vertical-align: middle;
    }
  }
  .eval_second_item:first-child {
    border-right: 1px solid #efefef;
  }
</style>
