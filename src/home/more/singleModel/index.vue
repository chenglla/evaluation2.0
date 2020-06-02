<template>
  <div class="learnAbility_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="learnAbility_second">
      <div>
        <box class="process_info">
<!--        <box gap="10px">-->
          <x-progress :percent="rate" :show-cancel="false"></x-progress>
          <span>{{currentQuesNum}} / {{learnQuesList.length}}</span>
        </box>
        <div v-show="currentIndex === index" v-for="(item, index) in learnQuesList" :key="index" class="learnAbility_second_item">
          <p class="ques_content">
            <span>【单选】</span>
            {{item.questions}}
          </p>
          <div v-for="(c,ind) of item.optionsList" class="ques_option" @click="changeList(c, ind, index)" :key="ind">
            <span :class="{checked:ind === n}">{{c.key}}</span>
            <span class="ques_option_value">{{c.value}}</span>
          </div>

<!--          <x-button></x-button>-->
        </div>
      </div>
    </div>
    <div class="btn_option">
      <div>
<!--      <div v-if="currentIndex > 0">-->
        <span class="btn_last" @click="gotoLast">上一题</span>
      </div>
      <div>
        <span class="submitAns" @click="submitAns">提交</span>
      </div>
      <div>
        <span class="btn_last" @click="gotoNext">下一题</span>
      </div>
    </div>
  </div>
</template>
<script>
import {getLearnQuestion} from '@/api/index'
export default {
  data () {
    return {
      currentIndex: -1,
      currentQuesNum: 1,
      learnQuesList: [],
      n: -1, // 选项
      answerList: {},
      rate: 0,
      title: '学习力模型',
      flag: true
    }
  },
  computed: {
    typeId () {
      // this.$store.state.singleModel.typeId

      console.log('typeid:', this.$route.query.typeId)
      return parseInt(this.$route.query.typeId)
    }
  },
  mounted () {
    this.getTitle()
    this.getLearnQuesList()
  },
  watch: {
    currentIndex (newVal, oldVal) {
      // this.n = -1
      console.log('改变：', this.currentIndex, newVal, oldVal)
      // 索引变化，设置上一题，下一题按钮的变化
      const btnList = document.querySelectorAll('.btn_last')
      if (this.currentIndex > 0 && this.currentIndex < this.learnQuesList.length - 1) {
        for (let i = 0; i < btnList.length; i++) {
          btnList[i].className = 'btn_last active'
          btnList[i].style.pointerEvents = 'auto'
        }
      } else if (this.currentIndex === 0) {
        btnList[1].className = 'btn_last active'
        btnList[0].className = 'btn_last'
        btnList[0].style.pointerEvents = 'none'
      } else if (this.currentIndex === this.learnQuesList.length - 1) {
        btnList[0].className = 'btn_last active'
        btnList[1].className = 'btn_last'
        btnList[1].style.pointerEvents = 'none'
      }
      // 记录用户做题选项
      console.log('用户选项：', this.answerList)
      // if ()
      this.n = this.answerList[this.currentIndex] - 1
    }
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getTitle () { // 获取标题
      if (this.typeId === 3) {
        this.title = '学习力模型'
      } else if (this.typeId === 9) {
        this.title = '人格测试'
      } else if (this.typeId === 1) {
        this.title = 'MBTI职业性格测试'
      } else if (this.typeId === 11) {
        this.title = '计划性测试'
      } else if (this.typeId === 6) {
        this.title = '身体素质能力测试'
      } else if (this.typeId === 14) {
        this.title = 'TIMSS数学能力测试'
      }
    },
    getLearnQuesList () { // 获取学习力模型所有题
      getLearnQuestion({
        openid: '111',
        evaluateType: this.typeId
      }).then(res => {
        console.log(this.typeId, res.data)
        if (res.data.code === 0) {
          this.currentIndex += 1
          this.learnQuesList = res.data.data
          this.rate = this.currentQuesNum / this.learnQuesList.length * 100
          for (const item in this.learnQuesList) {
            if (this.typeId === 3) {
              this.learnQuesList[item].optionsList = [{key: 'A', value: '是'}, {key: 'B', value: '否'}]
            } else if (this.typeId === 6) {
              this.learnQuesList[item].optionsList = [{key: 'A', value: '完全不同意'}, {key: 'B', value: '  不太同意'}, {key: 'C', value: '  中立'}, {key: 'D', value: '  同意'}, {key: 'E', value: '  完全同意'}]
            }else if (this.typeId === 9) {
              this.learnQuesList[item].optionsList = [{key: 'A', value: '完全不同意'}, {key: 'B', value: '  不太同意'}, {key: 'C', value: '  中立'}, {key: 'D', value: '  同意'}, {key: 'E', value: '  完全同意'}]
            } else if (this.typeId === 11) {
              this.learnQuesList[item].optionsList = [{key: 'A', value: '完全不同意'}, {key: 'B', value: '  不太同意'}, {key: 'C', value: '  中立'}, {key: 'D', value: '  同意'}, {key: 'E', value: '  完全同意'}]
            }else if (this.typeId === 1) {
              let list = this.learnQuesList[item].options.split('B')
              // console.log('list', list)
              this.learnQuesList[item].optionsList = [{key: 'A', value: list[0].split('A')[1].replace(/(^\s*)|(\s*$)/g, '')}, {key: 'B', value: list[1].replace(/(^\s*)|(\s*$)/g, '')}]
            }else if (this.typeId === 14) {

              let list = this.learnQuesList[item].options.split(' ')
              // 空格开头或者空格结尾
              this.learnQuesList[item].optionsList = [{key: 'A', value: list[0].split('1.')[1].replace(/(^\s*)|(\s*$)/g, '')}, {key: 'B', value: list[1].split('2.')[1].replace(/(^\s*)|(\s*$)/g, '')},{key: 'C', value: list[2].split('3.')[1].replace(/(^\s*)|(\s*$)/g, '')},{key: 'D', value: list[3].split('4.')[1].replace(/(^\s*)|(\s*$)/g, '')}]
            }
            // this.type3Content[item].questionId = 'seleted' + item
          }
        }
        console.log(res.data)
      })
    },
    changeList (content, option, index) { // 选项内容，第i-1个选项，第几-1题--点击选项
      console.log('当前索引1：', index, this.learnQuesList.length)
      // if (index === this.learnQuesList.length - 1) {
      //   let btn = document.querySelector('.ques_option')
      //   btn.style.pointerEvents = 'none'
      // }
      if (this.flag) {
        this.flag = false
        this.n = option
        this.answerList[index] = option + 1
        const _this = this
        setTimeout(function () {
          // console.log('不执行：')
          if (_this.currentIndex < _this.learnQuesList.length - 1) {
            _this.n = -1
            _this.currentIndex += 1
            _this.currentQuesNum += 1
            _this.rate = _this.currentQuesNum / _this.learnQuesList.length * 100
            _this.flag = true
            console.log('当前索引', _this.currentIndex)
          }
          // if (_this.currentIndex < _this.learnQuesList.length - 1) {
          //   _this.flag = true
          // }
        }, 400, true)
        console.log(this.answerList)
      }
    },
    gotoLast () { // 上一题
      this.currentIndex -= 1
      this.currentQuesNum -= 1
      this.rate = this.currentQuesNum / this.learnQuesList.length * 100
    },
    gotoNext () { // 下一题
      // console.log('222222222')
      this.currentIndex += 1
      this.currentQuesNum += 1
      this.rate = this.currentQuesNum / this.learnQuesList.length * 100
    },
    submitAns () { // 交卷
      let val = ''
      if (this.typeId === 3) {
        val = 'learnResult'
      } else if (this.typeId === 6) {
        val = 'physicalFitnessResult'
      }else if (this.typeId === 9) {
        val = 'personAssResult'
      } else if (this.typeId === 1) {
        val = 'mbtiResult'
      } else if (this.typeId === 11) {
        val = 'planResult'
      }
      this.$router.push({
        name: val,
        query: {
          list: JSON.stringify(this.answerList)
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .learnAbility_info {
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
  .learnAbility_second {
    margin-top: 10px;
    padding: 5px 15px;
  }
  .process_info {
    margin: 5px 10px 20px;
    /*width: 70%;*/
    display: flex;
    .weui-progress {
      flex: 5;
    }
    span {
      /*margin-left: 10px;*/
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      color: #9c9c9c;
      flex: 1;
    }
  }
  /*.process_info >>> .weui-progress >>> .weui-progress__inner-bar {*/
  /*  background-color: #37a3ff;*/
  /*}*/
  .learnAbility_second_item {
    overflow: hidden;
    .ques_content {
      /*text-indent: 2em;*/
      line-height: 30px;
      margin-bottom: 30px;
      span {
        color: #337df7;
        /*background: linear-gradient(to right, #00d2ff 0%, #37a3ff 100%);*/
        /*font-size: 11px;*/
        /*color: #fff;*/
        /*padding: 2px 4px 2px 3px;*/
        /*margin-right: 5px;*/
        /*!*border-radius: 2em 1em 4em / 0.5em 3em;*!*/
        /*border-top-left-radius: 12px;*/
        /*border-top-right-radius: 1em;*/
        /*!*border-bottom-right-radius: 4em 0.5em;*!*/
        /*border-bottom-left-radius: 12px;*/
      }
    }
    .ques_option {
      /*text-indent: 2em;*/
      margin: 25px;
      span:first-child {
        border: 1px solid #9c9c9c;
        padding: 0 5px 1px;
        border-radius: 50%;
        margin-right: 6px;
      }
      .ques_option_value {
        line-height: 30px;
      }
    }
    /*选择当前选项时，出现checked属性，并且变色*/
    .checked {
      color: #fff;
      background-color: #337df7;
    }
  }
  .btn_option {
    position: fixed;
    display: flex;
    width: 100%;
    bottom: 0;
    height: 50px;
    box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, .1);
    /*justify-content: flex-end;*/
    /*align-items: flex-end;*/
    .active {
      background-color: #337df7!important;
    }
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div:first-child {
      justify-content: flex-start;
      margin-left: 20px;
    }
    div:nth-child(3) {
      justify-content: flex-end;
      margin-right: 20px;
    }
    .btn_last {
      font-size: 11px;
      height: 40px;
      width: 40px;
      line-height: 40px;
      background-color: #bbbbbb;
      color: #fff;
      /*border: 1px solid #9c9c9c;*/
      border-radius: 50%;
    }
    .submitAns {
      background-color: #f5b841;
      text-align: center;
      font-size: 12px;
      height: 42px;
      width: 42px;
      line-height: 42px;
      color: #fff;
      /*border: 1px solid #9c9c9c;*/
      border-radius: 50%;
    }
  }
</style>
