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
            <!--            <div class="more_second_right_item">-->
            <div class="more_second_right_item" @click="gotoOption(1)">
              <div class="more_second_right_left">
                <div>
                  <span>MBTI职业性格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>7k人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/5677.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption(9)">
              <div class="more_second_right_left">
                <!--              <div class="more_second_right_left" @click="gotoOption('singleModel', 9)">-->
                <!--              <div class="more_second_right_left" @click="gotoOption('personAssessment', 9)">-->
                <div>
                  <span>大五人格测试</span>
                  <span>测测你内心深处的阴暗面</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>11.7W人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/cp_1.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(-1)">
              <!--            <div class="more_second_right_item" @click="gotoOption('singleModel', 3)">-->
              <div class="more_second_right_left">
                <div>
                  <span>生涯控制力测评</span>
                  <span>测测你未来生涯的控制力</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>3k人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/控制力jpg.jpg" alt="">
              </div>
            </div>
<!--            <div class="more_second_right_item">-->
<!--              <div class="more_second_right_left">-->
<!--                <div>-->
<!--                  <span>学习力模型</span>-->
<!--                  <span>测测你内心深处的阴暗面</span>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span>￥59</span>-->
<!--                  <span class="middle_line">￥99</span>-->
<!--                  <span>11.7W人已测</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="more_second_right_right">-->
<!--                <img src="../../assets/img/ha2.png" alt="">-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(3)">
              <!--            <div class="more_second_right_item" @click="gotoOption('singleModel', 3)">-->
              <div class="more_second_right_left">
                <div>
                  <span>学习力模型</span>
                  <span>测测你的学习能力</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>5k人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/23.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption(14)">
              <div class="more_second_right_left">
                <div>
                  <span>TIMSS-A数学能力模型</span>
                  <span>测测你数学能力</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>6k人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/TIMSS-A数学能力模型jpg.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption(-1)">
              <div class="more_second_right_left">
                <div>
                  <span>语言能力模型</span>
                  <span>测测你语言组织能力</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>1170人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/语言能力.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(5)">
              <div class="more_second_right_left">
                <div>
                  <span>心理状态测试</span>
                  <span>测测你内心真实的想法</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>1034人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/心理健康.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption(6)">
              <div class="more_second_right_left">
                <div>
                  <span>身体素质能力</span>
                  <span>测测你身体承受能力</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>10k人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/身体健康.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(7)">
              <div class="more_second_right_left">
                <div>
                  <span>积极乐观能力测试</span>
                  <span>测测你面对事情的处事</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>500人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/乐观.jpg" alt="">
              </div>
            </div>
            <div class="more_second_right_item" @click="gotoOption(11)">
              <div class="more_second_right_left">
                <div>
                  <span>计划性</span>
                  <span>测测你对事情处理的计划逻辑性</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>800人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/计划性.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(-1)">
              <div class="more_second_right_left">
                <div>
                  <span>脑象图测评</span>
                  <span>测测你大脑想象事物的构图</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>950人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/脑象图测评.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
            <div class="more_second_right_item" @click="gotoOption(-1)">
              <div class="more_second_right_left">
                <div>
                  <span>日常个人考试成绩</span>
                  <span>查看学生个人对待成绩的客观态度</span>
                </div>
                <div>
                  <span>￥59</span>
                  <span class="middle_line">￥99</span>
                  <span>663人已测</span>
                </div>
              </div>
              <div class="more_second_right_right">
                <img src="../../assets/img/细致高效.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="more_second_right_one">
<!--            <div class="more_second_right_item">-->
<!--              <div class="more_second_right_left">-->
<!--                <div>-->
<!--                  <span>五大人格测试</span>-->
<!--                  <span>测测你内心深处的阴暗面</span>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span>￥59</span>-->
<!--                  <span class="middle_line">￥99</span>-->
<!--                  <span>11.7W人已测</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="more_second_right_right">-->
<!--                <img src="../../assets/img/cp_1.jpg" alt="">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="more_second_right_item">-->
<!--              <div class="more_second_right_left">-->
<!--                <div>-->
<!--                  <span>学习力模型</span>-->
<!--                  <span>测测你内心深处的阴暗面</span>-->
<!--                </div>-->
<!--                <div>-->
<!--                  <span>￥59</span>-->
<!--                  <span class="middle_line">￥99</span>-->
<!--                  <span>11.7W人已测</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="more_second_right_right">-->
<!--                <img src="../../assets/img/ha2.png" alt="">-->
<!--              </div>-->
<!--            </div>-->
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
      moreLeftScroll: null,
      moreRightScroll: null,
      typeList: ['全部', '性格', '生涯', '成长', '健康', '基本', '综合', '学生成绩']
    }
  },
  computed: {
    leftIndex () {
      // console.log('index:', this.$store.state.singleModel.leftIndex)
      return parseInt(this.$store.state.singleModel.leftIndex)
    }
  },
  mounted () {
    this.initLeft()
    this.initRight()
    this.getEvalType(this.leftIndex)
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    initLeft () {
      this.$nextTick(() => {
        this.moreLeftScroll = new BScroll(this.$refs.more_second_left, {
          click: true
        })

      })
    },
    initRight () {
      this.$nextTick(() => {
        this.moreRightScroll = new BScroll(this.$refs.more_second_right, {
          click: true
        })
        
        console.log(this.moreRightScroll)
      })
    },
    getEvalType (val) { // val表示左侧点击按钮的index,点击左侧的index第一个，就获取右侧的第零个div
      // console.log('点击了么', val, typeof val)
      this.$store.commit('SET_LEFT_INDEX', val)
      const items = document.querySelectorAll('.more_second_left_item') // 获取左侧所有按钮
      const rights = document.querySelectorAll('.more_second_right_one') // 获取右侧所有内容
      // console.log(rights)
      if (val === 0) { // 这里展示的是默认全部div内容
        for (let i = 0; i < items.length; i++) {
          items[i].className = 'more_second_left_item'
          rights[i].style.display = ''
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          // console.log(i)
          items[i].className = 'more_second_left_item' // 除了点击的按钮，其他按钮没有css变化
          rights[i].style.display = 'none'
        }
        rights[val - 1].style.display = ''
      }
      items[val].className = 'more_second_left_item active' // 添加active属性，是设置了点击按钮状态的css变化
    },
    gotoOption (id) {
    // gotoOption (val, id) {
    //   this.$store.commit('SET_TYPE_ID', id)
    //   console.log('顶级了么', id, typeof id)
      if (id === -1) {
        this.$router.push({name: 'building'})
      } else {
        this.$router.push({
          name: 'singleModel',
          // name: 'learnAbility',
          query: {
            typeId: id
          }
        })
      }
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
    padding-top: 18px;
    z-index: 1;
    border-radius: 4px;
    display: flex;
    background-color: #f8f8f8;
    margin: 5px 15px 5px;
    height: calc(100% - 55px);
    overflow: hidden;
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
      margin: 0 7px 10px 0;
      .active {

      }
      .more_second_right_item {
        display: flex;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 8px;
        padding: 5px 3px;
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
            height: 100%;
            /*flex-shrink: 0;*/
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
  .middle_line {
    text-decoration:line-through;
  }
</style>
