<template>
  <div class="content">
    <div id="brain" style="width:313px;height: 400px;"/>
  </div>
</template>

<script>
import echarts from 'echarts'
import {postBrainResult} from '@/api/index'
import { mapState } from 'vuex'
require('echarts/theme/macarons') // echarts theme
export default {
  name: "brainChart",
  props: ['braindata'],
  data() {
    return {
      // learnQuesList: [],
      brainResult: [],
      rusultList: [],
      score: [],
      radarChart: '',
      newscore: [],
      // option :
    }
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    })
  },
  mounted() {
    this.getBrain()
    setTimeout(() => {
      this.initChart();
    }, 1000);
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('brain'), 'macarons')
      this.chart.setOption(this.option)
    },
    getBrain(){
      postBrainResult({
        openid: this.openid,
        evaluateType: 10,
        result: this.braindata
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
        this.option = {
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
              name: '能力数值',
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
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
