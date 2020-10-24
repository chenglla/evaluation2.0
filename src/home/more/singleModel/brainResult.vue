<template>
  <div class="learnAbility_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">脑图测试模型结果</div>
    </div>
    <div class="learnAbility_second">
      <div class="type3_four_tip">
        <h5>看图方法</h5>
      <li>观察圆盘，找到上面的蓝色四边形区域。若这个四边形可以抽象为一个时钟的指针（也就是说指向某象限的那个角“锐”而不“钝”），那么您在此象限有明显倾向。指针越尖锐（夹角越小），倾向愈明显。有一些人会得出像利剑一般刺出了圆饼的图，这属于“超级倾向”，也就是说您在“剑刃”指向的大脑象限有非常强烈的倾向。</li>
      <li>若四边形呈“指针”形状不明显（怎么看也看不成指针），甚至越趋向类正方形，则说明您在ABCD四象限的倾向比较均衡。请参看第五类型描述。</li>
       </div>
      <div ref="radar_chart" class="radar_chart"></div>
      <div class="type3_four_tip">
        <li>A象限的思维方式倾向于“理性”。像这类处于这个象限的人通常喜欢在收集事实资料后再做出决定，喜欢通过理性的逻辑思考引导他人。他们通常都善于理财，还能够很好地解决技术问题。理性型自我常会被缺乏逻辑性的意见、过分强调个人感受及含糊不清的指令搞得很沮丧。</li>
        <li>B象限的思维方式倾向于“稳妥”。他们愿意按部就班、脚踏实地地生活，关注实实在在的人和事。根据实用、程序化的原则做出决定。工作中，像这样的“稳妥型自我”通常扮演的都是管理、组织或行政等角色。即使是娱乐，他们也喜欢选择那些要求事先计划的活动，如露营、钓鱼、旅游等。对日程不明确、突如其来的人或事、以及无截止期之类的情况很无奈。</li>
        <li>C象限偏好是“感觉和情感”。处于这个象限的人都善于表达、敏感而且能够领会他人的需要。工作上，像这样的人大都是老师或者培训师，再不就是销售、作家、音乐家、艺术家、社会工作者或其他可以帮助他人的需要善于表达的职业。娱乐时，这种“情绪型”的人喜欢阅读、散步或者边听音乐边放松。缺乏人际沟通、毫无感情色彩的评论或者不愿意眼神交流的人常常会使以感觉为主导的人感到受挫折。</li>
        <li>D象限的偏好则代表“直觉和创新”。所有这样偏好的人都是风险的承担者。期望打破常规，喜欢进行设想，能真正享受惊奇。作为探索者能享受成为企业家、艺术家、咨询师或者战略家而带来的身由感。由于他们的职业往往是激情所在，所以很难区分他们的工作与兴趣爱好。</li>
        <li>第五类型（均衡型大脑），无明显偏好。这种类型兼具ABCD象限的特点，既注重逻辑、分析与理性，以事实、统计、数据为基础，又能从纵观整体的方式解决问题。</li>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {postBrainResult} from '@/api/index'
import { mapState } from 'vuex'
export default {
  name: 'brainResult',
  data () {
    return {
      // learnQuesList: [],
      brainResult: [],
      rusultList: [],
      score:[],
      radarChart: '',
      newscore:[]
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    }),
    answerList () {
      return JSON.parse(this.$route.query.list)
    }
  },
  mounted () {
    this.getBrainResult()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getBrainResult () {
      postBrainResult({
        openid: this.openid,
        evaluateType: 10,
        result: this.answerList
      }).then(res => {
        console.log('获取脑象图结果')
        console.log(res.data)
        this.brainResult = res.data.data
        for( var i = 3;i< this.brainResult.length;i++){
          this.score.push(this.brainResult[i].score)
        }
        console.log('分数',this.score)
        var OA = parseInt(this.score[0])
        var OB = parseInt(this.score[1])
        var OC = parseInt(this.score[2])
        var OD = parseInt(this.score[3])
        var temp = Math.sqrt(2)
        this.newscore.push((OD*OA)/(OD+OA)*temp)
        this.newscore.push(this.score[0])
        this.newscore.push((OB*OA)/(OB+OA)*temp)
        this.newscore.push(this.score[1])
        this.newscore.push((OB*OC)/(OC+OB)*temp)
        this.newscore.push(this.score[2])
        this.newscore.push((OC*OD)/(OD+OC)*temp)
        this.newscore.push(this.score[3])

        this.getRadarChart()
      })
    },
    getRadarChart () {
      console.log(this.newscore)
      this.radarChart = this.echarts.init(this.$refs.radar_chart)
      this.radarChart.setOption({
        radar: [
          {
            indicator: [
              { name: '理性创造脑', max:8},
              { name: 'A象限(理性逻辑)', max: 8},
              { name: '左脑', max: 8},
              { name: 'B象限(实感传统)', max: 8},
              { name: '传统情感脑', max: 8},
              { name: 'C象限(感性情感)', max: 8},
              { name: '右脑', max: 8},
              { name: 'D象限(直觉判断)', max: 8},
            ],
            center: ['50%', '50%'],
            radius: 72,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter: '{value}',
              textStyle: {
                color: '#72acd1'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)', 'rgb(114,172,209)'],
                shadowColor: 'rgba(0,0,0,0.3)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.5)'
              }
            }
          },

        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            symbolSize: 0,
            color:'#2f7ed8',
            lineStyle: {
              color:'#2f7ed8',
              width: 4
            },
            data: [
              {
                value: this.newscore,
                name: '图一',
                areaStyle: {
                  color: '#639ee2'
                }
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .control_info {
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
  /*.learnAbility_second {*/
  /*  margin-top: 10px;*/
  /*  padding: 5px 15px;*/
  /*}*/
  .learnAbility_second {
    margin: 25px 10px 15px;
    padding: 5px;
    box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);
    border-radius: 10px;
    background-color: #fff;
    p {
      text-indent: 1.5em;
    }
  }
  .resultInfo {
    margin-top: 15px;
    height: calc(100% - 50px);
    overflow: hidden;
    /*position: absolute;*/
    /*top: 45px;*/
    /*left: 0;*/
  }
  .radar_chart {
    padding-top: 5px;
    height: 200px;
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
