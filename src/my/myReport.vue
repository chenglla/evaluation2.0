<template>
  <div class="app_container">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">我的报告</div>
    </div>
    <div class="resultInfo" ref="resultInfo">
      <div class="one-item" style="float: left;border-top: 1px solid #1db9ff ;">
        <el-row>
          <el-col :span="24">
            <div style="font-size: 20px;text-align:center;"><h4>测评报告</h4></div>
            <br/>
          </el-col>
          <div style="float: right;">测评编号：{{ testnumber }}</div>
        </el-row>
        <hr align="center" width="100%" size="0.1" color="#ebeef5"/>
        <span>测评者昵称：{{ name }}</span>
        <div>
          <div>
            <span>报告时间：{{ testtime }}</span>
          </div>
        </div>
        <div class="one-step">
          <div style="margin: 0 auto; ">
            <el-tag effect="plain">{{ mbtiData.brief }}</el-tag>
            <el-tag effect="plain" style="float: right">{{ shisiData.teacherInfluenceBrief }}</el-tag>
          </div>
          <el-row>

            <el-col :span="7" style="float: left ">
              <ul class="tag-list">
                <li>
                  <el-tag effect="plain">{{ sixData.brief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain">{{ bodydata.brief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain">{{ adjustdata.brief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain">{{ plandata.brief }}</el-tag>
                </li>
              </ul>
            </el-col>
            <el-col :span="10">
              <el-image
                :src="require('@/assets/123.png')"
              ></el-image>
            </el-col>
            <el-col :span="7">
              <ul class="tag-list" style="float:right;">
                <li>
                  <el-tag effect="plain">{{ shisiData.hobbyInfluenceBrief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain">{{ shisiData.othersInfluenceBrief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain">{{ study.brief }}</el-tag>
                </li>
                <li>
                  <el-tag effect="plain" style="padding: 0 6px 0 2px">{{ bigbrief }}</el-tag>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <div style="margin: 0 auto; ">
          <el-tag effect="plain">{{ happydata.brief }}</el-tag>
          <el-tag effect="plain" style="float: right">{{ caredata.brief }}</el-tag>
        </div>
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              性格测评-MBTI 测评结果
            </template>
            <div class="one-step">
              <h4>职业性格测评</h4>
              <p v-html="mbtiData.describe">MBTI:{{ this.mbtiData.describe.zhiyname}}</p>
              <h4>性格特征</h4>
              <p>{{ this.mbtiData.charactertype }}</p>
              <h4>适合职业</h4>
              <p v-for="item in mbtiprofession">{{ item.zhiyname }}</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="性格测评-大五人格测评">
            <div class="one-step">
              <h4>大五人格测评</h4>
              <el-row>
                <el-col :span="24">
                  <big-five-chart :personassdata="mapper[9]" @func1="getbigfivebrief"></big-five-chart>
                </el-col>

              </el-row>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">神经质或情绪稳定性(Neuroticism)：</span></p>
                <p>神经质指个体体验消极情绪的倾向。得分越低，表示情绪越稳定；得分越高，表示情绪越不稳定。20.4 分以下为
                  典型低分，38.8 分以上为典型高分。
                </p>
              </div>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">外倾性(Extraversion)：</span></p>
                <p>外倾性代表了在外界投入的能量。
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
                <p>尽责性指我们控制、管理和调节自身冲动的方式。
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
          </el-collapse-item>
          <el-collapse-item title="基本素养测评结果">
            <div class="one-step">
              <h4>基本素养测评</h4>
              <p><span style="font-weight: bold;color: #ffae45">计划性:</span>{{ plandata.describe }}</p>
              <p><span style="font-weight: bold;color: #ffae45">细致高效:</span>{{ caredata.describe }}</p>
              <p><span style="font-weight: bold;color: #ffae45">适应力:</span>{{ adjustdata.describe }}</p>
              <p><span style="font-weight: bold;color: #ffae45">积极乐观:</span>{{ happydata.describe }}</p>
              <p><span style="font-weight: bold;color: #ffae45">情绪稳定:</span>{{ emotiondata.describe }}</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="学习能力测评">
            <div class="one-step">
              <h4>学习能力</h4>
              <el-row>
                <el-col :span="24">
                  <study-ability-chart :learndata="mapper[3]" @func="getMsgFormSon"></study-ability-chart>
                </el-col>
              </el-row>

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
          </el-collapse-item>
          <el-collapse-item title="心理状态测评">
            <div class="one-step">
              <h4>心理状态测评</h4>
              <p>{{ this.sixData.level }}</p>
              <p>{{ this.sixData.describe }}</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="身体状态测评">
            <div class="one-step">
              <h4>身体状态测评</h4>
              <p>{{ this.bodydata.level }}</p>
              <p>{{ this.bodydata.describe }}</p>
            </div>
          </el-collapse-item>
          <el-collapse-item title="TIMSS-A 数学能力测评">
            <div class="one-step">
              <h4>TIMSS-A 数学能力测评</h4>
              <el-row>
                <el-col :span="24">
                  <math-ability-chart :mathdata="mapper[14]"></math-ability-chart>
                </el-col>
              </el-row>

            </div>
          </el-collapse-item>
          <el-collapse-item title="脑象图测评">
            <div class="one-step">
              <h4>看图方法</h4>
              <li>
                观察圆盘，找到上面的蓝色四边形区域。若这个四边形可以抽象为一个时钟的指针（也就是说指向某象限的那个角“锐”而不“钝”），那么您在此象限有明显倾向。指针越尖锐（夹角越小），倾向愈明显。有一些人会得出像利剑一般刺出了圆饼的图，这属于“超级倾向”，也就是说您在“剑刃”指向的大脑象限有非常强烈的倾向。
              </li>
              <li>若四边形呈“指针”形状不明显（怎么看也看不成指针），甚至越趋向类正方形，则说明您在ABCD四象限的倾向比较均衡。请参看第五类型描述。</li>
              <el-row>
                <el-col :span="24">
                  <brain-chart :braindata="mapper[10]"></brain-chart>
                </el-col>
              </el-row>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">A象限：</span></p>
                <p>
                  A象限的思维方式倾向于“理性”。像这类处于这个象限的人通常喜欢在收集事实资料后再做出决定，喜欢通过理性的逻辑思考引导他人。他们通常都善于理财，还能够很好地解决技术问题。理性型自我常会被缺乏逻辑性的意见、过分强调个人感受及含糊不清的指令搞得很沮丧。
                </p>
              </div>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff "> B象限：</span></p>
                <p>
                  B象限的思维方式倾向于“稳妥”。他们愿意按部就班、脚踏实地地生活，关注实实在在的人和事。根据实用、程序化的原则做出决定。工作中，像这样的“稳妥型自我”通常扮演的都是管理、组织或行政等角色。即使是娱乐，他们也喜欢选择那些要求事先计划的活动，如露营、钓鱼、旅游等。对日程不明确、突如其来的人或事、以及无截止期之类的情况很无奈。
                </p>
              </div>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">C象限：</span></p>
                <p>
                  C象限偏好是“感觉和情感”。处于这个象限的人都善于表达、敏感而且能够领会他人的需要。工作上，像这样的人大都是老师或者培训师，再不就是销售、作家、音乐家、艺术家、社会工作者或其他可以帮助他人的需要善于表达的职业。娱乐时，这种“情绪型”的人喜欢阅读、散步或者边听音乐边放松。缺乏人际沟通、毫无感情色彩的评论或者不愿意眼神交流的人常常会使以感觉为主导的人感到受挫折。
                </p>
              </div>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">D象限：</span></p>
                <p>
                  D象限的偏好则代表“直觉和创新”。所有这样偏好的人都是风险的承担者。期望打破常规，喜欢进行设想，能真正享受惊奇。作为探索者能享受成为企业家、艺术家、咨询师或者战略家而带来的身由感。由于他们的职业往往是激情所在，所以很难区分他们的工作与兴趣爱好。
                </p>
              </div>
              <div>
                <p><span style="font-weight: bolder;color: #5ea6ff ">第五类型：</span></p>
                <p>第五类型（均衡型大脑），无明显偏好。这种类型兼具ABCD象限的特点，既注重逻辑、分析与理性，以事实、统计、数据为基础，又能从纵观整体的方式解决问题。
                </p>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import {getAllUserAnswers, mentalBrainResult, getuserinfo} from '@/api/index'
import bigFiveChart from '@/my/reportCharts/bigFiveChart'
import studyAbilityChart from '@/my/reportCharts/studyAbilityChart'
import mathAbilityChart from '@/my/reportCharts/mathAbilityChart'
import brainChart from "./reportCharts/brainChart";
import {postMathResult} from '@/api/index'
import getMbtiResult from '@/api/index'
import {postPlanResult} from '@/api/index'
import {emotionResult} from "@/api/index";
import {carefulResult} from '@/api/index'
import {adjustResult} from '@/api/index'
import {happyBrainResult} from '@/api/index'
import {bodyResult} from '@/api/index'

export default {
  name: 'myReport',
  components: {
    bigFiveChart,
    studyAbilityChart,
    mathAbilityChart,
    brainChart
  },
  mounted() {
    this.getAll()
    setTimeout(() => {
      this.getusermsg()
      this.getMbti()
      this.getBasic()
      this.getHealthData()
      this.getLearnResult()
    }, 500)
  },
  data() {
    return {
      allData: [],
      mapper: {},
      six: {},
      sixData: '',
      mbti: {},
      mbtiData: '',
      mbtiprofession: [],
      shisi: {},
      shisiData: {},
      plan: {},
      plandata: '',
      care: {},
      caredata: '',
      adjust: {},
      adjustdata: '',
      happy: {},
      happydata: '',
      emotion: {},
      emotiondata: '',
      body: {},
      bodydata: '',
      name: '',
      testtime: '',
      testnumber: '',
      bigfivedata: '',
      describeData: '',
      study: '',
      bigbrief: '',
      // brain:{},
      // brainResult:[],
      // score:[],
      // newscore:[]
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
        this.emotion = this.mapper[8]
        // this.brain = this.mapper[10]
        console.log('测试14' + this.shisi)
      })
    },
    getMbti: function () {
      setTimeout(() => {
        console.log("sss:");
        console.log(this.mbti);
        getMbtiResult({
          openid: '111',
          result: this.mbti
        }).then(res => {
          console.log('mbti')
          console.log(res.data)
          this.mbtiData = res.data.data.mbti
          this.mbtiprofession = res.data.data.professionInfoList
          console.log('mbti描述')
          console.log(res.data.data.mbti.brief)
          // console.log(this.mbtiprofession[0].zhiyname)
          // console.log(res.data.data.mbti.describe)
        })
      }, 1000);
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
        console.log('心理素质描述')
        console.log(res.data.data.brief)

        // console.log(res.data.data.describe)
      })
      bodyResult({
        openid: '111',
        evaluateType: 6,
        result: this.body,
        toInsertDB: 0
      }).then(res => {
        console.log('身体素质')
        console.log(res.data)
        this.bodydata = res.data.data
        console.log('身体素质描述')
        console.log(res.data.data.brief)
        // console.log(res.data.data.describe)
      })

    },
    getLearnResult() {
      postMathResult({
        openid: '111',
        evaluateType: 14,
        result: this.shisi,
        toInsertDB: 0
      }).then(res => {
        console.log('数学能力')
        console.log(res.data)
        this.shisiData = res.data.data
        console.log('数学能力描述')
        console.log(res.data.data.teacherInfluenceBrief)
        // console.log(res.data.data.hobbyInfluenceContent)
      })
    },
    getBasic() {
      setTimeout(() => {
        carefulResult({
          openid: '111',
          result: this.care,
          type: 12
        }).then(res => {
          console.log('细致')
          console.log(this.care)
          this.caredata = res.data.data
          console.log('细致描述')
          console.log(res.data.data.brief)
          // console.log(this.caredata.describe)
        })
        adjustResult({
          openid: '111',
          result: this.adjust,
          type: 13
        }).then(res => {
          this.adjustdata = res.data.data
          console.log('适应描述')
          console.log(res.data.data.brief)
        })
        happyBrainResult({
          openid: '111',
          result: this.happy,
          type: 7
        }).then(res => {
          this.happydata = res.data.data
          console.log('乐观描述')
          console.log(res.data.data.brief)
        })
        emotionResult({
          openid: '111',
          result: this.emotion,
          type: 8
        }).then(res => {
          this.emotiondata = res.data.data
          console.log('情绪描述')
          console.log(res.data.data.brief)
        })
        postPlanResult({
          openid: '111',
          result: this.plan,
          type: 11
        }).then(res => {
          this.plandata = res.data.data
          console.log('计划描述')
          console.log(res.data.data.brief)
        })
      }, 1000);

    },
    getusermsg() {
      getuserinfo({
        userOpenId: 111,
        type: 1
      }).then(res => {
        console.log('名字');
        console.log(res)
        this.name = res.data.userNickName;
        this.testtime = res.data.testTime;
        this.testnumber = res.data.testNumber;
        this.describeData = res.data.describe;
      })
    },

    getMsgFormSon(data) {
      this.study = data
    },
    getbigfivebrief(data) {
      this.bigbrief = data;
    },

    returnBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.usermsg {
  float: left;
  border-top: 1px solid #1db9ff;
  padding: 7px 7px 13px 13px;

}

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

.return__icon {
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

.one-item {
  width: calc(100% - 56px);
  background: rgba(255, 255, 204, 0.1);
  padding: 7px 7px 7px 7px;
  border: 1px solid #1db9ff;
  border-radius: 4px;
  margin: 20px 20px 20px 20px;
  box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
  border-radius: 4px;
  border-color: #1db9ff;
  position: relative;
  /*overflow: hidden;*/
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

.one-step {
  /*width: 100%;*/
  /*height: 100%;*/
  /*background-image: url("../../src/assets/123.png");*/
  /*background-size: 100% 100%;*/
}

.first {
  list-style: none;
  list-style-image: url("../assets/logo.png");
  padding-left: 20px;
}

.iconxiajiantou {
  position: absolute;
  right: 30px;
  color: #BDC2CE;
}

.iconfont {
  font-size: 28px;
  color: #fff;
  line-height: 50px;
  text-align: center;
}

.tag-list {
  list-style: none;
  padding: 0;
}

.tag-list li {
  margin: 5px 0;
}

.type3_four_tip {
  /*border: 4px dashed rgba(66,185,130,0.4);*/
  border-radius: 10px;
  /*box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);*/
  padding: 0 5px 10px;
  margin: 3px 15px 15px;
}

li {
  /*text-indent: 2em;*/
  color: #9c9c9c;
  font-size: 12px;
  line-height: 26px;
}
</style>
