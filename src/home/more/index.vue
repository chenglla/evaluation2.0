<template>
  <div class="more_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">更多测评</div>
      <i class="iconfont iconwenhao"></i>
    </div>
    <div class="more_split"></div>
    <div class="more_second">
      <div class="more_second_left" ref="more_second_left">
        <div>
          <div v-for="(item, index) in typeList" :key="index" class="more_second_left_item" @click="getEvalType(index)">{{item}}</div>
        </div>
      </div>
      <div class="more_second_right" ref="more_second_right">
        <div>
          <div class="more_second_right_one active">
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>黑暗人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha.png" alt="">
              </div>
            </div>
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>黑暗人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha2.png" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption('mbti')">
              <div class="more_second_right_left">
                <div>
                  <span>MBTI职业性格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/5677.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption('learnAbility')">
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/23.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>五大人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/cp_1.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha2.png" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>五大人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/cp_1.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha2.png" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>五大人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/cp_1.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha2.png" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>五大人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/cp_1.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item">
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥9.9</span>
                  <span>￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/ha2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      moreScroll: null,
      typeList: ['全部', '性格', '情感', '职场', '健康', '人际']
    }
  },
  mounted () {
    this.init()
    const items = document.querySelectorAll('.more_second_left_item')
    items[0].className = 'more_second_left_item active'
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        this.moreScroll = new BScroll(this.$refs.more_second_left, {
          click: true
        })
      })
    },
    getEvalType (val) {
      // console.log(val)
      const items = document.querySelectorAll('.more_second_left_item')
      const rights = document.querySelectorAll('.more_second_right_one')
      console.log(rights)
      if (val === 0) {
        for (let i = 0; i < items.length; i++) {
          items[i].className = 'more_second_left_item'
          rights[i].style.display = ''
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          console.log(i)
          items[i].className = 'more_second_left_item'
          rights[i].style.display = 'none'
        }
      }
      items[val].className = 'more_second_left_item active'
      rights[val].style.display = ''
    },
    gotoOption (val) {
      this.$router.push({
        name: val
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .more_info {
    height: 100%;
    /*width: 100%;*/
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .score_header {
    position: relative;
    font-size: 16px;
    width: 100%;
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    /*background-color: #19bdff;*/
    color: #fff;
    height: 45px;
    line-height: 45px;
    flex: none;
    z-index: 1;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
  }
  .iconfanhui {
    font-size: 18px;
  }
  .title {
    text-align: center;
    font-weight: bold;
  }
  .iconwenhao {
    position: absolute;
    right: 15px;
    top: 1px;
    font-size: 22px;
  }
  .more_split {
    position: absolute;
    /*background-color: #19bdff;*/
    background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);
    height: calc(30% - 45px);
    margin-top: 45px;
    width: 100%;
  }
  .more_second {
    padding-top: 10px;
    z-index: 1;
    border-radius: 4px;
    display: flex;
    background-color: #f8f8f8;
    margin: 5px 15px 10px;
    .more_second_left {
      flex: 2;
      .more_second_left_item {
        text-align: center;
        line-height: 30px;
        margin: 13px 0;
        /*font-family: Arial;*/
        font-size: 14px;
      }
      .active {
        padding: 0 5px;
        background-color: #61c0f1;
        border-radius: 5px;
        color: #fff;
        margin: 13px;
      }
    }
    .more_second_right {
      flex: 5;
      margin: 10px 7px 10px 0;
      .active {

      }
      .more_second_right_item {
        display: flex;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 8px;
        padding: 5px;
        .more_second_right_left {
          flex: 5;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /*align-items: center;*/
          div:first-child {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 15px;
            span:nth-child(2) {
              margin-top: 2px;
              font-size: 11px;
              color: #bebebe;
            }
          }
          div:nth-child(2) {
            margin-top: 8px;
            font-size: 11px;
            color: #bebebe;
            position: relative;
            /*color: #e6af49;*/
            span:first-child {
              color: #e6af49;
              font-size: 14px;
            }
            span:nth-child(3) {
              position: absolute;
              right: 3px;
              top: 2px;
            }
          }
        }
        .more_second_right_right {
          flex: 2;
          display: flex;
          justify-content: flex-end;
          img {
            width: 100%;
            flex-shrink: 0;
            /*object-fit: cover;*/
            /*object-fit: fill;*/
            /*object-fit: contain;*/
            /*object-fit: cover;*/
            /*object-fit: none;*/
            object-fit: scale-down;
            /*height: 80%;*/
          }
        }
      }
    }
  }
</style>
