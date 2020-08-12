
<template>
  <div class="app-container">

    <div class="content">
      <div id="math" style="width:100%;height: 400px"/>
    </div>
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
      math:[],
      mathData:[],
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
      })
      this.option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: [
          {
            indicator: [
              { text: '理性创造脑' },
              { text: 'A象限' },
              { text: 'B象限' },
              { text: '传统情感脑' },
              { text: 'C象限' },
              { text: 'D象限' }
            ],
            center: ['50%', '50%'],
            radius: 80,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter: '【{value}】',
              textStyle: {
                color: '#72ACD1'
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
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
          // name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [0.2, 0.8, 0.5, 0.63, 0.32, 0.1]
              // name: '预算分配（Allocated Budget）'
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
