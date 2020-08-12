<template>
  <div class="app_container">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">综合报告</div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div style="padding-bottom: 15px">
        <div class="one-item">
          <div class="one-step">
            <div>
              <span>*测评编号：2020080701235</span>
            </div>
          </div>
          <div class="one-step">
            <div>
              <span>*评测者昵称：夏天的风</span>
            </div>
          </div>
          <div class="one-step">
            <div>
              <span>*评测者时间：2020.08.07</span>
            </div>
          </div>
          <div class="one-step">
            <div>
              <span>根据您测评情况，我们生成如下报告如下：</span>
            </div>
          </div>
          <div class="one-step">
            <h4>职业性格测评</h4>
            <p v-html="mbtiData.describe">MBTI:{{this.mbtiData.describe.zhiyname}}</p>
            <h4>性格特征</h4>
            <p>{{this.mbtiData.charactertype}}</p>
            <h4>适合职业</h4>
            <p v-for = "item in mbtiprofession">{{item.zhiyname}}</p>
          </div>
          <div class="one-step">
            <h4>大五人格测评</h4>
            <div>
              <big-five-chart :personassdata="mapper[9]"></big-five-chart>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">神经质或情绪稳定性(Neuroticism)：</span></p>
              <p>神经质指个体体验消极情绪的倾向。得分越低，表示情绪越稳定；得分越高，表示情绪越不稳定。20.4 分以下为
                典型低分，38.8 分以上为典型高分。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">外倾性(Extraversion)：</span></p>
              <p>外向代表了在外界投入的能量。
                得分越高，性格越外向。26 分以下为典型低分，42 分以上为典型高分。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">开放性(Openness)：</span></p>
              <p>指个体想像力以及好奇心程度。
                得分越高，性格越开朗，态度开放，容易接受新事物。32 分以下为典型低分，47 分以上为典型高分。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">尽责性(Conscientiousness)：</span></p>
              <p>神尽责性指我们控制、管理和调节自身冲动的方式。
                得分越高，责任心越强。36 分以下为典型低分，44 分以上为典型高分。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">宜人性(Agreeableness)：</span></p>
              <p>反应个体在合作与社会和谐性方面的差异。
                得分越高，性格越随和。30 分以下为典型低分，48 分以上为典型高分。

              </p>
            </div>
          </div>
          <div class="one-step">
            <h4>基本素养测评</h4>
            <p><span style="font-weight: bold;color: #ffae45">计划性:</span>{{plandata.describe}}</p>
            <p><span style="font-weight: bold;color: #ffae45">细致高效:</span>{{caredata.describe}}</p>
            <p><span style="font-weight: bold;color: #ffae45">适应力:</span>{{adjustdata.describe}}</p>
            <p><span style="font-weight: bold;color: #ffae45">积极乐观:</span>{{happydata.describe}}</p>
            <p><span style="font-weight: bold;color: #ffae45">情绪稳定:</span>您的情绪稳定性水平较高，一般生活和学习中遇到的小挫折或者小确幸都很难引起您强烈的情绪反应，您的情绪反应也较为缓慢，受外界（或内部）条件变化而产生的波动较小。如当遇到事业成败等重大生活事件时，较易控制自己的情绪。
            </p>
          </div>
          <div class="one-step">
            <h4>学习能力</h4>
            <study-ability-chart :learndata = "mapper[3]"></study-ability-chart>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">驱动力：</span></p>
              <p>是来自内在的动力，也就是内心把一种事情做好的欲望。
                顺应力：将会帮助学习者更好地获得上述各种能力，同时，它将帮助学习者在遇到无序、未知和失败时能够保持不屈精神
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">互惠力：</span></p>
              <p>主要体现在自己和他人之间的自主、观察与合作。他人分享或发表观点，是否有个人的思考在里面，学习他人优点，同时乐于分享。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">顺应力：</span></p>
              <p>将会帮助学习者更好地获得上述各种能力，同时，它将帮助学习者在遇到无序、未知和失败时能够保持不屈精神
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">策应力：</span></p>
              <p>在学习过程中，能不能根据已有的问题或知识点，进行提问面对不同知识点推理并建立联系。
              </p>
            </div>
            <div>
              <p><span style="font-weight: bolder;color: #5ea6ff ">调节力：</span></p>
              <p>也是反省力。学习时，会不会根据个人情况做一个相对合理的计划， 在计划执行时或者执行后能不能按照实际情况做正确调整。
              </p>
            </div>
          </div>
          <div class="one-step">
            <h4>心理状态测评</h4>
            <p style="color: red">{{this.sixData.level}}</p>
            <p style="color: red">{{this.sixData.describe}}</p>
          </div>
          <div class="one-step">
            <h4>身体状态测评</h4>
            <p style="color: #66dd6e">{{this.bodydata.level}}</p>
            <p style="color: #66dd6e">{{this.bodydata.describe}}</p>
          </div>
          <div class="one-step">
            <h4>TIMSS-A 数学能力测评</h4>
            <math-ability-chart :mathdata = "mapper[14]"></math-ability-chart>
            <p>{{this.shisiData.teacherInfluenceContent}}</p>
            <p>{{this.shisiData.hobbyInfluenceContent}}</p>
            <p>{{this.shisiData.othersInfluenceContent}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllUserAnswers, mentalBrainResult, postMathResult} from '@/api/index'
import bigFiveChart from '@/my/reportCharts/bigFiveChart'
import studyAbilityChart from '@/my/reportCharts/studyAbilityChart'
import mathAbilityChart from '@/my/reportCharts/mathAbilityChart'
import  getMbtiResult from  '@/api/index'
import {postPlanResult} from '@/api/index'
import {carefulResult} from '@/api/index'
import {adjustResult} from '@/api/index'
import {happyBrainResult} from '@/api/index'
import {bodyResult} from '@/api/index'
export default {
  name: 'myReport',
  components: {
    bigFiveChart,
    studyAbilityChart,
    mathAbilityChart
  },
  mounted () {
    this.getAll()
    setTimeout(() => {
      this.getHealthData()
      this.getLearnResult()
      this.getMbti()
      this.getBasic()
    }, 0)
  },
  data () {
    return {
      allData: [],
      mapper: {},
      six: {},
      sixData: '',
      mbti: {},
      mbtiData:'',
      mbtiprofession:[],
      shisi: {},
      shisiData: '',
      plan: {},
      plandata: '',
      care:{},
    caredata: '',
      adjust:{},
      adjustdata: '',
      happy:{},
      happydata:'',
      body:{},
      bodydata:''
    }
  },
  methods: {
    getAll: function () {
      getAllUserAnswers({
        openid: '111',
        evaluateType: 0
      }).then(res => {
        console.log('获取学生的全部测评答案')
        console.log(res.data)
        // console.log(res.data.data.describe)
        this.allData = res.data.data
        for (let i = 0; i < this.allData.length; i++) {
          this.mapper[this.allData[i].evaluateType] = this.allData[i].evaluateAnswer
        }
        console.log('测试mapper表')
        console.log(this.mapper)
        console.log(this.mapper[1])
        this.six = this.mapper[5]
        console.log('测试6' + this.six)
        this.shisi = this.mapper[14]
        this.mbti = this.mapper[1]
        this.plan = this.mapper[11]
        this.care = this.mapper[12]
        this.adjust = this.mapper[13]
        this.happy = this.mapper[7]
        this.body = this.mapper[6]
      })
    },
    getHealthData: function () {
      mentalBrainResult({
        openid: '111',
        evaluateType: 5,
        result: this.six,
        toInsertDB: 0
      }).then(res => {
        console.log('心理素质')
        console.log(res.data)
        this.sixData = res.data.data
        // console.log(res.data.data.describe)
      })
      bodyResult({
        openid: '111',
        evaluateType: 6,
        result: this.body,
        toInsertDB: 0
      }).then( res =>{
        console.log('身体素质')
        console.log(res.data)
        this.bodydata = res.data.data
        // console.log(res.data.data.describe)
      })

    },
    getLearnResult () {
      postMathResult({
        openid: '111',
        evaluateType: 14,
        result: this.shisi,
        toInsertDB: 0
      }).then(res => {
        console.log('数学能力')
        console.log(res.data)
        this.shisiData = res.data.data
        // console.log(res.data.data.hobbyInfluenceContent)
      })
    },
    getMbti: function(){
      setTimeout(() => {
        console.log("sss:");
        console.log(this.mbti);
        getMbtiResult({
          openid:'111',
          result: this.mbti
        }).then(res =>{
          console.log('mbti')
          console.log(res.data)
          this.mbtiData = res.data.data.mbti
          this.mbtiprofession = res.data.data.professionInfoList
          // console.log(this.mbtiprofession[0].zhiyname)
          // console.log(res.data.data.mbti.describe)
        })
      },1000);
    },
    getBasic(){
      setTimeout(() => {
        carefulResult({
          openid:'111',
          result:this.care,
          type: 12
        }).then(res =>{
          console.log('细致')
          console.log(this.care)
          this.caredata = res.data.data
          // console.log(this.caredata.describe)
        })
        adjustResult({
          openid: '111',
          result: this.adjust,
          type: 13
        }).then(res =>{
          this.adjustdata = res.data.data
        })
        happyBrainResult({
          openid: '111',
          result: this.happy,
          type: 7
        }).then(res => {
          this.happydata = res.data.data
        })
        postPlanResult({
          openid: '111',
          result: this.plan,
          type : 11
        }).then(res => {
          this.plandata = res.data.data
        })
      },1000);

    },

    returnBack () {
      this.$router.go(-1)
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
  .one-step{
    margin-top: 20px;
  }
</style>
