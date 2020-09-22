<template>
  <div class="control_info">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconfanhui"></i>
      </div>
      <div class="title">生涯控制模型结果</div>
    </div>
    <div class="learnAbility_second">
      <div class="resultInfo">
        <div ref="radar_chart" class="radar_chart"></div>
        <p style="margin-top: 20px"><span style="font-weight: bolder;color: #5ea6ff ">生涯调试：</span>是个体对于可预测的生涯任务，所参与的生涯角色与面对生涯变化或不可预测的生涯问题的准备程度与应对能力</p>
        <p><span style="font-weight: bolder;color: #5ea6ff ">生涯自信：</span>是个体对生涯走向的坚定、努力、勤奋程度</p>
        <p><span style="font-weight: bolder;color: #5ea6ff ">生涯好奇：</span>是个体对生涯走向的尝试、冒险、询问程度</p>
        <p><span style="font-weight: bolder;color: #5ea6ff ">生涯控制：</span>是个体意识到能够对未来发展的掌控感，是从工作领域的控制点引申过来的</p>
        <p><span style="font-weight: bolder;color: #5ea6ff ">生涯人际：</span>是个体在生涯历程中人际关系交往、沟通程度</p>
        <p><span style="font-weight: bolder;color: #5ea6ff ">生涯关注：</span>是个体对生涯觉察、投入、准备程度</p>
      </div>
    </div>

  </div>
</template>

<script>
import {postLearnAnswer} from '@/api/index'
import BScroll from 'better-scroll'
export default {
  name: 'controlResult',
  data () {
    return {
      controlResult: [],
      dataResult: [],
      dataEchart: [],
      radarChart: '',
      resultScroll: null
    }
  },
  computed: {
    answerList () {
      return JSON.parse(this.$route.query.list)
    }
  },
  mounted () {
    this.getLearnResult()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        // console.log()
        this.resultScroll = new BScroll(this.$refs.resultInfo, {
          click: true,
          bounce: false
        })
        console.log(this.resultScroll)
      })
    },
    getLearnResult () {
      postLearnAnswer({
        openid: '111',
        evaluateType: 4,
        result: this.answerList
      }).then(res => {
        console.log('获取生涯控制力结果')
        console.log(res.data)
        this.controlResult = res.data.data
        for (let i in this.controlResult) {
          const each = {text: this.controlResult[i].careerType, max: this.controlResult[i].fullScore}
          this.dataResult.push(each)
          this.dataEchart.push(this.controlResult[i].score)
        }
        this.drawPersonAssResult()
      })
    },
    drawPersonAssResult () {
      console.log('3333', this.personAssResult)
      this.radarChart = this.echarts.init(this.$refs.radar_chart)
      console.log('3333', this.radarChart)
      this.radarChart.setOption({
        // title: {
        //   text: '基础雷达图'
        // },
        // 图表的位置
        grid: {
          position: 'center'
        },
        tooltip: {
          // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true // 鼠标是否可以移动到tooltip区域内
        },
        legend: {
          data: ['预算分配（Allocated Budget）']
        },
        radar: { // polar
          nameGap: 5, // 图中工艺等字距离图的距离
          center: ['50%', '50%'], // 图的位置
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.dataResult
        },
        series: [{
          name: '能力比',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: this.dataEchart,
              label: {
                show: true,
                formatter: function (params) {
                  return params.value
                }
              }
            }
          ]
        }]
      })
      console.log('3333', this.radarChart)
      // this.init()
      this.$nextTick(() => {
        this.init()
        // this.resultScroll && this.resultScroll.refresh()
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
    padding-bottom: 20px;
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
</style>
