
<template>
  <div class="app-container">
    <div class="content">
      <div id="math" style="width:313px;height: 400px;"/>
    </div>
    <p>{{this.math.teacherInfluenceContent}}</p>
    <p>{{this.math.hobbyInfluenceContent}}</p>
    <p>{{this.math.othersInfluenceContent}}</p>
  </div>
</template>

<script>
import echarts from 'echarts'
import {postMathResult} from '@/api/index'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'bigFiveChart',
  props: ['mathdata'],
  data () {
    return {
      mathData:[],
      mathview:{},
      math:{}
    }
  },
  mounted () {
    this.mathResult()
    setTimeout(()=>{
      this.initChart()
    },1000)
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('math'), 'macarons')
      this.chart.setOption(this.option)
    },
    mathResult: function(){
      postMathResult({
        openid:'111',
        evaluateType:14,
        result: this.mathdata
      }).then(res =>{
        console.log('math')
        console.log(res.data)
        this.math = res.data.data
        this.mathData.push(this.math['hobbyInfluenceScale'])
        this.mathData.push(this.math['othersInfluenceScale'])
        this.mathData.push(this.math['teacherInfluenceScale'])
      })
      this.option = {
        tooltip: {},
        radar: [
          {
            indicator: [
              { text: '数学兴趣',max:1},
              { text: '数学意识' ,max:1},
              { text: '教师教学风格',max:1}
            ],
            center: ['50%', '50%'],
            radius: 80,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter: '{value}',
              textStyle: {
                color: '#72ACD1'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 1)',
                  'rgba(114, 172, 209, 1)', 'rgba(114, 172, 209, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
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
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }
        ],
          series: [{
          name:'能力数值',
          type: 'radar',
          data: [
            {
              value: this.mathData
            }
          ]
        }]
      }

    }
  }
}
</script>

<style scoped>

</style>
