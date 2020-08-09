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
            <p>MBTI:你的性格类型是“ INFP”( 内向 +直觉 +情感 +知觉 ) 适合从事的职业有心理学家、心理辅导和咨询人员、人力资源管理、翻译、大学教师（人文学科）、社会工作者、图书管理员、服装设计师
              在大五人格测评中，您的宜人性比较强，相反开放性较弱。
            </p>
            <h4>性格特征</h4>
            <p>理想主义者，忠于自己的价值观及自己所重视的人。外在的生活与内在的价值观配合，有好奇心，很快看到事情的可能与否，能够加速对理念的实践。试图了解别人、协助别人发展潜能。适应力强，有弹性；如果和他们的价值观没有抵触，往往能包容他人。
              INFP 把内在的和谐视为高于其他一切。他们敏感、理想化、忠诚，对于个人价值具有一种强烈的荣誉感。他们个人信仰坚定，有为自认为有价值的事业献身的精神。
            </p>
            <h4>适合领域</h4>
            <p>创作性、艺术类 教育、研究、咨询类等。
            </p>
            <h4>适合职业</h4>
            <p>心理学家
              心理辅导和咨询人员
              人力资源管理
              翻译
              大学教师（人文学科）
              社会工作者
              图书管理员
              服装设计师
            </p>
          </div>
          <div class="one-step">
            <h4>大五人格测评</h4>
            <div>
              <big-five-chart></big-five-chart>
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
            <p><span style="font-weight: bold;color: #ffae45">计划性:</span>您有非常强的计划性，对于自己的学习工作，您有比较清晰的认知，会依据自己的现状制定合理的目标，在实现目标方面您也有自己的一套策略，并且在任务进行中，您能依据反馈进行评估，从而及时调整自己的计划和目标。
              对您来说，您更适应有计划的生活，计划缺失容易让您失去安全感，引发恐慌，而良好的计划性有助于您达成既定目标，让您的生活充满充实的感觉。
            </p>
            <p><span style="font-weight: bold;color: #ffae45">细致高效:</span>您富有耐心，并且具有做事认真仔细的品质。在面对一些较为单调的工作时您依旧能保持注意力的高度集中，高效、准确地完成任务内容。而且您也较为偏好这种工作，认为稳定和可预期的未来比较有安全感，未来您可尝试文字处理、数据处理等类型的工作。
            </p>
            <p><span style="font-weight: bold;color: #ffae45">适应力:</span>您在适应能力测试中的表现出色，这说明您具有较高的适应能力，能在面临不同的情景时，选择最有利于自己生存发展的应对方式，很快适应环境的变化。
              在面对新环境时您会积极融入，能理解和接受社会普世价值观，遇到逆境时积极自救，遇到大好环境时把握机会，感到疲劳时会进行自我调节等。
            </p>
            <p><span style="font-weight: bold;color: #ffae45">积极乐观:</span>您对周围人与事物的认知都比较正面和积极，您是一个自信乐观的人，在遇到困难和挫折时，也很少对自身产生怀疑。
              您对自身的认知准确，能清晰地认识到自己的优点和缺点；内驱力旺盛，能积极主动地去做自己感兴趣的事；有稳定的情绪、情感和坚定的意志，能积极地看待挫折，辩证地对待得失。
            </p>
            <p><span style="font-weight: bold;color: #ffae45">情绪稳定:</span>您的情绪稳定性水平较高，一般生活和学习中遇到的小挫折或者小确幸都很难引起您强烈的情绪反应，您的情绪反应也较为缓慢，受外界（或内部）条件变化而产生的波动较小。如当遇到事业成败等重大生活事件时，较易控制自己的情绪。
            </p>
          </div>
          <div class="one-step">
            <h4>学习能力</h4>
            <study-ability-chart></study-ability-chart>
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
            <p style="color: red">你生活上遇到了很大的困难，让你自感无法解决，压抑。长期处于情绪低落的你，可能需要改变自己当下，可以尝试运动来减缓压力，可以向朋友家人倾诉烦恼等方式缓解紧张的情绪，必要的时候可以寻求专业帮助。</p>
          </div>
          <div class="one-step">
            <h4>身体状态测评</h4>
            <p style="color: #66dd6e">优秀</p>
            <p style="color: #66dd6e">你的身心整体情况良好，能在这样一个高压力、高竞争的环境下保持好体格， 实属不易。建议继续保持现有的生活方式和饮食习惯，同时带动你身边的人，把健康传递给每个人。</p>
          </div>
          <div class="one-step">
            <h4>TIMSS-A 数学能力测评</h4>
            <math-ability-chart></math-ability-chart>
            <p>可以看出你非常喜欢当前教师的讲课风格。而一般的课堂类型有理智型、情感型、情理结合型、幽默型、典雅型、直观型、奇异型等不同的课堂类型，根据于课堂类型的关联关系你也间接的偏向于那种风格。</p>
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
      this.getMentalData()
      this.getLearnResult()
    }, 0)
  },
  data () {
    return {
      allData: [],
      mapper: {},
      six: {},
      sixData: '',
      shisi: {},
      shisiData: []
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
        // console.log(res.data.data.describe))
        this.allData = res.data.data
        for (let i = 0; i < this.allData.length; i++) {
          this.mapper[this.allData[i].evaluateType] = this.allData[i].evaluateAnswer
        }
        console.log('测试mapper表')
        console.log(this.mapper)
        this.six = this.mapper[6]
        console.log('测试6' + this.six)
        this.shisi = this.mapper[14]
      })
    },
    getMentalData: function () {
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
        // console.log(res.data.data.describe)
      })
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
