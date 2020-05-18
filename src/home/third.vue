<template>
  <div class="eval_third_info">
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/xinggeceping.png" alt="">
        <div class="eval_third_one_top">
          <span>专业测评</span>
        </div>
      </div>
    </div>
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/qingganfenlan.png" alt="">
        <div class="eval_third_one_top">
          <span>情感</span>
          <span>亲密相处</span>
        </div>
      </div>
    </div>
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/zhichanghaonanzi.png" alt="">
        <div class="eval_third_one_top">
          <span>人际</span>
          <span>沟通合作</span>
        </div>
      </div>
    </div>
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/chuangyeyuzhichang.png" alt="">
        <div class="eval_third_one_top">
          <span>职场</span>
          <span>迷茫规则</span>
        </div>
      </div>
    </div>
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/nengli.png" alt="">
        <div class="eval_third_one_top">
          <span>能力</span>
          <span>潜能探索</span>
        </div>
      </div>
    </div>
    <div class="eval_third_item" @click="gotoOption('more')">
      <div class="eval_third_one">
        <img src="../assets/img/jiankang-lv.png" alt="">
        <div class="eval_third_one_top">
          <span>健康</span>
          <span>沮丧低落</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoOption (val) {
      this.$router.push({name: val})
    }
  }
}
</script>
<style scoped lang="scss">
  @media screen and (min-height: 320px) {
    .eval_third_one_top {
      font-size: 14px;
      span:nth-child(2) {
        font-size: 11px;
      }
    }
    .eval_third_item:nth-child(2) {
      img {
        height: 26px!important;
      }
      .eval_third_one {
        padding: 5px;
      }
    }
    .eval_third_info {
      margin: 10px 15px;
    }
    .eval_third_item {
      .eval_third_one {
        margin: 5px;
        padding: 3px 5px;
      }
    }
    .eval_third_item:nth-child(3n + 3) .eval_third_one {
      margin: 5px 0 5px 5px!important;
    }
    .eval_third_item:nth-child(3n + 1) .eval_third_one {
      margin: 5px 5px 5px 0!important;
    }
  }
  @media screen and (min-height: 750px) {
    .eval_third_one_top {
      font-size: 15px;
      span:nth-child(2) {
        font-size: 12px;
      }
    }
    .eval_third_item:nth-child(2) {
      img {
        height: 30px!important;
      }
      .eval_third_one {
        padding: 8px 5px;
      }
    }
    .eval_third_info {
      margin: 15px;
    }
    .eval_third_item {
      .eval_third_one {
        margin: 10px 5px;
        padding: 8px 5px;
      }
    }
    .eval_third_item:nth-child(3n + 3) .eval_third_one {
      margin: 10px 0 10px 5px!important;
    }
    .eval_third_item:nth-child(3n + 1) .eval_third_one {
      margin: 10px 5px 10px 0!important;
    }
  }
  .eval_third_info {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    /*border-bottom: 1px solid #9c9c9c;*/
  }
  .eval_third_item {
    flex: 33.33%;
    .eval_third_one {
      /*margin: 5px;*/
      display: flex;
      background-color: #eaf8ff;
      border-radius: 5px;
      /*padding: 3px 5px;*/
      justify-content: center;
      align-items: center;
      img {
        height: 30px;
        padding: 15px 0;
      }
      .eval_third_one_top {
        margin-left: 10px;
        /*font-size: 14px;*/
        color: #69c2ff;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        span {
          flex: 1;
        }
        span:nth-child(2) {
          font-weight: normal;
          color: #9c9c9c;
          /*font-size: 12px;*/
        }
      }
    }
    /*.eval_third_one:nth-child(3) {*/
    /*  margin: 5px 0 5px 5px;!important;*/
    /*}*/
    /*.eval_third_one:nth-child(3n + 1) {*/
    /*  margin: 5px 5px 5px 0;!important;*/
    /*}*/
  }
  /*.eval_third_item:nth-child(3n + 3) .eval_third_one {*/
  /*  margin: 5px 0 5px 5px!important;*/
  /*}*/
  /*.eval_third_item:nth-child(3n + 1) .eval_third_one {*/
  /*  margin: 5px 5px 5px 0!important;*/
  /*}*/
</style>
