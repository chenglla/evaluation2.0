<template>
  <div class="eval_four_info">
    <div class="eval_four_first"></div>
    <div class="eval_four_second">
      <img src="../assets/img/zcal.png" alt="">
<!--      <div><span>职场</span>案例</div>-->
      <span>查看更多 ></span>
    </div>
    <div class="eval_four_third">
      <div class="eval_four_third_item">
        <div class="eval_four_third_left">
          <div class="eval_four_left_top">
            <span>测测你的抑郁有多深？</span>
            <span>抑郁测试【专业版】</span>
          </div>
          <div class="eval_four_left_bottom">
            <div class="eval_price">
              <span>￥59</span>
              <span class="middle_line">￥99</span>
            </div>
            <span class="test_num">3k人已测</span>
          </div>
        </div>
        <div class="eval_four_third_right">
          <img src="../assets/img/anli_1.png" alt="">
        </div>
      </div>
      <div class="eval_four_third_item">
        <div class="eval_four_third_left">
          <div class="eval_four_left_top">
            <span>测测你的抑郁有多深？</span>
            <span>抑郁测试【专业版】</span>
          </div>
          <div class="eval_four_left_bottom">
            <div class="eval_price">
              <span>￥59</span>
              <span class="middle_line">￥99</span>
            </div>
            <span class="test_num">4k人已测</span>
          </div>
        </div>
        <div class="eval_four_third_right">
          <img src="../assets/img/anli_2.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  @media screen and (min-height: 320px) {
    .eval_four_first {
      height: 8px;
    }
    .eval_four_second {
      margin: 15px;
      span {
        font-size: 13px;
      }
      img{
        height: 16px;
      }
    }
    .eval_four_third {
      .eval_four_third_item {
        margin: 0 0 15px;
      }
    }
    .eval_four_third_left {
      flex: 2;
      .eval_four_left_top {
        span:first-child {
          color: #3c3c3c;
          font-size: 15px;
          font-weight: bold;
        }
        span:nth-child(2) {
          font-size: 12px;
        }
      }
      .eval_four_left_bottom {
        .test_num {
          font-size: 12px;
        }
      }
    }
    .eval_four_third_right {
      flex: 1;
    }
  }
  @media screen and (min-height: 750px) {
    .eval_four_first {
      height: 12px;
    }
    .eval_four_second {
      margin: 20px 15px;
      span {
        font-size: 15px;
      }
      img{
        height: 20px;
      }
    }
    .eval_four_third {
      .eval_four_third_item {
        margin: 10px 0 25px;
      }
    }
    .eval_four_third_left {
      flex: 3;
      .eval_four_left_top {
        span:first-child {
          color: #3c3c3c;
          font-size: 16px;
          font-weight: bold;
        }
        span:nth-child(2) {
          font-size: 13px;
        }
      }
      .eval_four_left_bottom {
        .test_num {
          font-size: 13px;
        }
      }
    }
    .eval_four_third_right {
      flex: 2;
    }
  }
  .eval_third_info {
    /*margin: 15px;*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*box-sizing: border-box;*/
    /*border-bottom: 1px solid #9c9c9c;*/
  }
  .eval_four_first {
    border-top: 1px solid #efefef;
    background-color: #f8f8f8;
  }
  .eval_four_second {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*img {*/
    /*  height: 16px;*/
    /*}*/
    span {
      color: #a0a0a0;
    }
  }
  .eval_four_third {
    margin: 0 15px;
    .eval_four_third_item {
      display: flex;
      justify-content: space-between;
      /*align-items: center;*/
      /*vertical-align: middle;*/
      .eval_four_third_left {
        /*flex: 3;*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*align-items: center;*/
        .eval_four_left_top {
          flex: 2;
          display: flex;
          flex-direction: column;
          /*justify-content: flex-start;*/
          span:nth-child(2) {
            color: #9c9c9c;
            /*font-size: 12px;*/
          }
        }
        .eval_four_left_bottom {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .test_num {
            color: #9c9c9c;
            margin-right: 5px;
          }
          .eval_price {
            span {
              font-size: 12px;
              color: #9c9c9c;
            }
            span:first-child {
              color: #e6af49;
              font-size: 13px;
            }
          }
        }
      }
      .eval_four_third_right {
        /*flex: 2;*/
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }
  }
  .middle_line {
    text-decoration:line-through;
  }
</style>
