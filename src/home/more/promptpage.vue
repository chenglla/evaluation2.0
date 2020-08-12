<template>
  <div class="app_container">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">模型信息</div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div style="padding-bottom: 15px">
        <div class="one-item">
          <div class="one-step">
            <div class="one-step__item"  >
<!--              <span class="model_title">模型类型：</span>-->
              <span> <span class="model_title">模型类型：</span>{{model_type}}</span>
            </div>
            <div class="one-step__item"  >
<!--              <span class="model_title">模型说明：</span>-->
              <span> <span class="model_title">模型说明：</span>{{model_explain}}</span>
            </div>
            <div class="one-step__item"  >
<!--              <span class="model_title">题目总数：</span>-->
              <span><span class="model_title">题目总数：</span>{{ques_num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="button_container">
        <div class="begin_button" @click="gotoModelPage">
          <span>开始做题</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promptpage',
  computed: {
    typeId () {
      // this.$store.state.singleModel.typeId
      console.log('typeid:', this.$route.query.typeId)
      return parseInt(this.$route.query.typeId)
    }
  },
  data () {
    return {
      title: '',
      model_type: '',
      model_explain: '',
      ques_num: ''
    }
  },
  mounted () {
    this.getTitle()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getTitle () { // 获取标题
      if (this.typeId === 1) {
        this.title = 'MBTI职业性格测试'
        this.model_type = 'MBTI职业性格测试'
        this.ques_num = '本次测评共有28道选择题，请根据个人真实情况选择！预计用时5分钟本次测评共有28道选择题，请根据个人真实情况选择！预计用时5分钟'
        this.model_explain = 'MBTI职业性格测试是国际最为流行的职业人格评估工具，作为一种对个性的判断和分析，是一个理论模型，从纷繁复杂的个性特征中，归纳提炼出4个关键要素——动力、信息收集、决策方式、生活方式，进行分析判断，从而把不同个性的人区别开来。'
        console.log('模型类型是' + 'MBTI职业性格测试')
      } else if (this.typeId === 2) {
        this.title = 'Holland'
        this.model_type = 'Holland'
        this.ques_num = ''
        this.model_explain = ''
        console.log('模型类型是' + 'Holland')
      } else if (this.typeId === 3) {
        this.title = '学习能力测试'
        this.model_type = '学习能力测试'
        this.ques_num = '本次测评共有56道选择题，请根据个人真实情况选择！预计用时8分钟'
        this.model_explain = '学习力分为五个维度:学习驱动力、学习顺应力、学习策应力、学习管理与调节力、学习互惠力，分别体现学习的五大系统，动力系统、情意系统、认知系统、调节系统、社会及自我互动系统，体现在通过在线学习行为所表现出来的五种力量:驱动力、顺应/顺应力、策应/策应力、反省/反省力、互惠/互惠力。认识自己，取长补短。'
        console.log('模型类型是' + '学习能力测试')
      } else if (this.typeId === 4) {
        this.title = '生涯控制测试'
        this.model_type = '生涯控制测试'
        this.ques_num = '本次测评共有36道多选题，请根据个人真实情况选择！预计用时9分钟'
        this.model_explain = '职业生涯是一个漫长的过程，也是一个动态的不断调整的过程，面对未来未知的职业长路，不妨从现在开始，认清自己，不断探索，为未来的职业之旅绘一份行路指南。'
        console.log('模型类型是' + '生涯控制测试')
      } else if (this.typeId === 5) {
        this.title = '身心状态-心理素质能力测试'
        this.model_type = '身心状态-心理素质能力测试'
        this.ques_num = '身心状态-心理素质能力测试'
        this.model_explain = '本模型有关你近期状态一些选择题，每一题没有对错之分，尽快回答，不要过多的思考'
        console.log('模型类型是' + '身心状态-心理素质能力测试')
      } else if (this.typeId === 6) {
        this.title = '身心状态-身体素质能力测试'
        this.model_type = '身心状态-身体素质能力测试'
        this.ques_num = '本次测评共有10道选择题，请根据个人真实情况选择！预计用时1.5分钟'
        this.model_explain = '本模型有关你近期状态一些选择题，每一题没有对错之分，尽快回答，不要过多的思考'
        console.log('模型类型是' + '身心状态-身体素质能力测试')
      } else if (this.typeId === 7) {
        this.title = '基本素养-积极乐观'
        this.model_type = '基本素养-积极乐观'
        this.ques_num = '本次测评共有10道多选题，请根据个人真实情况选择！预计用时1.5分钟'
        this.model_explain = '积极心理学的研究认为，积极的心理可以影响人们的行为，使其变得积极，同时，积极的行为也会反作用于人们的心理。当人们抱持积极乐观的态度时，他们能够更轻松地面对压力、逆境和损失，也更有可能获得成功。现代社会生活压力的增大，更需要人们时刻保持乐观的精神和态度。你是一个乐观的人吗，这个测评告诉你。'
        console.log('模型类型是' + '基本素养-积极乐观')
      } else if (this.typeId === 8) {
        this.title = '基本素养-情绪稳定'
        this.model_type = 'Holland'
        this.ques_num = ''
        this.model_explain = ''
        console.log('模型类型是' + '基本素养-情绪稳定')
      } else if (this.typeId === 9) {
        this.title = '人格测试'
        this.model_type = '人格测试'
        this.ques_num = '本次测评共有60道多选题，请根据个人真实情况选择！预计用时9分钟'
        this.model_explain = '大五人格测试，曾被称为最准确的心理测试BIG FIVE大五人格理论，这里是简洁版60题，相比较完整般来说更加容易测试，可以帮你快速了解自我，根据测试分析帮助你更好把握未来。'
        console.log('模型类型是' + '人格测试')
      } else if (this.typeId === 10) {
        this.title = '脑图测试'
        this.model_type = 'Holland'
        this.ques_num = ''
        this.model_explain = ''
        console.log('模型类型是' + '脑图测试')
      } else if (this.typeId === 11) {
        this.title = '基本素养-计划性测试'
        this.model_type = '基本素养-计划性测试'
        this.ques_num = '本次测评共有10道多选题，请根据个人真实情况选择！预计用时1.5分钟'
        this.model_explain = '是按部就班还是随心所欲，是循序渐进还是狂飙突进，是顺理成章还是倚马可待，你的计划性几何？'
        console.log('模型类型是' + '基本素养-计划性测试')
      } else if (this.typeId === 12) {
        this.title = '基本素养-适应力'
        this.model_type = 'Holland'
        this.ques_num = ''
        this.model_explain = ''
        console.log('模型类型是' + '基本素养-适应力')
      } else if (this.typeId === 13) {
        this.title = '基本素养-适应力'
        this.model_type = 'Holland'
        this.ques_num = ''
        this.model_explain = ''
        console.log('模型类型是' + '基本素养-适应力')
      } else if (this.typeId === 14) {
        this.title = '成长能力-TIMSS-A数学能力测试'
        this.model_type = '成长能力-TIMSS-A数学能力测试'
        this.ques_num = '本次测评共有36道多选题，请根据个人真实情况选择！预计用时5分钟'
        this.model_explain = '迄今TIMSS-A数学只在1995年、2008年、2015年展开了测评,主要测查学生学业评价与课程标准的一致性,即考核学生是否达到教学目标的要求,其所使用的测量评价理论、技术和方法代表着国际先进水平'
        console.log('模型类型是' + '成长能力-TIMSS-A数学能力测试')
      }
    },
    gotoModelPage () {
      // gotoOption (val, id) {
      //   this.$store.commit('SET_TYPE_ID', id)
      //   console.log('顶级了么', id, typeof id)
      var id = this.typeId
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

<style scoped>
  .button_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .begin_button {
    width: 85%;
    height: 40px;
    background-color: #57d8f9;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    border-radius: 5px;
    color: white;
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
  .resultInfo {
    /*margin-top: 15px;*/
    height: calc(100% - 50px);
    overflow: hidden;
    /*position: absolute;*/
    /*top: 45px;*/
    /*left: 0;*/
  }
  .one-item{
    background: rgba(255,255,204, 0.1);
    padding: 14px;
    margin: 20px 20px 16px;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .one-item-img {
    /*width: 100px;*/
    text-align: center;
    height: 170px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .one-item-img img {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
  .one-item-title {
    margin: 5px 3px;
    /*font-weight: normal;*/
  }
  .one-item-subtitle {
    margin: 7px;
  }
  .one-item-subcontent {
    /*text-indent: 2em;*/
    line-height: 23px;
    font-size: 14px;
    color: #3c3c3c;
    margin: 5px 1px 3px 10px;
  }
  .one-step__item .model_title {
    font-weight: bolder;
  }
  .one-step__item {
    margin-top: 20px;
  }
</style>
